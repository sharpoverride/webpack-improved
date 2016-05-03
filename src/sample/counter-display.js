"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var context_1 = require('../context');
var accessor_1 = require('../context/accessor');
var CounterDisplay = (function (_super) {
    __extends(CounterDisplay, _super);
    function CounterDisplay() {
        _super.apply(this, arguments);
    }
    CounterDisplay.prototype.componentWillMount = function () {
        var _this = this;
        this.subscription = context_1.default.subscribe(function (appStateCursor) {
            _this.setState({
                count: accessor_1.count(appStateCursor)
            });
        });
    };
    CounterDisplay.prototype.componentWillUnmount = function () {
        this.subscription.unsubscribe();
    };
    CounterDisplay.prototype.render = function () {
        var state = this.state;
        return (React.createElement("p", null, "Counter is at ", state.count));
    };
    return CounterDisplay;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CounterDisplay;
//# sourceMappingURL=counter-display.js.map