import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import Underscore from 'underscore';

/* eslint-disable */
import theBullyFont from '../../assets/fonts/the-bully.ttf';
import fonts from '../../assets/fonts/fonts.css';
import icons from '../../assets/iconmoon/style.css';
/* eslint-enable */

// TODO drop the hot loading process on production build
// eslint-disable-next-line
import { AppContainer } from 'react-hot-loader';

window.$ = jQuery.noConflict();
window._ = Underscore.noConflict();

const render = (Feed) => {
  ReactDOM.render(
    <AppContainer>
      <Feed />
    </AppContainer>,
      document.getElementById('app'),
  );
};

export default render;
