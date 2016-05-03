"use strict";
var Rx = require('rxjs');
var cursor_1 = require('immutable/contrib/cursor');
var immutable_1 = require('immutable');
var mockAppState = {
    count: 0
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new (function () {
    function Context() {
        this.onStateUpdateBind = this.onStateUpdate.bind(this);
        this.cursor = cursor_1.from(immutable_1.fromJS(mockAppState), this.onStateUpdateBind);
        this.subject = new Rx.BehaviorSubject(this.cursor);
    }
    Context.prototype.onStateUpdate = function (data) {
        this.cursor = cursor_1.from(data, this.onStateUpdateBind);
        this.subject.next(this.cursor);
    };
    Context.prototype.subscribe = function (observerOrNext, error, complete) {
        return this.subject.subscribe(observerOrNext, error, complete);
    };
    return Context;
}());
//# sourceMappingURL=index.js.map