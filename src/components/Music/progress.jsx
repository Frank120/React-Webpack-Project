import React from 'react';
import Style from './music.scss';

let Progress = React.createClass({
    render() {
        return (
            <div className={Style['components-progress']}>
                <div className={Style['progress']} style={{width:`${this.props.progress}%`}}></div>
                {/* { this.props.progress }s */}
            </div>
        )
    }
});

export default Progress;