/*
 * Copyright 2018 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "react", "react-dom", "@patternfly/react-core"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var React = require("react");
    var ReactDOM = require("react-dom");
    var react_core_1 = require("@patternfly/react-core");
    var Main = /** @class */ (function (_super) {
        __extends(Main, _super);
        function Main(props) {
            return _super.call(this, props) || this;
        }
        Main.prototype.render = function () {
            return (React.createElement(React.Fragment, null,
                React.createElement(react_core_1.Stack, { gutter: 'md' },
                    React.createElement(react_core_1.StackItem, { isFilled: true },
                        React.createElement(react_core_1.Button, { variant: "primary" }, "PF4-react Button")),
                    React.createElement(react_core_1.StackItem, { isFilled: true },
                        React.createElement(react_core_1.Tabs, { isFilled: true },
                            React.createElement(react_core_1.Tab, { eventKey: 0, title: "Tab item 1" }, "Tab 1 section"),
                            React.createElement(react_core_1.Tab, { eventKey: 1, title: "Tab item 2" }, "Tab 2 section"),
                            React.createElement(react_core_1.Tab, { eventKey: 2, title: "Tab item 3" }, "Tab 3 section"))),
                    React.createElement(react_core_1.StackItem, { isFilled: true }))));
        };
        return Main;
    }(React.Component));
    exports.Main = Main;
    ;
    ReactDOM.render(React.createElement(Main, null), document.getElementById('main_react_container'));
});
//# sourceMappingURL=entry.js.map