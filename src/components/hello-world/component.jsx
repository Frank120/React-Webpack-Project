import React from 'react';
import style from './style.scss';
import logo from './assets/react-logo.png';

class HelloWorld extends React.Component {
  componentWillMount() {
    console.log('component will mount!');
  }

  componentDidMount() {
    console.log('component did mount!');
  }

  componentWillUnmount() {
    console.log('component will unmount!');
  }

  render() {
    return (
      <div className={style['hello-world']}>Hello World!!!!!
        (from the full lifecycle component)
        <img src={logo} alt="logo" className={style['logo-img']} />
        <span className="icon-icon_B039" />
      </div>);
  }
}


export default HelloWorld;
