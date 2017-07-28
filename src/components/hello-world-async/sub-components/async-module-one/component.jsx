import React from 'react';
import PropTypes from 'prop-types';

import logo from './assets/react-logo.png';
import style from './style.scss';

// eslint-disable-next-line
class AsyncComponent extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { clicked: false };
  }

  render() {
    return (
      <div className={style['hello-world']}>
        {
          this.state.clicked ? <button onClick={() => {
            this.setState({ clicked: false });
          }}
          >Clicked!!!</button>
            :
          <button onClick={() => {
            this.props.callAsyncModule();
            this.setState({ clicked: true });
          }}
          >This is a full life cycle async
              component!!!</button>
        }
        <img src={logo} alt="logo" className={style['logo-img']} />
      </div>);
  }
}

AsyncComponent.defaultProps = {
  callAsyncModule: () => {
    console.log('No callback assigned!');
  },
};

AsyncComponent.propTypes = {
  callAsyncModule: PropTypes.func,
};

export default AsyncComponent;

