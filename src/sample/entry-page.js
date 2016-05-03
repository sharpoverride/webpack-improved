"use strict";
var React = require('react');
var counter_display_1 = require('./counter-display');
var counter_increase_1 = require('./counter-increase');
var EntryPage = function (props) {
    return (React.createElement("div", null, React.createElement("h1", null, "Hello, World"), React.createElement(counter_display_1.default, null), React.createElement(counter_increase_1.default, null)));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EntryPage;
//# sourceMappingURL=entry-page.js.map