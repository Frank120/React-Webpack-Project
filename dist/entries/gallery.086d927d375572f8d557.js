webpackJsonp([5],{

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_helper_modules_base__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gallery__ = __webpack_require__(215);



__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__modules_helper_modules_base__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__gallery__["a" /* default */]);

// Hot Module Replacement API
if (false) {
  import('./template.pug');
  module.hot.accept('./gallery', function () {
    render(Page);
  });
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gallery_scss__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gallery_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__gallery_scss__);




/**
 * 获取图片的相关数据
 */
var imageDatas = __webpack_require__(530);

/**
 * 利用自执行函数, 将图片名转换成图片URL路径信息
 */
imageDatas = function getImageURL(imageDataArr) {
    for (var i = 0, j = imageDataArr.length; i < j; i++) {
        var singleImageData = imageDataArr[i];

        singleImageData.imageURL = __webpack_require__(529)("./" + singleImageData.filename);

        imageDataArr[i] = singleImageData;
    }

    return imageDataArr;
}(imageDatas);

/**
 * 获取一个0~30° 之间的一个任意正付值
 */
function get30DegRandom() {
    return (Math.random() > 0.5 ? '' : "-") + Math.ceil(Math.random() * 30);
};

var ImgFingure = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
    displayName: 'ImgFingure',


    /**
     * imgFigure 的点击处理函数
     */
    handleClick: function handleClick(e) {

        if (this.props.arrange.isCenter) {
            this.props.inverse();
        } else {
            this.props.center();
        }

        e.stopPropagation();
        e.preventDefault();
    },

    render: function render() {

        var styleObj = {};
        /**
         * 如果props属性中指定了这张图片的位置  则使用
         */
        if (this.props.arrange.pos) {
            styleObj = this.props.arrange.pos;
        }

        /**
         * 如果图片的旋转角度有值并且不为0  添加旋转角度
         */
        if (this.props.arrange.rotate) {
            ['MozTransform', 'msTransform', 'WebkitTransform', 'transform'].forEach(function (value) {
                styleObj[value] = 'rotate(' + this.props.arrange.rotate + 'deg)';
            }.bind(this));
        }

        if (this.props.arrange.isCenter) {
            styleObj.zIndex = 11;
        }

        var imgFigureClassName = "img-figure";
        imgFigureClassName = this.props.arrange.isInverse ? "img-figure1" : "img-figure";
        console.log(imgFigureClassName);

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'figure',
            { className: __WEBPACK_IMPORTED_MODULE_2__gallery_scss___default.a[imgFigureClassName], style: styleObj, onClick: this.handleClick },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: this.props.data.imageURL,
                alt: this.props.data.title,
                className: __WEBPACK_IMPORTED_MODULE_2__gallery_scss___default.a['img-item']
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'figcaption',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h2',
                    { className: __WEBPACK_IMPORTED_MODULE_2__gallery_scss___default.a["img-title"] },
                    this.props.data.title
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: __WEBPACK_IMPORTED_MODULE_2__gallery_scss___default.a["img-back"], onClick: this.handleClick },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'p',
                        null,
                        this.props.data.desc
                    )
                )
            )
        );
    }
});

/**
 * 获取区间内的一个随机数
 */
function getRangeRandom(low, high) {
    return Math.ceil(Math.random() * (high - low) + low);
};

/**
 * 控制组件
 */
var ControllerUnit = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
    displayName: 'ControllerUnit',

    handleClick: function handleClick(e) {

        /**
         * 如果点击的是当前正在选中状态的按钮 翻转图片 否则将对应的图片居中
         */
        if (this.props.arrange.isCenter) {
            this.props.inverse();
        } else {
            this.props.center();
        }

        e.preventDefault();
        e.stopPropagation();
    },
    render: function render() {
        var controllerUtilsClassName = "controller-unit";

        /**
         * 如果对应的是居中的图片, 显示按钮的居中态
         */
        if (this.props.arrange.isCenter) {
            controllerUtilsClassName = "controller-unit-center";

            if (this.props.arrange.isInverse) {
                controllerUtilsClassName = "controller-unit-center-inverse";
            }
        }

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: __WEBPACK_IMPORTED_MODULE_2__gallery_scss___default.a[controllerUtilsClassName],
                onClick: this.handleClick
            },
            this.props.item
        );
    }
});

var GalleryComponent = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
    displayName: 'GalleryComponent',


    Constant: {
        centerPos: {
            left: 0,
            rifht: 0
        },
        hPosRange: {
            leftSecX: [0, 0],
            rightSecX: [0, 0],
            y: [0, 0]
        },
        vPosRange: {
            x: [0, 0],
            topY: [0, 0]
        }
    },

    /**
     * 翻转图片
     * @param index 输入当前被执行 inverse 操作的图片对应的图片信息数组的index 值
     * @return {Function} 这是一个必报函数, 期内return一个真正被执行的函数
     */

    inverse: function inverse(index) {
        return function () {
            var imgsArrangeArr = this.state.imgsArrangeArr;

            imgsArrangeArr[index].isInverse = !imgsArrangeArr[index].isInverse;

            this.setState({
                imgsArrangeArr: imgsArrangeArr
            });
        }.bind(this);
    },

    /**
     * 重新布局, 传入一个参数 指定哪个居中排布
     */
    rearrange: function rearrange(centerIndex) {
        var imgsArrangeArr = this.state.imgsArrangeArr,
            Constant = this.Constant,
            centerPos = Constant.centerPos,
            hPosRange = Constant.hPosRange,
            vPosRange = Constant.vPosRange,
            hPosRangeLeftSecX = hPosRange.leftSecX,
            hPosRangeRightSecX = hPosRange.rightSecX,
            hPosRangeY = hPosRange.y,
            vPosRangeTopY = vPosRange.topY,
            vPosRangeX = vPosRange.x,
            imgsArrangeTopArr = [],
            topImgNum = Math.floor(Math.random() * 2),
            //取一个 或者不取
        topImgSpliceIndex = 0,
            imgsArrangeCenterArr = imgsArrangeArr.splice(centerIndex, 1);

        /**
         * 首先居中 centerIndex 的图片
         * 居中的图片 centerIndex 不需要旋转
         */
        imgsArrangeCenterArr[0] = {
            pos: centerPos,
            rotate: 0,
            isCenter: true

            /**
             * 取出要布局在上侧图片的信息
             */
        };topImgSpliceIndex = Math.ceil(Math.random() * (imgsArrangeArr.length - topImgNum));

        imgsArrangeTopArr = imgsArrangeArr.splice(topImgSpliceIndex, topImgNum);

        /**
         * 布局在上侧的图片
         */
        imgsArrangeTopArr.forEach(function (value, index) {
            imgsArrangeTopArr[index] = {
                pos: {
                    top: getRangeRandom(vPosRangeTopY[0], vPosRangeTopY[1]),
                    left: getRangeRandom(vPosRangeX[0], vPosRangeX[1])
                },
                rotate: get30DegRandom(),
                isCenter: false
            };
        });

        /**
         * 布局左右两侧的图片
         */
        for (var i = 0, j = imgsArrangeArr.length, k = j / 2; i < j; ++i) {
            var hPosRangeLORX = null;
            /**
             * 前半部分布局左边, 后半部分布局右边
             */
            if (i < k) {
                hPosRangeLORX = hPosRangeLeftSecX;
            } else {
                hPosRangeLORX = hPosRangeRightSecX;
            }

            imgsArrangeArr[i] = {
                pos: {
                    top: getRangeRandom(hPosRangeY[0], hPosRangeY[1]),
                    left: getRangeRandom(hPosRangeLORX[0], hPosRangeLORX[1])
                },
                rotate: get30DegRandom(),
                isCenter: false
            };
        }

        if (imgsArrangeTopArr && imgsArrangeTopArr[0]) {
            imgsArrangeArr.splice(topImgSpliceIndex, 0, imgsArrangeTopArr[0]);
        }

        imgsArrangeArr.splice(centerIndex, 0, imgsArrangeCenterArr[0]);

        this.setState({
            imgsArrangeArr: imgsArrangeArr
        });
    },

    /**
     * 利用 rearrange 函数 居中对应的index的图片
     * @param index, 需要被居中的图片对应的图片信息数组的index 值
     * @return {Function} 
     */
    center: function center(index) {
        return function () {
            this.rearrange(index);
        }.bind(this);
    },

    getInitialState: function getInitialState() {
        return {
            imgsArrangeArr: []
        };
    },

    /**
     * 组件加载完成后, 为每张图片计算位置的范围
     */
    componentDidMount: function componentDidMount() {
        /**
         * 先拿到舞台的大小
         */
        var stageDom = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this.refs.stage),
            stageW = stageDom.scrollWidth,
            stageH = stageDom.scrollHeight,
            halfStageW = Math.ceil(stageW / 2),
            halfStageH = Math.ceil(stageH / 2);

        /**
         * 拿到一个imgFigure的大小
         */
        var imgFigureDom = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this.refs.imgFigure0),
            imgW = imgFigureDom.scrollWidth,
            imgH = imgFigureDom.scrollHeight,
            halfImgW = Math.ceil(imgW / 2),
            halfImgH = Math.ceil(imgH / 2);

        /**
         * 计算中心图片的位置
         */
        this.Constant.centerPos = {
            left: halfStageW - halfImgW,
            top: halfStageH - halfImgH
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
        this.Constant.vPosRange.x[0] = halfStageW - imgW;
        this.Constant.vPosRange.x[1] = halfStageW;

        this.rearrange(0);
    },

    render: function render() {

        var controllerUtils = [],
            ImgFingures = [];

        imageDatas.forEach(function (value, index) {
            if (!this.state.imgsArrangeArr[index]) {
                this.state.imgsArrangeArr[index] = {
                    pos: {
                        left: 0,
                        top: 0
                    },
                    rotate: 0,
                    isInverse: false,
                    isCenter: false
                };
            }
            ImgFingures.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ImgFingure, {
                data: value,
                key: index,
                ref: 'imgFigure' + index,
                arrange: this.state.imgsArrangeArr[index],
                inverse: this.inverse(index),
                center: this.center(index)
            }));

            controllerUtils.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ControllerUnit, {
                arrange: this.state.imgsArrangeArr[index],
                inverse: this.inverse(index),
                center: this.center(index),
                key: index,
                item: index + 1
            }));
        }.bind(this));

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'section',
            { className: __WEBPACK_IMPORTED_MODULE_2__gallery_scss___default.a['stage'], ref: 'stage' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'section',
                { className: __WEBPACK_IMPORTED_MODULE_2__gallery_scss___default.a['img-sec'] },
                ImgFingures
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'nav',
                { className: __WEBPACK_IMPORTED_MODULE_2__gallery_scss___default.a['controller-nav'] },
                controllerUtils
            )
        );
    }
});

var _default = GalleryComponent;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(get30DegRandom, 'get30DegRandom', 'C:/Users/frank.wang/Desktop/React-Webpack-Project/src/components/Gallery/Gallery.jsx');

    __REACT_HOT_LOADER__.register(ImgFingure, 'ImgFingure', 'C:/Users/frank.wang/Desktop/React-Webpack-Project/src/components/Gallery/Gallery.jsx');

    __REACT_HOT_LOADER__.register(getRangeRandom, 'getRangeRandom', 'C:/Users/frank.wang/Desktop/React-Webpack-Project/src/components/Gallery/Gallery.jsx');

    __REACT_HOT_LOADER__.register(ControllerUnit, 'ControllerUnit', 'C:/Users/frank.wang/Desktop/React-Webpack-Project/src/components/Gallery/Gallery.jsx');

    __REACT_HOT_LOADER__.register(GalleryComponent, 'GalleryComponent', 'C:/Users/frank.wang/Desktop/React-Webpack-Project/src/components/Gallery/Gallery.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/frank.wang/Desktop/React-Webpack-Project/src/components/Gallery/Gallery.jsx');
}();

;

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Gallery_Gallery__ = __webpack_require__(208);



var Page = function Page() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Gallery_Gallery__["a" /* default */], null)
    );
};

var _default = Page;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Page, 'Page', 'C:/Users/frank.wang/Desktop/React-Webpack-Project/src/entries/gallery/gallery.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/frank.wang/Desktop/React-Webpack-Project/src/entries/gallery/gallery.jsx');
}();

;

/***/ }),

/***/ 399:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"content":"content-36BaK","stage":"stage-3X9hr","img-sec":"img-sec-niujX","img-figure":"img-figure-23mbS","img-item":"img-item-15yZS","img-figure1":"img-figure1-9ZSts","img-title":"img-title-38XSY","img-back":"img-back-7-5VI","controller-nav":"controller-nav-14-0L","controller-unit":"controller-unit-VJ8PF","controller-unit-center":"controller-unit-center-1PxfV","controller-unit-center-inverse":"controller-unit-center-inverse-3pz5k"};

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/src/components/Gallery/assets/images//1.png";

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/src/components/Gallery/assets/images//10.jpg";

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/src/components/Gallery/assets/images//11.jpg";

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/src/components/Gallery/assets/images//12.png";

/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/src/components/Gallery/assets/images//13.jpg";

/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/src/components/Gallery/assets/images//14.jpg";

/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/src/components/Gallery/assets/images//15.jpg";

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/src/components/Gallery/assets/images//16.jpg";

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/src/components/Gallery/assets/images//2.jpg";

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/src/components/Gallery/assets/images//3.jpg";

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/src/components/Gallery/assets/images//4.jpg";

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/src/components/Gallery/assets/images//5.jpg";

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/src/components/Gallery/assets/images//6.jpg";

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/src/components/Gallery/assets/images//7.jpg";

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/src/components/Gallery/assets/images//8.jpg";

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/src/components/Gallery/assets/images//9.jpg";

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./1.png": 510,
	"./10.jpg": 511,
	"./11.jpg": 512,
	"./12.png": 513,
	"./13.jpg": 514,
	"./14.jpg": 515,
	"./15.jpg": 516,
	"./16.jpg": 517,
	"./2.jpg": 518,
	"./3.jpg": 519,
	"./4.jpg": 520,
	"./5.jpg": 521,
	"./6.jpg": 522,
	"./7.jpg": 523,
	"./8.jpg": 524,
	"./9.jpg": 525
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 529;

/***/ }),

/***/ 530:
/***/ (function(module, exports) {

module.exports = [{"filename":"1.png","title":"pada","desc":"this is my frist React demo , every body can give more advise to this project !"},{"filename":"2.jpg","title":"WuYanZu","desc":"this is my frist React demo , every body can give more advise to this project !"},{"filename":"3.jpg","title":"JingTian","desc":"this is my frist React demo , every body can give more advise to this project !"},{"filename":"3.jpg","title":"JingTian","desc":"this is my frist React demo , every body can give more advise to this project !"},{"filename":"4.jpg","title":"LuJingSan","desc":"this is my frist React demo , every body can give more advise to this project !"},{"filename":"5.jpg","title":"LuJingSan","desc":"this is my frist React demo , every body can give more advise to this project !"},{"filename":"6.jpg","title":"Malta","desc":"this is my frist React demo , every body can give more advise to this project !"},{"filename":"7.jpg","title":"Malta","desc":"this is my frist React demo , every body can give more advise to this project !"},{"filename":"8.jpg","title":"Paris","desc":"this is my frist React demo , every body can give more advise to this project !"},{"filename":"9.jpg","title":"Malta","desc":"this is my frist React demo , every body can give more advise to this project !"},{"filename":"10.jpg","title":"Paris","desc":"this is my frist React demo , every body can give more advise to this project !"},{"filename":"11.jpg","title":"Venice","desc":"this is my frist React demo , every body can give more advise to this project !"},{"filename":"12.png","title":"Grand Canyon","desc":"this is my frist React demo , every body can give more advise to this project !"},{"filename":"13.jpg","title":"One 77","desc":"this is my frist React demo , every body can give more advise to this project !"},{"filename":"14.jpg","title":"Ferrari","desc":"this is my frist React demo , every body can give more advise to this project !"},{"filename":"15.jpg","title":"Ray Dayton","desc":"this is my frist React demo , every body can give more advise to this project !"},{"filename":"16.jpg","title":"Pagani","desc":"this is my frist React demo , every body can give more advise to this project !"}]

/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(37);
module.exports = __webpack_require__(206);


/***/ })

},[535]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZW50cmllcy9nYWxsZXJ5L2VudHJ5LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYWxsZXJ5L0dhbGxlcnkuanN4Iiwid2VicGFjazovLy8uL3NyYy9lbnRyaWVzL2dhbGxlcnkvZ2FsbGVyeS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvR2FsbGVyeS9nYWxsZXJ5LnNjc3M/YzBjOSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYWxsZXJ5L2Fzc2V0cy9pbWFnZXMvMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvR2FsbGVyeS9hc3NldHMvaW1hZ2VzLzEwLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYWxsZXJ5L2Fzc2V0cy9pbWFnZXMvMTEuanBnIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dhbGxlcnkvYXNzZXRzL2ltYWdlcy8xMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvR2FsbGVyeS9hc3NldHMvaW1hZ2VzLzEzLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYWxsZXJ5L2Fzc2V0cy9pbWFnZXMvMTQuanBnIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dhbGxlcnkvYXNzZXRzL2ltYWdlcy8xNS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvR2FsbGVyeS9hc3NldHMvaW1hZ2VzLzE2LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYWxsZXJ5L2Fzc2V0cy9pbWFnZXMvMi5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvR2FsbGVyeS9hc3NldHMvaW1hZ2VzLzMuanBnIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dhbGxlcnkvYXNzZXRzL2ltYWdlcy80LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYWxsZXJ5L2Fzc2V0cy9pbWFnZXMvNS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvR2FsbGVyeS9hc3NldHMvaW1hZ2VzLzYuanBnIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dhbGxlcnkvYXNzZXRzL2ltYWdlcy83LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYWxsZXJ5L2Fzc2V0cy9pbWFnZXMvOC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvR2FsbGVyeS9hc3NldHMvaW1hZ2VzLzkuanBnIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dhbGxlcnkvYXNzZXRzL2ltYWdlcyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dhbGxlcnkvYXNzZXRzL2ltYWdlc0RhdGFzLmpzb24iXSwibmFtZXMiOlsicmVuZGVyIiwibW9kdWxlIiwiaG90IiwiYWNjZXB0IiwiUGFnZSIsImltYWdlRGF0YXMiLCJyZXF1aXJlIiwiZ2V0SW1hZ2VVUkwiLCJpbWFnZURhdGFBcnIiLCJpIiwiaiIsImxlbmd0aCIsInNpbmdsZUltYWdlRGF0YSIsImltYWdlVVJMIiwiZmlsZW5hbWUiLCJnZXQzMERlZ1JhbmRvbSIsIk1hdGgiLCJyYW5kb20iLCJjZWlsIiwiSW1nRmluZ3VyZSIsIlJlYWN0IiwiY3JlYXRlQ2xhc3MiLCJoYW5kbGVDbGljayIsImUiLCJwcm9wcyIsImFycmFuZ2UiLCJpc0NlbnRlciIsImludmVyc2UiLCJjZW50ZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsInN0eWxlT2JqIiwicG9zIiwicm90YXRlIiwiZm9yRWFjaCIsInZhbHVlIiwiYmluZCIsInpJbmRleCIsImltZ0ZpZ3VyZUNsYXNzTmFtZSIsImlzSW52ZXJzZSIsImNvbnNvbGUiLCJsb2ciLCJTdHlsZSIsImRhdGEiLCJ0aXRsZSIsImRlc2MiLCJnZXRSYW5nZVJhbmRvbSIsImxvdyIsImhpZ2giLCJDb250cm9sbGVyVW5pdCIsImNvbnRyb2xsZXJVdGlsc0NsYXNzTmFtZSIsIml0ZW0iLCJHYWxsZXJ5Q29tcG9uZW50IiwiQ29uc3RhbnQiLCJjZW50ZXJQb3MiLCJsZWZ0IiwicmlmaHQiLCJoUG9zUmFuZ2UiLCJsZWZ0U2VjWCIsInJpZ2h0U2VjWCIsInkiLCJ2UG9zUmFuZ2UiLCJ4IiwidG9wWSIsImluZGV4IiwiaW1nc0FycmFuZ2VBcnIiLCJzdGF0ZSIsInNldFN0YXRlIiwicmVhcnJhbmdlIiwiY2VudGVySW5kZXgiLCJoUG9zUmFuZ2VMZWZ0U2VjWCIsImhQb3NSYW5nZVJpZ2h0U2VjWCIsImhQb3NSYW5nZVkiLCJ2UG9zUmFuZ2VUb3BZIiwidlBvc1JhbmdlWCIsImltZ3NBcnJhbmdlVG9wQXJyIiwidG9wSW1nTnVtIiwiZmxvb3IiLCJ0b3BJbWdTcGxpY2VJbmRleCIsImltZ3NBcnJhbmdlQ2VudGVyQXJyIiwic3BsaWNlIiwidG9wIiwiayIsImhQb3NSYW5nZUxPUlgiLCJnZXRJbml0aWFsU3RhdGUiLCJjb21wb25lbnREaWRNb3VudCIsInN0YWdlRG9tIiwiUmVhY3RET00iLCJmaW5kRE9NTm9kZSIsInJlZnMiLCJzdGFnZSIsInN0YWdlVyIsInNjcm9sbFdpZHRoIiwic3RhZ2VIIiwic2Nyb2xsSGVpZ2h0IiwiaGFsZlN0YWdlVyIsImhhbGZTdGFnZUgiLCJpbWdGaWd1cmVEb20iLCJpbWdGaWd1cmUwIiwiaW1nVyIsImltZ0giLCJoYWxmSW1nVyIsImhhbGZJbWdIIiwiY29udHJvbGxlclV0aWxzIiwiSW1nRmluZ3VyZXMiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLG9HQUFBQSxDQUFPLHlEQUFQOztBQUVBO0FBQ0EsSUFBSSxLQUFKLEVBQWdCO0FBQ2QsU0FBTyxnQkFBUDtBQUNBQyxTQUFPQyxHQUFQLENBQVdDLE1BQVgsQ0FBa0IsV0FBbEIsRUFBK0IsWUFBTTtBQUNuQ0gsV0FBT0ksSUFBUDtBQUNELEdBRkQ7QUFHRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNa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Ozs7OztBQ0RsQixxRzs7Ozs7OztBQ0FBLHNHOzs7Ozs7O0FDQUEsc0c7Ozs7Ozs7QUNBQSxzRzs7Ozs7OztBQ0FBLHNHOzs7Ozs7O0FDQUEsc0c7Ozs7Ozs7QUNBQSxzRzs7Ozs7OztBQ0FBLHNHOzs7Ozs7O0FDQUEscUc7Ozs7Ozs7QUNBQSxxRzs7Ozs7OztBQ0FBLHFHOzs7Ozs7O0FDQUEscUc7Ozs7Ozs7QUNBQSxxRzs7Ozs7OztBQ0FBLHFHOzs7Ozs7O0FDQUEscUc7Ozs7Ozs7QUNBQSxxRzs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Qjs7Ozs7OztBQ2hDQSxtQkFBbUIsMkhBQTJILEVBQUUsOEhBQThILEVBQUUsK0hBQStILEVBQUUsK0hBQStILEVBQUUsZ0lBQWdJLEVBQUUsZ0lBQWdJLEVBQUUsNEhBQTRILEVBQUUsNEhBQTRILEVBQUUsNEhBQTRILEVBQUUsNEhBQTRILEVBQUUsNkhBQTZILEVBQUUsOEhBQThILEVBQUUsb0lBQW9JLEVBQUUsOEhBQThILEVBQUUsK0hBQStILEVBQUUsa0lBQWtJLEVBQUUsOEhBQThILEMiLCJmaWxlIjoiZW50cmllcy9nYWxsZXJ5LjA4NmQ5MjdkMzc1NTcyZjhkNTU3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlbmRlciBmcm9tICcuLi8uLi9tb2R1bGVzL2hlbHBlci1tb2R1bGVzL2Jhc2UnO1xyXG5pbXBvcnQgUGFnZSBmcm9tICcuL2dhbGxlcnknXHJcblxyXG5cclxucmVuZGVyKFBhZ2UpO1xyXG5cclxuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudCBBUElcclxuaWYgKG1vZHVsZS5ob3QpIHtcclxuICBpbXBvcnQoJy4vdGVtcGxhdGUucHVnJyk7XHJcbiAgbW9kdWxlLmhvdC5hY2NlcHQoJy4vZ2FsbGVyeScsICgpID0+IHtcclxuICAgIHJlbmRlcihQYWdlKTtcclxuICB9KTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbnRyaWVzL2dhbGxlcnkvZW50cnkuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBTdHlsZSBmcm9tICcuL2dhbGxlcnkuc2Nzcyc7XHJcblxyXG4vKipcclxuICog6I635Y+W5Zu+54mH55qE55u45YWz5pWw5o2uXHJcbiAqL1xyXG5sZXQgaW1hZ2VEYXRhcyA9IHJlcXVpcmUoJy4vYXNzZXRzL2ltYWdlc0RhdGFzLmpzb24nKTtcclxuXHJcbi8qKlxyXG4gKiDliKnnlKjoh6rmiafooYzlh73mlbAsIOWwhuWbvueJh+WQjei9rOaNouaIkOWbvueJh1VSTOi3r+W+hOS/oeaBr1xyXG4gKi9cclxuaW1hZ2VEYXRhcyA9IChmdW5jdGlvbiBnZXRJbWFnZVVSTChpbWFnZURhdGFBcnIpe1xyXG4gICAgZm9yKHZhciBpID0gMCwgaiA9IGltYWdlRGF0YUFyci5sZW5ndGg7IGkgPCBqOyBpKyspe1xyXG4gICAgICAgIHZhciBzaW5nbGVJbWFnZURhdGEgPSBpbWFnZURhdGFBcnJbaV07XHJcblxyXG4gICAgICAgIHNpbmdsZUltYWdlRGF0YS5pbWFnZVVSTCA9IHJlcXVpcmUoJy4vYXNzZXRzL2ltYWdlcy8nICsgc2luZ2xlSW1hZ2VEYXRhLmZpbGVuYW1lKTtcclxuXHJcbiAgICAgICAgaW1hZ2VEYXRhQXJyW2ldID0gc2luZ2xlSW1hZ2VEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbWFnZURhdGFBcnI7XHJcbn0pKGltYWdlRGF0YXMpO1xyXG5cclxuLyoqXHJcbiAqIOiOt+WPluS4gOS4qjB+MzDCsCDkuYvpl7TnmoTkuIDkuKrku7vmhI/mraPku5jlgLxcclxuICovXHJcbmZ1bmN0aW9uIGdldDMwRGVnUmFuZG9tKCl7XHJcbiAgICByZXR1cm4gKChNYXRoLnJhbmRvbSgpID4gMC41ID8gJycgOiBcIi1cIikgKyBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDMwKSk7XHJcbn07XHJcblxyXG5jb25zdCBJbWdGaW5ndXJlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogaW1nRmlndXJlIOeahOeCueWHu+WkhOeQhuWHveaVsFxyXG4gICAgICovXHJcbiAgICBoYW5kbGVDbGljayA6IGZ1bmN0aW9uIChlKXtcclxuXHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5hcnJhbmdlLmlzQ2VudGVyKXtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5pbnZlcnNlKCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2VudGVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0sXHJcblxyXG4gICAgcmVuZGVyIDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB2YXIgc3R5bGVPYmogPSB7fTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlpoLmnpxwcm9wc+WxnuaAp+S4reaMh+WumuS6hui/meW8oOWbvueJh+eahOS9jee9riAg5YiZ5L2/55SoXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5hcnJhbmdlLnBvcyl7XHJcbiAgICAgICAgICAgIHN0eWxlT2JqID0gdGhpcy5wcm9wcy5hcnJhbmdlLnBvcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWmguaenOWbvueJh+eahOaXi+i9rOinkuW6puacieWAvOW5tuS4lOS4jeS4ujAgIOa3u+WKoOaXi+i9rOinkuW6plxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuYXJyYW5nZS5yb3RhdGUpe1xyXG4gICAgICAgICAgICAoWydNb3pUcmFuc2Zvcm0nLCAnbXNUcmFuc2Zvcm0nLCAnV2Via2l0VHJhbnNmb3JtJywgJ3RyYW5zZm9ybSddKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICAgc3R5bGVPYmpbdmFsdWVdID0gJ3JvdGF0ZSgnICsgdGhpcy5wcm9wcy5hcnJhbmdlLnJvdGF0ZSArICdkZWcpJztcclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuYXJyYW5nZS5pc0NlbnRlcil7XHJcbiAgICAgICAgICAgIHN0eWxlT2JqLnpJbmRleCA9IDExO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGltZ0ZpZ3VyZUNsYXNzTmFtZSA9IFwiaW1nLWZpZ3VyZVwiO1xyXG4gICAgICAgIGltZ0ZpZ3VyZUNsYXNzTmFtZSA9ICh0aGlzLnByb3BzLmFycmFuZ2UuaXNJbnZlcnNlID8gXCJpbWctZmlndXJlMVwiIDogXCJpbWctZmlndXJlXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGltZ0ZpZ3VyZUNsYXNzTmFtZSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPXtTdHlsZVtpbWdGaWd1cmVDbGFzc05hbWVdfSBzdHlsZT0geyBzdHlsZU9iaiB9IG9uQ2xpY2s9IHsgdGhpcy5oYW5kbGVDbGljayB9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9eyB0aGlzLnByb3BzLmRhdGEuaW1hZ2VVUkwgfVxyXG4gICAgICAgICAgICAgICAgICAgICBhbHQ9eyB0aGlzLnByb3BzLmRhdGEudGl0bGUgfVxyXG4gICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1N0eWxlWydpbWctaXRlbSddfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e1N0eWxlW1wiaW1nLXRpdGxlXCJdfT57IHRoaXMucHJvcHMuZGF0YS50aXRsZSB9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtTdHlsZVtcImltZy1iYWNrXCJdfSBvbkNsaWNrPXsgdGhpcy5oYW5kbGVDbGljayB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kYXRhLmRlc2N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2ZpZ2NhcHRpb24+XHJcbiAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSk7XHJcblxyXG4vKipcclxuICog6I635Y+W5Yy66Ze05YaF55qE5LiA5Liq6ZqP5py65pWwXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRSYW5nZVJhbmRvbShsb3csIGhpZ2gpe1xyXG4gICAgcmV0dXJuIE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogKGhpZ2ggLSBsb3cpICsgbG93KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiDmjqfliLbnu4Tku7ZcclxuICovXHJcbmNvbnN0IENvbnRyb2xsZXJVbml0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICAgaGFuZGxlQ2xpY2sgOiBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlpoLmnpzngrnlh7vnmoTmmK/lvZPliY3mraPlnKjpgInkuK3nirbmgIHnmoTmjInpkq4g57+76L2s5Zu+54mHIOWQpuWImeWwhuWvueW6lOeahOWbvueJh+WxheS4rVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuYXJyYW5nZS5pc0NlbnRlcil7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaW52ZXJzZSgpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNlbnRlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjb250cm9sbGVyVXRpbHNDbGFzc05hbWUgPSBcImNvbnRyb2xsZXItdW5pdFwiO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWmguaenOWvueW6lOeahOaYr+WxheS4reeahOWbvueJhywg5pi+56S65oyJ6ZKu55qE5bGF5Lit5oCBXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYXJyYW5nZS5pc0NlbnRlcil7XHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXJVdGlsc0NsYXNzTmFtZSA9IFwiY29udHJvbGxlci11bml0LWNlbnRlclwiO1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5hcnJhbmdlLmlzSW52ZXJzZSl7XHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyVXRpbHNDbGFzc05hbWUgPSBcImNvbnRyb2xsZXItdW5pdC1jZW50ZXItaW52ZXJzZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1N0eWxlW2NvbnRyb2xsZXJVdGlsc0NsYXNzTmFtZV19XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgID0ge3RoaXMuaGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgID57dGhpcy5wcm9wcy5pdGVtfTwvc3Bhbj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY29uc3QgR2FsbGVyeUNvbXBvbmVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzICh7XHJcblxyXG4gICAgQ29uc3RhbnQgOiB7XHJcbiAgICAgICAgY2VudGVyUG9zIDoge1xyXG4gICAgICAgICAgICBsZWZ0IDogMCxcclxuICAgICAgICAgICAgcmlmaHQgOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoUG9zUmFuZ2UgOiB7XHJcbiAgICAgICAgICAgIGxlZnRTZWNYIDogWzAsIDBdLFxyXG4gICAgICAgICAgICByaWdodFNlY1ggOiBbMCwgMF0sXHJcbiAgICAgICAgICAgIHkgOiBbMCwgMF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHZQb3NSYW5nZSA6IHtcclxuICAgICAgICAgICAgeCA6IFswLCAwXSxcclxuICAgICAgICAgICAgdG9wWSA6IFswLCAwXVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnv7vovazlm77niYdcclxuICAgICAqIEBwYXJhbSBpbmRleCDovpPlhaXlvZPliY3ooqvmiafooYwgaW52ZXJzZSDmk43kvZznmoTlm77niYflr7nlupTnmoTlm77niYfkv6Hmga/mlbDnu4TnmoRpbmRleCDlgLxcclxuICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufSDov5nmmK/kuIDkuKrlv4XmiqXlh73mlbAsIOacn+WGhXJldHVybuS4gOS4quecn+ato+iiq+aJp+ihjOeahOWHveaVsFxyXG4gICAgICovXHJcblxyXG4gICAgIGludmVyc2UgOiBmdW5jdGlvbiAoaW5kZXgpe1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKXtcclxuICAgICAgICAgICAgdmFyIGltZ3NBcnJhbmdlQXJyID0gdGhpcy5zdGF0ZS5pbWdzQXJyYW5nZUFycjtcclxuXHJcbiAgICAgICAgICAgIGltZ3NBcnJhbmdlQXJyW2luZGV4XS5pc0ludmVyc2UgPSAhaW1nc0FycmFuZ2VBcnJbaW5kZXhdLmlzSW52ZXJzZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaW1nc0FycmFuZ2VBcnIgOiBpbWdzQXJyYW5nZUFyclxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfS5iaW5kKHRoaXMpO1xyXG4gICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDph43mlrDluIPlsYAsIOS8oOWFpeS4gOS4quWPguaVsCDmjIflrprlk6rkuKrlsYXkuK3mjpLluINcclxuICAgICAqL1xyXG4gICAgcmVhcnJhbmdlIDogZnVuY3Rpb24gKGNlbnRlckluZGV4KXtcclxuICAgICAgICB2YXIgaW1nc0FycmFuZ2VBcnIgPSB0aGlzLnN0YXRlLmltZ3NBcnJhbmdlQXJyLFxyXG4gICAgICAgICAgICBDb25zdGFudCAgICAgICA9IHRoaXMuQ29uc3RhbnQsXHJcbiAgICAgICAgICAgIGNlbnRlclBvcyAgICAgID0gQ29uc3RhbnQuY2VudGVyUG9zLFxyXG4gICAgICAgICAgICBoUG9zUmFuZ2UgICAgICA9IENvbnN0YW50LmhQb3NSYW5nZSxcclxuICAgICAgICAgICAgdlBvc1JhbmdlICAgICAgPSBDb25zdGFudC52UG9zUmFuZ2UsXHJcbiAgICAgICAgICAgIGhQb3NSYW5nZUxlZnRTZWNYID0gaFBvc1JhbmdlLmxlZnRTZWNYLFxyXG4gICAgICAgICAgICBoUG9zUmFuZ2VSaWdodFNlY1ggPSBoUG9zUmFuZ2UucmlnaHRTZWNYLFxyXG4gICAgICAgICAgICBoUG9zUmFuZ2VZICAgICA9IGhQb3NSYW5nZS55LFxyXG4gICAgICAgICAgICB2UG9zUmFuZ2VUb3BZICA9IHZQb3NSYW5nZS50b3BZLFxyXG4gICAgICAgICAgICB2UG9zUmFuZ2VYICAgICA9IHZQb3NSYW5nZS54LFxyXG5cclxuICAgICAgICAgICAgaW1nc0FycmFuZ2VUb3BBcnIgPSBbXSxcclxuICAgICAgICAgICAgdG9wSW1nTnVtICAgICAgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSwgLy/lj5bkuIDkuKog5oiW6ICF5LiN5Y+WXHJcbiAgICAgICAgICAgIHRvcEltZ1NwbGljZUluZGV4ID0gMCxcclxuICAgICAgICAgICAgaW1nc0FycmFuZ2VDZW50ZXJBcnIgPSBpbWdzQXJyYW5nZUFyci5zcGxpY2UoY2VudGVySW5kZXgsIDEpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog6aaW5YWI5bGF5LitIGNlbnRlckluZGV4IOeahOWbvueJh1xyXG4gICAgICAgICAgICAgKiDlsYXkuK3nmoTlm77niYcgY2VudGVySW5kZXgg5LiN6ZyA6KaB5peL6L2sXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBpbWdzQXJyYW5nZUNlbnRlckFyclswXT17XHJcbiAgICAgICAgICAgICAgICBwb3MgOiBjZW50ZXJQb3MsXHJcbiAgICAgICAgICAgICAgICByb3RhdGUgOiAwLFxyXG4gICAgICAgICAgICAgICAgaXNDZW50ZXIgOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDlj5blh7ropoHluIPlsYDlnKjkuIrkvqflm77niYfnmoTkv6Hmga9cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHRvcEltZ1NwbGljZUluZGV4ID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKihpbWdzQXJyYW5nZUFyci5sZW5ndGggLSB0b3BJbWdOdW0pKTtcclxuXHJcbiAgICAgICAgICAgIGltZ3NBcnJhbmdlVG9wQXJyID0gaW1nc0FycmFuZ2VBcnIuc3BsaWNlKHRvcEltZ1NwbGljZUluZGV4LCB0b3BJbWdOdW0pO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOW4g+WxgOWcqOS4iuS+p+eahOWbvueJh1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgaW1nc0FycmFuZ2VUb3BBcnIuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGluZGV4KXtcclxuICAgICAgICAgICAgICAgIGltZ3NBcnJhbmdlVG9wQXJyW2luZGV4XSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3MgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcCA6IGdldFJhbmdlUmFuZG9tKHZQb3NSYW5nZVRvcFlbMF0sIHZQb3NSYW5nZVRvcFlbMV0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0IDogZ2V0UmFuZ2VSYW5kb20odlBvc1JhbmdlWFswXSwgdlBvc1JhbmdlWFsxXSlcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHJvdGF0ZSA6IGdldDMwRGVnUmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICAgICAgaXNDZW50ZXIgOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5biD5bGA5bem5Y+z5Lik5L6n55qE5Zu+54mHXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwLCBqID0gaW1nc0FycmFuZ2VBcnIubGVuZ3RoLCBrID0gaiAvIDI7IGkgPCBqOyArK2kpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGhQb3NSYW5nZUxPUlggPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiDliY3ljYrpg6jliIbluIPlsYDlt6bovrksIOWQjuWNiumDqOWIhuW4g+WxgOWPs+i+uVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBpZihpIDwgaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGhQb3NSYW5nZUxPUlggPSBoUG9zUmFuZ2VMZWZ0U2VjWDtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGhQb3NSYW5nZUxPUlggPSBoUG9zUmFuZ2VSaWdodFNlY1g7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW1nc0FycmFuZ2VBcnJbaV0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3AgOiBnZXRSYW5nZVJhbmRvbShoUG9zUmFuZ2VZWzBdLCBoUG9zUmFuZ2VZWzFdKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA6IGdldFJhbmdlUmFuZG9tKGhQb3NSYW5nZUxPUlhbMF0sIGhQb3NSYW5nZUxPUlhbMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICByb3RhdGUgOiBnZXQzMERlZ1JhbmRvbSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzQ2VudGVyIDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKGltZ3NBcnJhbmdlVG9wQXJyICYmIGltZ3NBcnJhbmdlVG9wQXJyWzBdKXtcclxuICAgICAgICAgICAgICAgIGltZ3NBcnJhbmdlQXJyLnNwbGljZSh0b3BJbWdTcGxpY2VJbmRleCwgMCwgaW1nc0FycmFuZ2VUb3BBcnJbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpbWdzQXJyYW5nZUFyci5zcGxpY2UoY2VudGVySW5kZXgsIDAsIGltZ3NBcnJhbmdlQ2VudGVyQXJyWzBdKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaW1nc0FycmFuZ2VBcnIgOiBpbWdzQXJyYW5nZUFyclxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliKnnlKggcmVhcnJhbmdlIOWHveaVsCDlsYXkuK3lr7nlupTnmoRpbmRleOeahOWbvueJh1xyXG4gICAgICogQHBhcmFtIGluZGV4LCDpnIDopoHooqvlsYXkuK3nmoTlm77niYflr7nlupTnmoTlm77niYfkv6Hmga/mlbDnu4TnmoRpbmRleCDlgLxcclxuICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufSBcclxuICAgICAqL1xyXG4gICAgY2VudGVyIDogZnVuY3Rpb24gKGluZGV4KXtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgICAgIHRoaXMucmVhcnJhbmdlKGluZGV4KTtcclxuICAgICAgICB9LmJpbmQodGhpcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldEluaXRpYWxTdGF0ZSA6IGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGltZ3NBcnJhbmdlQXJyIDogW11cclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOe7hOS7tuWKoOi9veWujOaIkOWQjiwg5Li65q+P5byg5Zu+54mH6K6h566X5L2N572u55qE6IyD5Zu0XHJcbiAgICAgKi9cclxuICAgIGNvbXBvbmVudERpZE1vdW50IDogZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5YWI5ou/5Yiw6Iie5Y+w55qE5aSn5bCPXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdmFyIHN0YWdlRG9tID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLnN0YWdlKSxcclxuICAgICAgICAgICAgc3RhZ2VXICAgPSBzdGFnZURvbS5zY3JvbGxXaWR0aCxcclxuICAgICAgICAgICAgc3RhZ2VIICAgPSBzdGFnZURvbS5zY3JvbGxIZWlnaHQsXHJcbiAgICAgICAgICAgIGhhbGZTdGFnZVcgPSBNYXRoLmNlaWwoc3RhZ2VXLzIpLFxyXG4gICAgICAgICAgICBoYWxmU3RhZ2VIID0gTWF0aC5jZWlsKHN0YWdlSC8yKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5ou/5Yiw5LiA5LiqaW1nRmlndXJl55qE5aSn5bCPXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdmFyIGltZ0ZpZ3VyZURvbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5pbWdGaWd1cmUwKSxcclxuICAgICAgICAgICAgaW1nVyAgICAgICAgID0gaW1nRmlndXJlRG9tLnNjcm9sbFdpZHRoLFxyXG4gICAgICAgICAgICBpbWdIICAgICAgICAgPSBpbWdGaWd1cmVEb20uc2Nyb2xsSGVpZ2h0LFxyXG4gICAgICAgICAgICBoYWxmSW1nVyAgICAgPSBNYXRoLmNlaWwoaW1nVy8yKSxcclxuICAgICAgICAgICAgaGFsZkltZ0ggICAgID0gTWF0aC5jZWlsKGltZ0gvMik7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOiuoeeul+S4reW/g+WbvueJh+eahOS9jee9rlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuQ29uc3RhbnQuY2VudGVyUG9zID0ge1xyXG4gICAgICAgICAgICBsZWZ0IDogaGFsZlN0YWdlVyAtIGhhbGZJbWdXLFxyXG4gICAgICAgICAgICB0b3AgIDogaGFsZlN0YWdlSCAtIGhhbGZJbWdIXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5bem5Y+z5Lik5L6n5Zu+54mH55qE5L2N572uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5Db25zdGFudC5oUG9zUmFuZ2UubGVmdFNlY1hbMF0gPSAtaGFsZkltZ1c7XHJcbiAgICAgICAgdGhpcy5Db25zdGFudC5oUG9zUmFuZ2UubGVmdFNlY1hbMV0gPSBoYWxmU3RhZ2VXIC0gaGFsZkltZ1cgKiAzO1xyXG4gICAgICAgIHRoaXMuQ29uc3RhbnQuaFBvc1JhbmdlLnJpZ2h0U2VjWFswXSA9IGhhbGZTdGFnZVcgKyBoYWxmSW1nVztcclxuICAgICAgICB0aGlzLkNvbnN0YW50LmhQb3NSYW5nZS5yaWdodFNlY1hbMV0gPSBzdGFnZVcgLSBoYWxmSW1nVztcclxuICAgICAgICB0aGlzLkNvbnN0YW50LmhQb3NSYW5nZS55WzBdID0gLWhhbGZJbWdIO1xyXG4gICAgICAgIHRoaXMuQ29uc3RhbnQuaFBvc1JhbmdlLnlbMV0gPSBzdGFnZUggLSBoYWxmU3RhZ2VIO1xyXG5cclxuICAgICAgICB0aGlzLkNvbnN0YW50LnZQb3NSYW5nZS50b3BZWzBdID0gLWhhbGZJbWdIO1xyXG4gICAgICAgIHRoaXMuQ29uc3RhbnQudlBvc1JhbmdlLnRvcFlbMV0gPSBoYWxmU3RhZ2VIIC0gaGFsZkltZ0ggKiAzO1xyXG4gICAgICAgIHRoaXMuQ29uc3RhbnQudlBvc1JhbmdlLnhbMF0gICAgPSBoYWxmU3RhZ2VXIC0gaW1nVztcclxuICAgICAgICB0aGlzLkNvbnN0YW50LnZQb3NSYW5nZS54WzFdICAgID0gaGFsZlN0YWdlVztcclxuXHJcbiAgICAgICAgdGhpcy5yZWFycmFuZ2UoMCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcblxyXG4gICAgICAgIHZhciBjb250cm9sbGVyVXRpbHMgPSBbXSxcclxuICAgICAgICAgICAgSW1nRmluZ3VyZXMgICAgID0gW107XHJcblxyXG4gICAgICAgIGltYWdlRGF0YXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGluZGV4KXtcclxuICAgICAgICAgICAgaWYoIXRoaXMuc3RhdGUuaW1nc0FycmFuZ2VBcnJbaW5kZXhdKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaW1nc0FycmFuZ2VBcnJbaW5kZXhdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcyA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcCAgOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICByb3RhdGUgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzSW52ZXJzZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzQ2VudGVyIDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBJbWdGaW5ndXJlcy5wdXNoKDxJbWdGaW5ndXJlIFxyXG4gICAgICAgICAgICAgICAgZGF0YT17IHZhbHVlIH0gXHJcbiAgICAgICAgICAgICAgICBrZXkgPXsgaW5kZXggfSBcclxuICAgICAgICAgICAgICAgIHJlZiA9eyAnaW1nRmlndXJlJyArIGluZGV4IH0gXHJcbiAgICAgICAgICAgICAgICBhcnJhbmdlPSB7IHRoaXMuc3RhdGUuaW1nc0FycmFuZ2VBcnJbaW5kZXhdIH1cclxuICAgICAgICAgICAgICAgIGludmVyc2U9IHsgdGhpcy5pbnZlcnNlKGluZGV4KSB9XHJcbiAgICAgICAgICAgICAgICBjZW50ZXIgPSB7IHRoaXMuY2VudGVyKGluZGV4KSB9XHJcbiAgICAgICAgICAgIC8+KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXJVdGlscy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPENvbnRyb2xsZXJVbml0IFxyXG4gICAgICAgICAgICAgICAgICAgIGFycmFuZ2U9IHt0aGlzLnN0YXRlLmltZ3NBcnJhbmdlQXJyW2luZGV4XX1cclxuICAgICAgICAgICAgICAgICAgICBpbnZlcnNlPSB7dGhpcy5pbnZlcnNlKGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICBjZW50ZXIgPSB7dGhpcy5jZW50ZXIoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgIGtleSAgICA9IHtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICBpdGVtICAgPSB7aW5kZXggKyAxfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e1N0eWxlWydzdGFnZSddfSByZWY9J3N0YWdlJz5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17U3R5bGVbJ2ltZy1zZWMnXX0+XHJcbiAgICAgICAgICAgICAgICAgICAge0ltZ0Zpbmd1cmVzIH1cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtTdHlsZVsnY29udHJvbGxlci1uYXYnXX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbnRyb2xsZXJVdGlsc31cclxuICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnlDb21wb25lbnQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvR2FsbGVyeS9HYWxsZXJ5LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBHYWxsZXJ5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvR2FsbGVyeS9HYWxsZXJ5JztcclxuXHJcbmNvbnN0IFBhZ2UgPSAoKSA9PihcclxuICAgIDxkaXY+PEdhbGxlcnkvPjwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW50cmllcy9nYWxsZXJ5L2dhbGxlcnkuanN4IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiY29udGVudFwiOlwiY29udGVudC0zNkJhS1wiLFwic3RhZ2VcIjpcInN0YWdlLTNYOWhyXCIsXCJpbWctc2VjXCI6XCJpbWctc2VjLW5pdWpYXCIsXCJpbWctZmlndXJlXCI6XCJpbWctZmlndXJlLTIzbWJTXCIsXCJpbWctaXRlbVwiOlwiaW1nLWl0ZW0tMTV5WlNcIixcImltZy1maWd1cmUxXCI6XCJpbWctZmlndXJlMS05WlN0c1wiLFwiaW1nLXRpdGxlXCI6XCJpbWctdGl0bGUtMzhYU1lcIixcImltZy1iYWNrXCI6XCJpbWctYmFjay03LTVWSVwiLFwiY29udHJvbGxlci1uYXZcIjpcImNvbnRyb2xsZXItbmF2LTE0LTBMXCIsXCJjb250cm9sbGVyLXVuaXRcIjpcImNvbnRyb2xsZXItdW5pdC1WSjhQRlwiLFwiY29udHJvbGxlci11bml0LWNlbnRlclwiOlwiY29udHJvbGxlci11bml0LWNlbnRlci0xUHhmVlwiLFwiY29udHJvbGxlci11bml0LWNlbnRlci1pbnZlcnNlXCI6XCJjb250cm9sbGVyLXVuaXQtY2VudGVyLWludmVyc2UtM3B6NWtcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9HYWxsZXJ5L2dhbGxlcnkuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzk5XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvc3JjL2NvbXBvbmVudHMvR2FsbGVyeS9hc3NldHMvaW1hZ2VzLy8xLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvR2FsbGVyeS9hc3NldHMvaW1hZ2VzLzEucG5nXG4vLyBtb2R1bGUgaWQgPSA1MTBcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9zcmMvY29tcG9uZW50cy9HYWxsZXJ5L2Fzc2V0cy9pbWFnZXMvLzEwLmpwZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvR2FsbGVyeS9hc3NldHMvaW1hZ2VzLzEwLmpwZ1xuLy8gbW9kdWxlIGlkID0gNTExXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvc3JjL2NvbXBvbmVudHMvR2FsbGVyeS9hc3NldHMvaW1hZ2VzLy8xMS5qcGdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL0dhbGxlcnkvYXNzZXRzL2ltYWdlcy8xMS5qcGdcbi8vIG1vZHVsZSBpZCA9IDUxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL3NyYy9jb21wb25lbnRzL0dhbGxlcnkvYXNzZXRzL2ltYWdlcy8vMTIucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9HYWxsZXJ5L2Fzc2V0cy9pbWFnZXMvMTIucG5nXG4vLyBtb2R1bGUgaWQgPSA1MTNcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9zcmMvY29tcG9uZW50cy9HYWxsZXJ5L2Fzc2V0cy9pbWFnZXMvLzEzLmpwZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvR2FsbGVyeS9hc3NldHMvaW1hZ2VzLzEzLmpwZ1xuLy8gbW9kdWxlIGlkID0gNTE0XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvc3JjL2NvbXBvbmVudHMvR2FsbGVyeS9hc3NldHMvaW1hZ2VzLy8xNC5qcGdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL0dhbGxlcnkvYXNzZXRzL2ltYWdlcy8xNC5qcGdcbi8vIG1vZHVsZSBpZCA9IDUxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL3NyYy9jb21wb25lbnRzL0dhbGxlcnkvYXNzZXRzL2ltYWdlcy8vMTUuanBnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9HYWxsZXJ5L2Fzc2V0cy9pbWFnZXMvMTUuanBnXG4vLyBtb2R1bGUgaWQgPSA1MTZcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9zcmMvY29tcG9uZW50cy9HYWxsZXJ5L2Fzc2V0cy9pbWFnZXMvLzE2LmpwZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvR2FsbGVyeS9hc3NldHMvaW1hZ2VzLzE2LmpwZ1xuLy8gbW9kdWxlIGlkID0gNTE3XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvc3JjL2NvbXBvbmVudHMvR2FsbGVyeS9hc3NldHMvaW1hZ2VzLy8yLmpwZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvR2FsbGVyeS9hc3NldHMvaW1hZ2VzLzIuanBnXG4vLyBtb2R1bGUgaWQgPSA1MThcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9zcmMvY29tcG9uZW50cy9HYWxsZXJ5L2Fzc2V0cy9pbWFnZXMvLzMuanBnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9HYWxsZXJ5L2Fzc2V0cy9pbWFnZXMvMy5qcGdcbi8vIG1vZHVsZSBpZCA9IDUxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL3NyYy9jb21wb25lbnRzL0dhbGxlcnkvYXNzZXRzL2ltYWdlcy8vNC5qcGdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL0dhbGxlcnkvYXNzZXRzL2ltYWdlcy80LmpwZ1xuLy8gbW9kdWxlIGlkID0gNTIwXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvc3JjL2NvbXBvbmVudHMvR2FsbGVyeS9hc3NldHMvaW1hZ2VzLy81LmpwZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvR2FsbGVyeS9hc3NldHMvaW1hZ2VzLzUuanBnXG4vLyBtb2R1bGUgaWQgPSA1MjFcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9zcmMvY29tcG9uZW50cy9HYWxsZXJ5L2Fzc2V0cy9pbWFnZXMvLzYuanBnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9HYWxsZXJ5L2Fzc2V0cy9pbWFnZXMvNi5qcGdcbi8vIG1vZHVsZSBpZCA9IDUyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL3NyYy9jb21wb25lbnRzL0dhbGxlcnkvYXNzZXRzL2ltYWdlcy8vNy5qcGdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL0dhbGxlcnkvYXNzZXRzL2ltYWdlcy83LmpwZ1xuLy8gbW9kdWxlIGlkID0gNTIzXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvc3JjL2NvbXBvbmVudHMvR2FsbGVyeS9hc3NldHMvaW1hZ2VzLy84LmpwZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvR2FsbGVyeS9hc3NldHMvaW1hZ2VzLzguanBnXG4vLyBtb2R1bGUgaWQgPSA1MjRcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9zcmMvY29tcG9uZW50cy9HYWxsZXJ5L2Fzc2V0cy9pbWFnZXMvLzkuanBnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9HYWxsZXJ5L2Fzc2V0cy9pbWFnZXMvOS5qcGdcbi8vIG1vZHVsZSBpZCA9IDUyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJ2YXIgbWFwID0ge1xuXHRcIi4vMS5wbmdcIjogNTEwLFxuXHRcIi4vMTAuanBnXCI6IDUxMSxcblx0XCIuLzExLmpwZ1wiOiA1MTIsXG5cdFwiLi8xMi5wbmdcIjogNTEzLFxuXHRcIi4vMTMuanBnXCI6IDUxNCxcblx0XCIuLzE0LmpwZ1wiOiA1MTUsXG5cdFwiLi8xNS5qcGdcIjogNTE2LFxuXHRcIi4vMTYuanBnXCI6IDUxNyxcblx0XCIuLzIuanBnXCI6IDUxOCxcblx0XCIuLzMuanBnXCI6IDUxOSxcblx0XCIuLzQuanBnXCI6IDUyMCxcblx0XCIuLzUuanBnXCI6IDUyMSxcblx0XCIuLzYuanBnXCI6IDUyMixcblx0XCIuLzcuanBnXCI6IDUyMyxcblx0XCIuLzguanBnXCI6IDUyNCxcblx0XCIuLzkuanBnXCI6IDUyNVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xuXHRyZXR1cm4gaWQ7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDUyOTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL0dhbGxlcnkvYXNzZXRzL2ltYWdlcyBeXFwuXFwvLiokXG4vLyBtb2R1bGUgaWQgPSA1Mjlcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSBbe1wiZmlsZW5hbWVcIjpcIjEucG5nXCIsXCJ0aXRsZVwiOlwicGFkYVwiLFwiZGVzY1wiOlwidGhpcyBpcyBteSBmcmlzdCBSZWFjdCBkZW1vICwgZXZlcnkgYm9keSBjYW4gZ2l2ZSBtb3JlIGFkdmlzZSB0byB0aGlzIHByb2plY3QgIVwifSx7XCJmaWxlbmFtZVwiOlwiMi5qcGdcIixcInRpdGxlXCI6XCJXdVlhblp1XCIsXCJkZXNjXCI6XCJ0aGlzIGlzIG15IGZyaXN0IFJlYWN0IGRlbW8gLCBldmVyeSBib2R5IGNhbiBnaXZlIG1vcmUgYWR2aXNlIHRvIHRoaXMgcHJvamVjdCAhXCJ9LHtcImZpbGVuYW1lXCI6XCIzLmpwZ1wiLFwidGl0bGVcIjpcIkppbmdUaWFuXCIsXCJkZXNjXCI6XCJ0aGlzIGlzIG15IGZyaXN0IFJlYWN0IGRlbW8gLCBldmVyeSBib2R5IGNhbiBnaXZlIG1vcmUgYWR2aXNlIHRvIHRoaXMgcHJvamVjdCAhXCJ9LHtcImZpbGVuYW1lXCI6XCIzLmpwZ1wiLFwidGl0bGVcIjpcIkppbmdUaWFuXCIsXCJkZXNjXCI6XCJ0aGlzIGlzIG15IGZyaXN0IFJlYWN0IGRlbW8gLCBldmVyeSBib2R5IGNhbiBnaXZlIG1vcmUgYWR2aXNlIHRvIHRoaXMgcHJvamVjdCAhXCJ9LHtcImZpbGVuYW1lXCI6XCI0LmpwZ1wiLFwidGl0bGVcIjpcIkx1SmluZ1NhblwiLFwiZGVzY1wiOlwidGhpcyBpcyBteSBmcmlzdCBSZWFjdCBkZW1vICwgZXZlcnkgYm9keSBjYW4gZ2l2ZSBtb3JlIGFkdmlzZSB0byB0aGlzIHByb2plY3QgIVwifSx7XCJmaWxlbmFtZVwiOlwiNS5qcGdcIixcInRpdGxlXCI6XCJMdUppbmdTYW5cIixcImRlc2NcIjpcInRoaXMgaXMgbXkgZnJpc3QgUmVhY3QgZGVtbyAsIGV2ZXJ5IGJvZHkgY2FuIGdpdmUgbW9yZSBhZHZpc2UgdG8gdGhpcyBwcm9qZWN0ICFcIn0se1wiZmlsZW5hbWVcIjpcIjYuanBnXCIsXCJ0aXRsZVwiOlwiTWFsdGFcIixcImRlc2NcIjpcInRoaXMgaXMgbXkgZnJpc3QgUmVhY3QgZGVtbyAsIGV2ZXJ5IGJvZHkgY2FuIGdpdmUgbW9yZSBhZHZpc2UgdG8gdGhpcyBwcm9qZWN0ICFcIn0se1wiZmlsZW5hbWVcIjpcIjcuanBnXCIsXCJ0aXRsZVwiOlwiTWFsdGFcIixcImRlc2NcIjpcInRoaXMgaXMgbXkgZnJpc3QgUmVhY3QgZGVtbyAsIGV2ZXJ5IGJvZHkgY2FuIGdpdmUgbW9yZSBhZHZpc2UgdG8gdGhpcyBwcm9qZWN0ICFcIn0se1wiZmlsZW5hbWVcIjpcIjguanBnXCIsXCJ0aXRsZVwiOlwiUGFyaXNcIixcImRlc2NcIjpcInRoaXMgaXMgbXkgZnJpc3QgUmVhY3QgZGVtbyAsIGV2ZXJ5IGJvZHkgY2FuIGdpdmUgbW9yZSBhZHZpc2UgdG8gdGhpcyBwcm9qZWN0ICFcIn0se1wiZmlsZW5hbWVcIjpcIjkuanBnXCIsXCJ0aXRsZVwiOlwiTWFsdGFcIixcImRlc2NcIjpcInRoaXMgaXMgbXkgZnJpc3QgUmVhY3QgZGVtbyAsIGV2ZXJ5IGJvZHkgY2FuIGdpdmUgbW9yZSBhZHZpc2UgdG8gdGhpcyBwcm9qZWN0ICFcIn0se1wiZmlsZW5hbWVcIjpcIjEwLmpwZ1wiLFwidGl0bGVcIjpcIlBhcmlzXCIsXCJkZXNjXCI6XCJ0aGlzIGlzIG15IGZyaXN0IFJlYWN0IGRlbW8gLCBldmVyeSBib2R5IGNhbiBnaXZlIG1vcmUgYWR2aXNlIHRvIHRoaXMgcHJvamVjdCAhXCJ9LHtcImZpbGVuYW1lXCI6XCIxMS5qcGdcIixcInRpdGxlXCI6XCJWZW5pY2VcIixcImRlc2NcIjpcInRoaXMgaXMgbXkgZnJpc3QgUmVhY3QgZGVtbyAsIGV2ZXJ5IGJvZHkgY2FuIGdpdmUgbW9yZSBhZHZpc2UgdG8gdGhpcyBwcm9qZWN0ICFcIn0se1wiZmlsZW5hbWVcIjpcIjEyLnBuZ1wiLFwidGl0bGVcIjpcIkdyYW5kIENhbnlvblwiLFwiZGVzY1wiOlwidGhpcyBpcyBteSBmcmlzdCBSZWFjdCBkZW1vICwgZXZlcnkgYm9keSBjYW4gZ2l2ZSBtb3JlIGFkdmlzZSB0byB0aGlzIHByb2plY3QgIVwifSx7XCJmaWxlbmFtZVwiOlwiMTMuanBnXCIsXCJ0aXRsZVwiOlwiT25lIDc3XCIsXCJkZXNjXCI6XCJ0aGlzIGlzIG15IGZyaXN0IFJlYWN0IGRlbW8gLCBldmVyeSBib2R5IGNhbiBnaXZlIG1vcmUgYWR2aXNlIHRvIHRoaXMgcHJvamVjdCAhXCJ9LHtcImZpbGVuYW1lXCI6XCIxNC5qcGdcIixcInRpdGxlXCI6XCJGZXJyYXJpXCIsXCJkZXNjXCI6XCJ0aGlzIGlzIG15IGZyaXN0IFJlYWN0IGRlbW8gLCBldmVyeSBib2R5IGNhbiBnaXZlIG1vcmUgYWR2aXNlIHRvIHRoaXMgcHJvamVjdCAhXCJ9LHtcImZpbGVuYW1lXCI6XCIxNS5qcGdcIixcInRpdGxlXCI6XCJSYXkgRGF5dG9uXCIsXCJkZXNjXCI6XCJ0aGlzIGlzIG15IGZyaXN0IFJlYWN0IGRlbW8gLCBldmVyeSBib2R5IGNhbiBnaXZlIG1vcmUgYWR2aXNlIHRvIHRoaXMgcHJvamVjdCAhXCJ9LHtcImZpbGVuYW1lXCI6XCIxNi5qcGdcIixcInRpdGxlXCI6XCJQYWdhbmlcIixcImRlc2NcIjpcInRoaXMgaXMgbXkgZnJpc3QgUmVhY3QgZGVtbyAsIGV2ZXJ5IGJvZHkgY2FuIGdpdmUgbW9yZSBhZHZpc2UgdG8gdGhpcyBwcm9qZWN0ICFcIn1dXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9HYWxsZXJ5L2Fzc2V0cy9pbWFnZXNEYXRhcy5qc29uXG4vLyBtb2R1bGUgaWQgPSA1MzBcbi8vIG1vZHVsZSBjaHVua3MgPSA1Il0sInNvdXJjZVJvb3QiOiIifQ==