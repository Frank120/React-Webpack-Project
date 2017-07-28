import React from 'react';
import style from './gallery.scss';

let imageDatas = require('./assets/imagesDatas.json');

imageDatas = (function getImageURL(imageDataArr){
    for(var i = 0, j = imageDataArr.length; i < j; i++){
        var singleImageData = imageDataArr[i];

        singleImageData.imageURL = require('./assets/images/' + singleImageData.filename);

        imageDataArr[i] = singleImageData;
    }

    return imageDataArr;
})(imageDatas);

const ImgFingure = React.createClass({
    render : function () {
        return (
            <figure>
                <img src={ this.props.data.imageURL }
                     akt={ this.props.data.title }
                />
                <figcaption>
                    <h2>{ this.props.data.title }</h2>
                </figcaption>
            </figure>
        )
    }
});

const GalleryComponent = React.createClass ({
    render () {

        var controllerUtils = [],
            ImgFingures     = [];

        imageDatas.forEach(function(value) {
            ImgFingures.push(<ImgFingure data = { value }/>);
        });

        return (
            <section className='stage'>
                <section className='img-sec'>
                    {ImgFingures }
                </section>
                <nav className='controller-nav'>
                    {controllerUtils}
                </nav>
            </section>
        )
    }
});

export default GalleryComponent;