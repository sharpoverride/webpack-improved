"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var context_1 = require('../context');
var CounterIncrease = (function (_super) {
    __extends(CounterIncrease, _super);
    function CounterIncrease() {
        _super.apply(this, arguments);
    }
    CounterIncrease.prototype.componentWillMount = function () {
        var _this = this;
        this.subscription = context_1.default.subscribe(function (appState) {
            _this.count = appState.get('count');
            _this.appState = appState;
        });
    };
    CounterIncrease.prototype.componentWillUnmount = function () {
        this.subscription.unsubscribe();
    };
    CounterIncrease.prototype.increase = function () {
        var _a = this, appState = _a.appState, count = _a.count;
        console.log('increase', count, count + 1);
        appState.set('count', count + 1);
    };
    CounterIncrease.prototype.render = function () {
        return (React.createElement("button", {onClick: this.increase.bind(this)}, "Increase"));
    };
    return CounterIncrease;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CounterIncrease;
//# sourceMappingURL=counter-increase.js.map