module.exports = (function ($){
    const DefaultObj = function (el, obj){
        this.setting = {};
        this.el = el;
        this.setting = $.extend(this.setting, obj);
    };

    DefaultObj.prototype = {
        init(){
            console.log('111');
        }
    };

    $.fn.byte = function (obj){
        const newByte = new DefaultObj(this, obj);
        newByte.init();
        return newByte;
    };
}($, window))