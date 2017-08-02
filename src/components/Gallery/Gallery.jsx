import React from 'react';
import ReactDOM from 'react-dom';
import Style from './gallery.scss';
// require('./gallery.css');

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

/**
 * 获取一个0~30° 之间的一个任意正付值
 */
function get30DegRandom(){
    return ((Math.random() > 0.5 ? '' : "-") + Math.ceil(Math.random() * 30));
};

const ImgFingure = React.createClass({

    /**
     * imgFigure 的点击处理函数
     */
    handleClick : function (e){

        if(this.props.arrange.isCenter){
            this.props.inverse();
        }else{
            this.props.center();
        }

        e.stopPropagation();
        e.preventDefault();
    },

    render : function () {

        var styleObj = {};
        /**
         * 如果props属性中指定了这张图片的位置  则使用
         */
        if(this.props.arrange.pos){
            styleObj = this.props.arrange.pos;
        }

        /**
         * 如果图片的旋转角度有值并且不为0  添加旋转角度
         */
        if(this.props.arrange.rotate){
            (['-moz-', '-ms-', '-webkit-', '']).forEach(function (value){
                 styleObj[value + 'transform'] = 'rotate(' + this.props.arrange.rotate + 'deg)';
            }.bind(this));
        }

        if(this.props.arrange.isCenter){
            styleObj.zIndex = 11;
        }

        var imgFigureClassName = "img-figure";
        imgFigureClassName = (this.props.arrange.isInverse ? "img-figure1" : "img-figure");
        console.log(imgFigureClassName);

        return (
            <figure className={Style[imgFigureClassName]} style= { styleObj } onClick= { this.handleClick }>
                <img src={ this.props.data.imageURL }
                     alt={ this.props.data.title }
                     className={Style['img-item']}
                />
                <figcaption>
                    <h2 className={Style["img-title"]}>{ this.props.data.title }</h2>
                    <div className = {Style["img-back"]} onClick={ this.handleClick }>
                        {/* <p>
                            {this.props.data.desc}
                        </p> */}
                    </div>
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

/**
 * 控制组件
 */
const ControllerUnit = React.createClass({
    handleClick : function (e) {
        e.preventDefault();
        e.stopPropagation();
    },
    render : function () {
        return (
            <span className={Style['controller-unit']}
                  onClick  = {this.handleClick}
            ></span>
        )
    }
});

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
     * 翻转图片
     * @param index 输入当前被执行 inverse 操作的图片对应的图片信息数组的index 值
     * @return {Function} 这是一个必报函数, 期内return一个真正被执行的函数
     */

     inverse : function (index){
        return function (){
            var imgsArrangeArr = this.state.imgsArrangeArr;

            imgsArrangeArr[index].isInverse = !imgsArrangeArr[index].isInverse;

            this.setState({
                imgsArrangeArr : imgsArrangeArr
            });

        }.bind(this);
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
            vPosRangeTopY  = vPosRange.topY,
            vPosRangeX     = vPosRange.x,

            imgsArrangeTopArr = [],
            topImgNum      = Math.floor(Math.random() * 2),
            topImgSpliceIndex = 0,
            imgsArrangeCenterArr = imgsArrangeArr.splice(centerIndex, 1);
        
            /**
             * 首先居中 centerIndex 的图片
             * 居中的图片 centerIndex 不需要旋转
             */
            imgsArrangeCenterArr[0]={
                pos : centerPos,
                rotate : 0,
                isCenter : true
            }

            /**
             * 取出要布局在上侧图片的信息
             */
            topImgSpliceIndex = Math.ceil(Math.random() *(imgsArrangeArr.length - topImgNum));

            imgsArrangeTopArr = imgsArrangeArr.splice(topImgSpliceIndex, topImgNum);

            /**
             * 布局在上侧的图片
             */
            imgsArrangeTopArr.forEach(function (value, index){
                imgsArrangeTopArr[index] = {
                    pos : {
                        top : getRangeRandom(vPosRangeTopY[0], vPosRangeTopY[1]),
                        left : getRangeRandom(vPosRangeX[0], vPosRangeX[1])
                    },
                    rotate : get30DegRandom(),
                    isCenter : false
                };
            });

            /**
             * 布局左右两侧的图片
             */
            for(var i = 0, j = imgsArrangeArr.length, k = j / 2; i < j; ++i){
                var hPosRangeLORX = null;
                /**
                 * 前半部分布局左边, 后半部分布局右边
                 */
                if(i < k) {
                    hPosRangeLORX = hPosRangeLeftSecX;
                }else{
                    hPosRangeLORX = hPosRangeRightSecX;
                }

                imgsArrangeArr[i] = {
                    pos : {
                        top : getRangeRandom(hPosRangeY[0], hPosRangeY[1]),
                        left : getRangeRandom(hPosRangeLORX[0], hPosRangeLORX[1])
                    },
                    rotate : get30DegRandom(),
                    isCenter : false
                };
            }

            if(imgsArrangeTopArr && imgsArrangeTopArr[0]){
                imgsArrangeArr.splice(topImgSpliceIndex, 0, imgsArrangeTopArr[0]);
            }
            
            imgsArrangeArr.splice(centerIndex, 0, imgsArrangeCenterArr[0]);

            this.setState({
                imgsArrangeArr : imgsArrangeArr
            });
    },

    /**
     * 利用 rearrange 函数 居中对应的index的图片
     * @param index, 需要被居中的图片对应的图片信息数组的index 值
     * @return {Function} 
     */
    center : function (index){
        return function (){
            this.rearrange(index);
        }.bind(this);
    },

    getInitialState : function (){
        return {
            imgsArrangeArr : []
        };
    },

    /**
     * 组件加载完成后, 为每张图片计算位置的范围
     */
    componentDidMount : function (){
        /**
         * 先拿到舞台的大小
         */
        var stageDom = ReactDOM.findDOMNode(this.refs.stage),
            stageW   = stageDom.scrollWidth,
            stageH   = stageDom.scrollHeight,
            halfStageW = Math.ceil(stageW/2),
            halfStageH = Math.ceil(stageH/2);

        /**
         * 拿到一个imgFigure的大小
         */
        var imgFigureDom = ReactDOM.findDOMNode(this.refs.imgFigure0),
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
        };

        /**
         * 左右两侧图片的位置
         */
        this.Constant.hPosRange.leftSecX[0] = -halfImgW;
        this.Constant.hPosRange.leftSecX[1] = halfStageW - halfImgW * 3;
        this.Constant.hPosRange.rightSecX[0] = halfStageW + halfImgW;
        this.Constant.hPosRange.rightSecX[1] = stageW - halfImgW;
        this.Constant.hPosRange.y[0] = -halfImgH;
        this.Constant.hPosRange.y[1] = stageH - halfStageH;

        this.Constant.vPosRange.topY[0] = -halfImgH;
        this.Constant.vPosRange.topY[1] = halfStageH - halfImgH * 3;
        this.Constant.vPosRange.x[0]    = halfStageW - imgW;
        this.Constant.vPosRange.x[1]    = halfStageW;

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
                    },
                    rotate : 0,
                    isInverse : false,
                    isCenter : false
                }
            }
            ImgFingures.push(<ImgFingure 
                data={ value } 
                key ={ index } 
                ref ={ 'imgFigure' + index } 
                arrange= { this.state.imgsArrangeArr[index] }
                inverse= { this.inverse(index) }
                center = { this.center(index) }
            />);

            controllerUtils.push(
                <ControllerUnit/>
            )

        }.bind(this));

        return (
            <section className={Style['stage']} ref='stage'>
                <section className={Style['img-sec']}>
                    {ImgFingures }
                </section>
                <nav className={Style['controller-nav']}>
                    {controllerUtils}
                </nav>
            </section>
        )
    }
});

export default GalleryComponent;