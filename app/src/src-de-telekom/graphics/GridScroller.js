var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
define(["require", "exports", "../util/log/public", "../util/Stopwatch"], function (require, exports, public_1, Stopwatch_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ViewItem = exports.GridScroller = void 0;
    var GridScroller = (function () {
        function GridScroller(debug) {
            if (debug === void 0) { debug = false; }
            this.debug = debug;
            this.drawCount = 2;
            this.scrollerLayout = new ScrollerLayout(0, 0, 150, 150, 100, 100);
            this.clear();
        }
        GridScroller.prototype.clear = function () {
            this.items = {};
            this.itemsCache = [];
            this.itemsToDraw = [];
            this.viewItems = [];
        };
        GridScroller.prototype.initialize = function (calculateCallback, drawCallback) {
            this.calculateCallback = calculateCallback;
            this.drawCallback = drawCallback;
        };
        GridScroller.prototype.getNewItemToDraw = function (item, id, cbLayout) {
            if (this.items[id] && !this.items[id].temporary) {
                var index = this.itemsCache.indexOf(id);
                if (index >= 0) {
                    this.itemsCache.splice(index, 1);
                }
                var dataItem = this.items[id];
                return { isNew: false, dataItem: dataItem };
            }
            else {
                var dataItem = { id: id, data: item, layout: cbLayout(item, id) };
                this.itemsToDraw.push(dataItem);
                return { isNew: true, dataItem: dataItem };
            }
        };
        GridScroller.prototype.getNewViewItem = function (dataItem) {
            var newItem = new ViewItem(this, dataItem);
            this.viewItems = __spreadArray(__spreadArray([], this.viewItems), [newItem]);
            return newItem;
        };
        GridScroller.prototype.updateViewItem = function (viewItem) {
            var viewItems = __spreadArray([], this.viewItems);
            var index = viewItems.indexOf(viewItem);
            if (index === -1) {
                throw new Error("Used invalid item to update view item data.");
            }
            var newItem = new ViewItem(this, viewItem);
            viewItems.splice(index, 1, newItem);
            if (newItem.dataId && this.items[newItem.dataId]) {
                this.items[newItem.dataId].viewItem = newItem;
            }
            for (var _i = 0, _a = this.itemsToDraw; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.viewItem == viewItem) {
                    item.viewItem = newItem;
                }
            }
            this.viewItems = viewItems;
            return newItem;
        };
        GridScroller.prototype.drawItems = function () {
            var _this = this;
            if (this.itemsToDraw.length > 0) {
                var watch_1 = new Stopwatch_1.Stopwatch().start();
                var i_1 = 0;
                while (this.itemsToDraw.length > 0 && i_1 < this.drawCount) {
                    var viewItem = void 0;
                    var itemToDraw = this.itemsToDraw.splice(0, 1)[0];
                    if (this.itemsCache.length > 0) {
                        var cacheId = this.itemsCache.pop();
                        viewItem = this.items[cacheId].viewItem.update();
                        delete this.items[cacheId];
                    }
                    else {
                        viewItem = this.getNewViewItem(itemToDraw);
                    }
                    itemToDraw.viewItem = viewItem;
                    viewItem.dataId = itemToDraw.id;
                    viewItem.layout = itemToDraw.layout;
                    this.items[itemToDraw.id] = itemToDraw;
                    if (this.drawCallback)
                        this.drawCallback(this, itemToDraw, viewItem);
                    i_1++;
                }
                watch_1.stop();
                if (this.debug)
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("drawItems: " + i_1 + " of " + (_this.itemsToDraw.length + i_1) + "/" + _this.drawCount + " items; time: " + watch_1.time, "GridScroller")); });
            }
        };
        GridScroller.prototype.draw = function (posX, posY) {
            var _this = this;
            if (this.viewItems.length == 0
                || Math.abs(posX - this.scrollerLayout.posX) >= this.scrollerLayout.borderX
                || Math.abs(posY - this.scrollerLayout.posY) >= this.scrollerLayout.borderY) {
                var watch_2 = new Stopwatch_1.Stopwatch().start();
                this.scrollerLayout.posX = posX;
                this.scrollerLayout.posY = posY;
                var recycledItems_1 = 0;
                for (var id in this.items) {
                    var item = this.items[id];
                    if (this.itemsCache.indexOf(id) == -1) {
                        if (this.scrollerLayout.isAffectedX(item.layout.x, item.layout.width) != 0
                            || this.scrollerLayout.isAffectedY(item.layout.y, item.layout.height) != 0
                            || item.temporary) {
                            this.itemsCache.push(id);
                            recycledItems_1++;
                        }
                    }
                }
                this.itemsToDraw.length = 0;
                if (this.calculateCallback)
                    this.calculateCallback(this, posX, posY);
                var tempItems = this.itemsCache
                    .map(function (id) { return _this.items[id]; })
                    .filter(function (item) { return item.temporary; });
                if (tempItems.length > 0) {
                    var viewItems = __spreadArray([], this.viewItems);
                    for (var _i = 0, tempItems_1 = tempItems; _i < tempItems_1.length; _i++) {
                        var tempItem = tempItems_1[_i];
                        var index1 = viewItems.indexOf(tempItem.viewItem);
                        if (index1 !== -1) {
                            viewItems.splice(index1, 1);
                        }
                        var index2 = this.itemsCache.indexOf(tempItem.id);
                        if (index2 !== -1) {
                            this.itemsCache.splice(index2, 1);
                        }
                        delete this.items[tempItem.id];
                    }
                    this.viewItems = viewItems;
                }
                watch_2.stop();
                if (this.debug)
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("calculated items: " + _this.itemsToDraw.length + "; recycled items: " + recycledItems_1 + "; cached items: " + _this.itemsCache.length + "; total items: " + _this.viewItems.length + "; time: " + watch_2.time, "GridScroller")); });
            }
            this.drawItems();
        };
        return GridScroller;
    }());
    exports.GridScroller = GridScroller;
    var ViewItem = (function () {
        function ViewItem(scroller, source) {
            this.scroller = scroller;
            if (source instanceof ViewItem) {
                this.id = source.id;
                this.data = source.data;
                this.dataId = source.dataId;
                this.layout = source.layout;
            }
            else {
                this.id = ViewItem.id++;
                this.dataId = source.id;
                this.layout = source.layout;
            }
        }
        ViewItem.prototype.update = function () {
            return this.scroller.updateViewItem(this);
        };
        ViewItem.id = 0;
        return ViewItem;
    }());
    exports.ViewItem = ViewItem;
    var ScrollerLayout = (function () {
        function ScrollerLayout(posX, posY, borderX, borderY, height, width) {
            this.posX = posX;
            this.posY = posY;
            this.borderX = borderX;
            this.borderY = borderY;
            this.height = height;
            this.width = width;
        }
        ScrollerLayout.prototype.isAffectedX = function (itemPosX, itemWidth) {
            if ((-this.posX + itemPosX + itemWidth + this.borderX) <= 0) {
                return -1;
            }
            if ((-this.posX + itemPosX - this.borderX - this.width) >= 0) {
                return 1;
            }
            return 0;
        };
        ScrollerLayout.prototype.isAffectedY = function (itemPosY, itemHeight) {
            if ((-this.posY + itemPosY + itemHeight + this.borderY) <= 0) {
                return -1;
            }
            if ((-this.posY + itemPosY - this.borderY - this.height) >= 0) {
                return 1;
            }
            return 0;
        };
        return ScrollerLayout;
    }());
});
//# sourceMappingURL=GridScroller.js.map