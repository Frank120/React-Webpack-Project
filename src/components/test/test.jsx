import React from 'react';
import ReactDOM from 'react-dom';
import Style from './test.scss';
import Images from './iamges.json';
import Btn from './btn/btn';
import List from './list/list';
import '../../modules/helper-plugins/byte.js';

ImageData = (function getImageUrls(imagesDataArr){
    for(var i = 0, j = imagesDataArr.length; i < j; i++){
        var singleImage = imagesDataArr[i];
        singleImage.imageURL = require('../../assets/images/' + singleImage.name);
        imagesDataArr[i] = singleImage.imageURL;
    }

    return imagesDataArr;
}(Images));

const test = React.createClass({
    getInitialState(){
        return {
            data : []
        }
    },

    componentDidMount(){
        this.looper();
    },

    render (){
        return (
            <div className = {Style['test']} ref="test" data-test="testBar">
                <Btn></Btn>
                <List data = {ImageData}
                ></List>
            </div>
        )
    },

    looper(){
        const target = this.refs.test;

    }
});

export default test;