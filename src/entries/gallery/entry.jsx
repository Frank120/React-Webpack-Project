import render from '../../modules/helper-modules/base';
import Page from './gallery'


render(Page);

// Hot Module Replacement API
if (module.hot) {
  import('./template.pug');
  module.hot.accept('./gallery', () => {
    render(Page);
  });
}