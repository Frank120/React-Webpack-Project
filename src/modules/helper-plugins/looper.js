module.exports = (function (){
    const DefaultObj = function (el, obj){
        this.setting = {
            speed : 1000 / 12,
        };
        this.el = el;
        this.setting = $.extend(this.setting, obj);
    };

    DefaultObj.prototype = {
        init () {
            const self = this;
            const canvas = document.createElement('canvas');
            canvas.setAttribute("calss","myCanvas");
            canvas.setAttribute("height",self.el.height());
            canvas.setAttribute("width",self.el.width());
            canvas.setAttribute("margin", "auto");
            canvas.setAttribute("position", "absolute");
            canvas.setAttribute("bottom", 0);
            canvas.setAttribute("right", 0);
            canvas.setAttribute("left", 0);
            canvas.setAttribute("top", 0);
            self.el.append(canvas);

            self.images = (self.setting.datas && self.setting.datas.src) || [];
            self.speed = self.setting.speed;

            $.when.apply($, self.images.map(function (src) {
            var right = "load";
            var error = "error";
            var image = new Image();
            var defer = $.Deferred();
            image.addEventListener(right, resolved);
            image.addEventListener(error, rejected);
            image.src = src;
            return defer.promise();
            function resolved () {
                image.removeEventListener(right, resolved);
                image.removeEventListener(error, rejected);
                defer.resolve(image);
            }
            function rejected () {
                image.removeEventListener(right, resolved);
                image.removeEventListener(error, rejected);
                defer.reject(image);
            }
        })).then(function () {
            var panel = $(document.querySelector("canvas"));
            var image = Array.prototype.slice.apply(arguments);
            var count = image.length;
            var index = -1;
            return loopImage();
            function loopImage () {
                panel.dequeue().each(drawImage).delay(self.speed).queue(loopImage);
            }
            function drawImage () {
                this.getContext("2d").drawImage(image[index = (index + 1) % count], 0, 0);
            }
        });
        }
    };

    $.fn.backgroundLoop = function (obj){
        const newDegaultObj = new DefaultObj(this, obj);
        newDegaultObj.init();
        return newDegaultObj;
    };
}($, window))