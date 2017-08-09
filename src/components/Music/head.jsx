import React from 'react';
import Style from './music.scss';
import Logo  from './assets/images/logo.png';

let Header = React.createClass({
    render() {
        return (
            <div className={Style['components-header']}>
                <img src={Logo} width='40' className={Style['head-logo']} alt=""/>
                <h1 className={Style['caption']}>React Music Player</h1>
            </div>
        )
    }
});

export default Header;