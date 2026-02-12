"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var page_1 = require("@aon/data-components/src/payments/page");
var react_to_web_component_1 = require("@r2wc/react-to-web-component");
var DemoPageForWebComponent = function (props) {
    return (0, jsx_runtime_1.jsx)(page_1.default, {});
};
var DemoPageWebComponent = (0, react_to_web_component_1.default)(DemoPageForWebComponent, {
    props: { rule: "json" },
});
customElements.define("demo-page", DemoPageWebComponent);
