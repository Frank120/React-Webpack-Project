import render from '../../modules/helper-modules/base';
import Page   from './music';

render(Page);


// Hot Module Replacement API
if (module.hot) {
  import('./template.pug');
  module.hot.accept('./music', () => {
    render(Page);
  });
}