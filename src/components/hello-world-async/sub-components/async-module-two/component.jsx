import React from 'react';

import style from './style.scss';

const asyncComponentFunc = () => (
  <div className={style['hello-world']}>This is an functional async component!</div>);

export default asyncComponentFunc;
