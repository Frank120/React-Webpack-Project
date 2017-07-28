/*
 The high order component to create component with asynchronously loaded sub modules
 https://webpack.js.org/guides/lazy-load-react/
 */

import React from 'react';
import PropTypes from 'prop-types';

class AsyncLoad extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = {
      isLoaded: false,
    };

    this.loadPromise = new Promise((resolve, reject) => {
      this.loadResolve = resolve;
      this.loadReject = reject;
    });
  }

  componentDidMount() {
    this._isMounted = true;
    this.load();
  }

  componentDidUpdate(previous) {
    const shouldLoad = !!Object.keys(this.props.modules)
      .filter(key => this.props.modules[key] !== previous.modules[key]).length;
    if (shouldLoad) {
      this.load();
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  load() {
    this.setState({
      isLoaded: false,
    });

    const { modules } = this.props;
    const keys = Object.keys(modules);

    Promise.all(keys.map(key => modules[key]()))
      .then(values => (
        keys.reduce((agg, key, index) => Object.assign({}, agg, { [key]: values[index] }), {})))
      .then((result) => {
        this.loadResolve(result);
        return this._isMounted && this.setState({ modules: result, isLoaded: true });
      })
      .catch((err) => {
        this.loadReject(err);
      });
  }

  render() {
    if (!this.state.isLoaded) return (<div>Loading..</div>);
    return React.Children.only(this.props.children(this.state.modules));
  }
}

AsyncLoad.propTypes = {
  children: PropTypes.func.isRequired,
  modules: PropTypes.object.isRequired,
};

const AsyncFactory = (Component, modules) => {
  if (!modules) {
    return Component;
  }

  // eslint-disable-next-line
  class AsyncWrapper extends React.Component {
    render() {
      return (<AsyncLoad ref={(component) => { this.AsyncLoad = component; }} modules={modules}>
        {mods => <Component {...mods} {...this.props} />}
      </AsyncLoad>);
    }
  }
  return AsyncWrapper;
};


export const importLazy = promise => (
  promise.then(result => result.default)
);

export default AsyncFactory;
