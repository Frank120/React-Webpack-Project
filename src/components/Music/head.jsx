import React from 'react';
import Style from './music.sass';

let Header = React.createClass({
    render() {
        return (
            <div className={Style['component-header']}>
                <img src="/static/images/logo.png" width='40' className={Style['head-logo']} alt=""/>
                <h1 className={Style['caption']}>React Music Player</h1>
            </div>
        )
    }
});