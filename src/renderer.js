"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const react_hot_loader_1 = require("react-hot-loader");
const app_1 = require("./app");
let render = () => {
    ReactDOM.render(React.createElement(react_hot_loader_1.AppContainer, null,
        React.createElement(app_1.default, null)), document.getElementById('App'));
};
render();
if (module.hot) {
    module.hot.accept(render);
}
//# sourceMappingURL=renderer.js.map