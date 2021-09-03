"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property = void 0;
var core_1 = require("@angular/core");
function Property() {
    var _val;
    return function (target, key) {
        Object.defineProperty(target, key, {
            set: function (value) {
                _val = value;
                if ("__ngContext__" in this) {
                    core_1.ɵmarkDirty(this);
                }
                return _val;
            },
            get: function () {
                return _val;
            }
        });
    };
}
exports.Property = Property;
