import React from 'react';
import PropTypes from 'prop-types';

import AsyncFactory, { importLazy } from '../../modules/helper-modules/async-component-factory';

const callAsyncModule = () => {
  // Async module importing
  import(/* webpackChunkName: "async-test" */ '../../modules/helper-modules/async-test.js').then((asyncModule) => {
    asyncModule.default.loaded();
  }).catch((err) => {
    console.log('Failed to load the async module!', err);
  });
};

const HelloWorld = ({ ModuleOne, ModuleTwo }) => (
  <div><ModuleOne callAsyncModule={callAsyncModule} /><ModuleTwo /></div>);

HelloWorld.propTypes = {
  ModuleOne: PropTypes.func.isRequired,
  ModuleTwo: PropTypes.func.isRequired,
};

const HelloWorldAsync = AsyncFactory(HelloWorld, {
  ModuleOne: () => importLazy(
    import(/* webpackChunkName: "async-module-one" */
      './sub-components/async-module-one/component.jsx')),
  ModuleTwo: () => importLazy(
    import(/* webpackChunkName: "async-module-two" */
      './sub-components/async-module-two/component.jsx')),
});

export default HelloWorldAsync;
