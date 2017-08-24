import React from 'react';
import ReactDOM from 'react-dom';
import Style from './test.scss';
import Images from './iamges.json';
import '../../modules/helper-plugins/looper.js';

ImageData = (function getImageUrls(imagesDataArr){
    for(var i = 0, j = imagesDataArr.length; i < j; i++){
        var singleImage = imagesDataArr[i];
        singleImage.imageURL = require('../../assets/images/' + singleImage.name);
        imagesDataArr[i] = singleImage.imageURL;
    }

    return imagesDataArr;
}(Images));

const test = React.createClass({

    componentDidMount(){
        $("[data-test='testBar']").backgroundLoop({
            datas : ImageData
        });
    },

    render (){
        return (
            <div className = {Style['test']} ref="test" data-test="testBar"></div>
        )
    }
});

export default test;