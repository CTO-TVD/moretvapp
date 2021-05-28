var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "../util/log/public", "../errorhandling/public", "../typing/public"], function (require, exports, public_1, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Scroller = void 0;
    var Scroller = (function () {
        function Scroller() {
            this.isScrolling = false;
            this.currentEasingX = null;
            this.currentEasingY = null;
            this.scrollerX = 0;
            this.scrollerY = 0;
            this.startX = 0;
            this.startY = 0;
            this.posX = 0;
            this.posY = 0;
            this.ScrollMinX = 0;
            this.ScrollMinY = 0;
            this.ScrollMaxX = -1000;
            this.ScrollMaxY = -1000;
        }
        Scroller_1 = Scroller;
        Scroller.prototype.onPanStart = function () {
            this.finish();
            this.startX = this.scrollerX | 0;
            this.startY = this.scrollerY | 0;
        };
        Scroller.prototype.onPanEnd = function () {
            var _this = this;
            if (this.currentEasingX == null && this.currentEasingY == null) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("starting move to bounds -- this.scrollerX : " + _this.scrollerX + "  this.scrollerY : " + _this.scrollerY, Scroller_1.TAG)); });
                if (this.scrollerX > this.ScrollMinX) {
                    this.currentEasingX =
                        {
                            animationStartTime: Scroller_1.funcNow(),
                            duration: 1,
                            begin: this.scrollerX,
                            change: -this.scrollerX,
                            func: Scroller_1.functions.easeInOutSine
                        };
                }
                else if (this.scrollerX < this.ScrollMaxX) {
                    this.currentEasingX =
                        {
                            animationStartTime: Scroller_1.funcNow(),
                            duration: 1,
                            begin: this.scrollerX,
                            change: -(this.scrollerX - this.ScrollMaxX),
                            func: Scroller_1.functions.easeInOutSine
                        };
                }
                if (this.scrollerY > this.ScrollMinY) {
                    this.currentEasingY =
                        {
                            animationStartTime: Scroller_1.funcNow(),
                            duration: 1,
                            begin: this.scrollerY,
                            change: -this.scrollerY,
                            func: Scroller_1.functions.easeInOutSine
                        };
                }
                else if (this.scrollerY < this.ScrollMaxY) {
                    this.currentEasingY =
                        {
                            animationStartTime: Scroller_1.funcNow(),
                            duration: 1,
                            begin: this.scrollerY,
                            change: -(this.scrollerY - this.ScrollMaxY),
                            func: Scroller_1.functions.easeInOutSine
                        };
                }
            }
        };
        Scroller.prototype.onPan = function (deltaX, deltaY) {
            this.scrollerX = this.startX + deltaX;
            this.scrollerY = this.startY + deltaY;
        };
        Scroller.prototype.onSwipe = function (velocityX, velocityY) {
            var endX = this.scrollerX - velocityX * 1000;
            var endY = this.scrollerY - velocityY * 1000;
            if (endX > this.ScrollMinX) {
                this.currentEasingX =
                    {
                        animationStartTime: Scroller_1.funcNow(),
                        duration: 1,
                        begin: this.scrollerX,
                        change: -this.scrollerX,
                        func: Scroller_1.functions.easeOutBack
                    };
            }
            else if (endX < this.ScrollMaxX) {
                this.currentEasingX =
                    {
                        animationStartTime: Scroller_1.funcNow(),
                        duration: 1,
                        begin: this.scrollerX,
                        change: -(this.scrollerX - this.ScrollMaxX),
                        func: Scroller_1.functions.easeOutBack
                    };
            }
            else {
                this.currentEasingX =
                    {
                        animationStartTime: Scroller_1.funcNow(),
                        duration: 1,
                        begin: this.scrollerX,
                        change: -velocityX * 1000,
                        func: Scroller_1.functions.easeOutSine
                    };
            }
            if (endY > this.ScrollMinY) {
                this.currentEasingY =
                    {
                        animationStartTime: Scroller_1.funcNow(),
                        duration: 1,
                        begin: this.scrollerY,
                        change: -this.scrollerY,
                        func: Scroller_1.functions.easeOutBack
                    };
            }
            else if (endY < this.ScrollMaxY) {
                this.currentEasingY =
                    {
                        animationStartTime: Scroller_1.funcNow(),
                        duration: 1,
                        begin: this.scrollerY,
                        change: -(this.scrollerY - this.ScrollMaxY),
                        func: Scroller_1.functions.easeOutBack
                    };
            }
            else {
                this.currentEasingY =
                    {
                        animationStartTime: Scroller_1.funcNow(),
                        duration: 1,
                        begin: this.scrollerY,
                        change: -velocityY * 1000,
                        func: Scroller_1.functions.easeOutSine
                    };
            }
        };
        Scroller.prototype.scrollToX = function (posX, duration) {
            if (duration === void 0) { duration = 0.15; }
            if (!public_3.Guard.isNumber(posX))
                throw new public_2.IllegalArgumentError("The specified value for 'posX' is not a number.");
            var diff = 0;
            this.computePosition();
            this.finishX();
            if (posX > -this.ScrollMaxX) {
                diff = posX + this.ScrollMaxX;
                posX = -this.ScrollMaxX;
            }
            else if (posX < -this.ScrollMinX) {
                diff = posX + this.ScrollMinX;
                posX = -this.ScrollMinX;
            }
            this.currentEasingX =
                {
                    animationStartTime: Scroller_1.funcNow(),
                    duration: duration,
                    begin: this.scrollerX,
                    change: -this.scrollerX - posX,
                    func: Scroller_1.functions.easeOutSine
                };
            return diff;
        };
        Scroller.prototype.scrollToY = function (posY, duration) {
            if (duration === void 0) { duration = 0.15; }
            if (!public_3.Guard.isNumber(posY))
                throw new public_2.IllegalArgumentError("The specified value for 'posY' is not a number.");
            var diff = 0;
            this.computePosition();
            this.finishY();
            if (posY > -this.ScrollMaxY) {
                diff = posY + this.ScrollMaxY;
                posY = -this.ScrollMaxY;
            }
            else if (posY < -this.ScrollMinY) {
                diff = posY + this.ScrollMinY;
                posY = -this.ScrollMinY;
            }
            this.currentEasingY =
                {
                    animationStartTime: Scroller_1.funcNow(),
                    duration: duration,
                    begin: this.scrollerY,
                    change: -this.scrollerY - posY,
                    func: Scroller_1.functions.easeOutSine
                };
            return diff;
        };
        Scroller.prototype.getCurrentPosition = function () {
            return {
                posX: Math.round(this.posX),
                posY: Math.round(this.posY)
            };
        };
        Scroller.prototype.computePosition = function (timestamp) {
            if (this.currentEasingX) {
                var timeDiff = Math.max(0, ((timestamp || Scroller_1.funcNow()) - this.currentEasingX.animationStartTime) / 1000);
                if (timeDiff >= this.currentEasingX.duration) {
                    this.scrollerX = this.currentEasingX.begin + this.currentEasingX.change;
                    this.currentEasingX = null;
                }
                else {
                    this.scrollerX = this.currentEasingX.func(0, timeDiff, this.currentEasingX.begin, this.currentEasingX.change, this.currentEasingX.duration);
                }
            }
            if (this.currentEasingY) {
                var timeDiff = Math.max(0, ((timestamp || Scroller_1.funcNow()) - this.currentEasingY.animationStartTime) / 1000);
                if (timeDiff >= this.currentEasingY.duration) {
                    this.scrollerY = this.currentEasingY.begin + this.currentEasingY.change;
                    this.currentEasingY = null;
                }
                else {
                    this.scrollerY = this.currentEasingY.func(0, timeDiff, this.currentEasingY.begin, this.currentEasingY.change, this.currentEasingY.duration);
                }
            }
            this.posX = this.scrollerX;
            this.posY = this.scrollerY;
            this.isScrolling = !!(this.currentEasingY || this.currentEasingX);
        };
        Scroller.prototype.finish = function () {
            this.finishX();
            this.finishY();
        };
        Scroller.prototype.finishY = function () {
            this.currentEasingY = null;
        };
        Scroller.prototype.finishX = function () {
            this.currentEasingX = null;
        };
        var Scroller_1;
        Scroller.funcNow = typeof performance !== "undefined" && performance.now ? function () { return performance.now(); } : function () { return Date.now(); };
        Scroller.functions = {
            easeInOutSine: function (x, t, b, c, d) {
                return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
            },
            easeOutSine: function (x, t, b, c, d) {
                return c * Math.sin(t / d * (Math.PI / 2)) + b;
            },
            easeOutBack: function (x, t, b, c, d) {
                var s = 1.70158;
                return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
            },
            easeLinear: function (x, t, b, c, d) {
                return c * t / d + b;
            },
            easeOutCubic: function (x, t, b, c, d) {
                var ts = (t /= d) * t;
                var tc = ts * t;
                return b + c * (tc + -3 * ts + 3 * t);
            }
        };
        Scroller = Scroller_1 = __decorate([
            public_1.logTag()
        ], Scroller);
        return Scroller;
    }());
    exports.Scroller = Scroller;
});
//# sourceMappingURL=Scroller.js.map