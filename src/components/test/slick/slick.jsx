import React from 'react';
// import Style from './slick.scss';
import Slider from 'react-slick';
// import './slick-carousel/slick/slick.css';
// import './slick-carousel/slick/slick-theme.css';

const SimpleSlider = React.createClass({
    render () {
        const setting = {
            dots : true,
            infinite : true,
            speed : 500,
            slidesToShow : 1,
            slidesToScroll : 1
        };
        return (
            <Slider {...setting}>
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
                <div><h3>5</h3></div>
                <div><h3>6</h3></div>
            </Slider>
        )
    }
});
export default SimpleSlider;
