module.exports = (function ($) {
    /**
     * By Ken Fyrstenberg Nilsen
     *
     * drawImageProp(context, image [, x, y, width, height [,offsetX, offsetY]])
     *
     * If image and context are only arguments rectangle will equal canvas
     */
    /* eslint-disable */
    function drawImageProp(ctx, img, x, y, w, h, offsetX, offsetY) {
      if (arguments.length === 2) {
        x = y = 0;
        w = ctx.canvas.width;
        h = ctx.canvas.height;
      }
  
      // default offset is center
      offsetX = typeof offsetX === 'number' ? offsetX : 0.5;
      offsetY = typeof offsetY === 'number' ? offsetY : 0.5;
  
      // keep bounds [0.0, 1.0]
      if (offsetX < 0) offsetX = 0;
      if (offsetY < 0) offsetY = 0;
      if (offsetX > 1) offsetX = 1;
      if (offsetY > 1) offsetY = 1;
  
      let iw = img.width,
        ih = img.height,
        r = Math.min(w / iw, h / ih),
        nw = iw * r,   // new prop. width
        nh = ih * r,   // new prop. height
        cx,
        cy,
        cw,
        ch,
        ar = 1;
  
      // decide which gap to fill
      if (nw < w) ar = w / nw;
      if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;  // updated
      nw *= ar;
      nh *= ar;
  
      // calc source rectangle
      cw = iw / (nw / w);
      ch = ih / (nh / h);
  
      cx = (iw - cw) * offsetX;
      cy = (ih - ch) * offsetY;
  
      // make sure source rectangle is valid
      if (cx < 0) cx = 0;
      if (cy < 0) cy = 0;
      if (cw > iw) cw = iw;
      if (ch > ih) ch = ih;
  
      // fill image in dest. rectangle
      ctx.drawImage(img, cx, cy, cw, ch, x, y, w, h);
    }
    /* eslint-enable */
  
    const DefaultObj = function (el, obj) {
      this.setting = {
        speed: 1000 / 12,
      };
      this.el = el;
      this.setting = $.extend(this.setting, obj);
    };
  
    DefaultObj.prototype = {
      init() {
        const self = this;
        const canvas = $('<canvas/>');
  
        canvas.attr({
          class: 'bg-canvas',
          height: self.el.height(),
          width: self.el.width()
        });
  
        canvas.css({ position: 'absolute', top: 0, left: 0, 'z-index': -1 });
  
        self.el.append(canvas);
  
        self.images = (self.setting.datas && self.setting.datas.src) || [];
        self.speed = self.setting.speed;
  
  
        function removeImageListeners() {
          this.removeEventListener('load', this.resolveFunc);
          this.removeEventListener('error', this.rejectFunc);
        }
  
        function resolve() {
          removeImageListeners(this);
          this.defer.resolve(this);
        }
  
        function reject() {
          removeImageListeners(this);
          this.defer.resolve(undefined);
        }
  
        $.when(...self.images.map((src) => {
          const image = new Image();
          const defer = $.Deferred();
  
          const resolveFunc = resolve.bind(image, defer);
          const rejectFunc = reject.bind(image, defer);
  
          image.addEventListener('load', resolveFunc);
          image.addEventListener('error', rejectFunc);
          image.src = src;
          image.defer = defer;
          image.resolveFunc = resolveFunc;
          image.rejectFunc = rejectFunc;
  
          return defer.promise();
        })).then((...images) => {
          const loadedImages = images.filter(image => !!image);
          const panel = self.el.find('.bg-canvas');
          const count = loadedImages.length;
          let index = -1;
  
  
          function drawImage() {
            drawImageProp(this.getContext('2d'), loadedImages[index = (index + 1) % count], 0, 0, self.el.width(), self.el.height());
          }
  
          function loopImage() {
            panel.dequeue().each(drawImage).delay(self.speed).queue(loopImage);
          }
  
          return loopImage();
        });
  
        $(window).on('resize',
          _.debounce(() => {
            canvas.attr({
              height: self.el.height(),
              width: self.el.width(),
            });
          }, 100),
        );
      },
    };
  
    // eslint-disable-next-line
    $.fn.backgroundLoop = function (obj) {
      const newDegaultObj = new DefaultObj(this, obj);
      newDegaultObj.init();
      return newDegaultObj;
    };
  }($, window, _));
  