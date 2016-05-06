"use strict";
var SorterComp = (function () {
    function SorterComp() {
        this.direction = 1;
    }
    SorterComp.prototype.sort = function (key, data) {
        var _this = this;
        if (this.key === key) {
            this.direction = -this.direction;
        }
        else {
            this.direction = 1;
        }
        this.key = key;
        data.sort(function (a, b) {
            if (a[key] === b[key]) {
                return 0;
            }
            else if (a[key] > b[key]) {
                return _this.direction;
            }
            else {
                return -_this.direction;
            }
        });
    };
    return SorterComp;
}());
exports.SorterComp = SorterComp;
//# sourceMappingURL=sorter.js.map