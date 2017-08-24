import render from '../../modules/helper-modules/base';
import Page   from './test';

render(Page);


// Hot Module Replacement API
if (module.hot) {
  import('./template.pug');
  module.hot.accept('./test', () => {
    render(Page);
  });
}