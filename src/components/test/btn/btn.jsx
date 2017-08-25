import React from 'react';
import Style from './btn.scss';

const btn = React.createClass({
    render() {
        return (
            <div className={Style['btnContainer']}>
                <a href="javascript:void(0)" className={Style['btn']}>next</a>
            </div>
        )
    }
});

export default btn;