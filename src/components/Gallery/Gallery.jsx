import React from 'react';
import style from './gallery.scss';

/**
 * 获取图片的相关数据
 */
let imageDatas = require('./assets/imagesDatas.json');

/**
 * 利用自执行函数, 将图片名转换成图片URL路径信息
 */
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
            <figure className={style['img-figure']}>
                <img src={ this.props.data.imageURL }
                     alt={ this.props.data.title }
                     className={ style['img-item'] }
                />
                <figcaption>
                    <h2>{ this.props.data.title }</h2>
                </figcaption>
            </figure>
        )
    }
});

/**
 * 获取区间内的一个随机数
 */
function getRangeRandom(low, high){
    return Math.ceil(Math.random() * (high - low) + low);
};

const GalleryComponent = React.createClass ({

    Constant : {
        centerPos : {
            left : 0,
            rifht : 0
        },
        hPosRange : {
            leftSecX : [0, 0],
            rightSecX : [0, 0],
            y : [0, 0]
        },
        vPosRange : {
            x : [0, 0],
            topY : [0, 0]
        }
    },

    /**
     * 重新布局, 传入一个参数 指定哪个居中排布
     */
    rearrange : function (centerIndex){
        var imgsArrangeArr = this.state.imgsArrangeArr,
            Constant       = this.Constant,
            centerPos      = Constant.centerPos,
            hPosRange      = Constant.hPosRange,
            vPosRange      = Constant.vPosRange,
            hPosRangeLeftSecX = hPosRange.leftSecX,
            hPosRangeRightSecX = hPosRange.rightSecX,
            hPosRangeY     = hPosRange.y,
            vPosRangeTopY  = hPosRange.topY,
            vPosRangeX     = hPosRange.x,

            imgsArrangeTopArr = [],
            topImgNum      = Math.ceil(Math.random() * 2),
            topImgSpliceIndex = 0,
            imgsArrangeCenterArr = imgsArrangeArr.splice(centerIndex, 1);
        
            /**
             * 首先居中 centerIndex 的图片
             */
            imgsArrangeCenterArr[0].pos = centerPos;

            /**
             * 取出要布局在上侧图片的信息
             */
            topImgSpliceIndex = Math.ceil(Math.random() *(imgsArrangeArr.length - topImgNum));

            imgsArrangeTopArr = imgsArrangeArr.splice(topImgSpliceIndex, topImgNum);

            /**
             * 布局在上侧的图片
             */
            imgsArrangeTopArr.forEach(function (value, index){
                imgsArrangeTopArr[index].pos = {
                    top : getRangeRandom(vPosRangeTopY[0], vPosRangeTopY[1]),
                    left : getRangeRandom(vPosRangeX[0], vPosRangeX[1])
                }
            });

            /**
             * 布局左右两侧的图片
             */
    },

    getInitialState : function (){
        return {
            imgsArrangeArr : [
                {
                    pos : {
                        left : '0',
                        right : '0'
                    }
                }
            ]
        };
    },

    /**
     * 组件加载完成后, 为每张图片计算位置的范围
     */
    comPonentDidMount : function (){
        /**
         * 先拿到舞台的大小
         */
        var stageDom = React.findDOMNode(this.ref.state),
            stageW   = stageDom.scrollWidth,
            stageH   = stageDom.scrollHeight,
            halfStageW = Math.ceil(stageW/2),
            halfStageH = Math.ceil(stageH/2);

        /**
         * 拿到一个imgFigure的大小
         */
        var imgFigureDom = React.findDOMNode(this.ref.ImgFingure0),
            imgW         = imgFigureDom.scrollWidth,
            imgH         = imgFigureDom.scrollHeight,
            halfImgW     = Math.ceil(imgW/2),
            halfImgH     = Math.ceil(imgH/2);

        /**
         * 计算中心图片的位置
         */
        this.Constant.centerPos = {
            left : halfStageW - halfImgW,
            top  : halfStageH - halfImgH
        }

        /**
         * 左右两侧图片的位置
         */
        this.Constant.hPosRange.leftSecX[0] = -halfImgW;
        this.Constant.hPosRange.leftSecX[1] = halfStageW - halfImgW * 3;
        this.Constant.hPosRange.rightSecX[0] = halfStageW - halfImgW;
        this.Constant.hPosRange.rightSecx[1] = stageW - halfImgW;
        this.Constant.hPosRange.y[0] = -halfImgH;
        this.Constant.hPosRange.y[1] = stageH - halfStageH;

        this.Constant.hPosRange.topY[0] = -halfImgH,
        this.Constant.hPosRange.topY[1] = halfStageH - halfImgH * 3;
        this.Constant.hPosRange.x[0]    = halfStageW - imgW;
        this.Constant.hPosRange.x[1]    = halfImgW;

        this.rearrange(0);
    },

    render () {

        var controllerUtils = [],
            ImgFingures     = [];

        imageDatas.forEach(function (value, index){
            if(!this.state.imgsArrangeArr[index]){
                this.state.imgsArrangeArr[index] = {
                    pos : {
                        left : 0,
                        top  : 0
                    }
                }
            }
            ImgFingures.push(<ImgFingure data={ value } key={'item'+index} ref={'imgFigure' + index}/>);
        }.bind(this));

        return (
            <section className={style['stage']} ref='stage'>
                <section className={style['img-sec']}>
                    {ImgFingures }
                </section>
                <nav className={style['controller-nav']}>
                    {controllerUtils}
                </nav>
            </section>
        )
    }
});

export default GalleryComponent;