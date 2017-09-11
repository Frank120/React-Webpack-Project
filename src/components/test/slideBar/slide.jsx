import React from 'react';
import Style from './side.scss';
import ReactSlider from 'react-slider';

const SlideBar = React.createClass({
    render () {
        console.log(ReactSlider);
        return (
            <ReactSlider withBars defaultValue={[0, 100]} className={Style['slider']}>
                <div className={Style['my-handle']}>1</div>
                <div className={Style['my-handle']}>2</div>
                <div className={Style['my-handle']}>3</div>
            </ReactSlider>
        );
    }
});
export default SlideBar;
