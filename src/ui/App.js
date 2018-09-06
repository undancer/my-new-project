"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const LinkButton_1 = require("./LinkButton");
class App extends React.Component {
    constructor() {
        super(...arguments);
        this.handleClick = () => {
            console.log('app');
        };
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("h2", null, "Welcome to React with Typescript!"),
            React.createElement(LinkButton_1.LinkButton, { onClick: this.handleClick }, "Hello World")));
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map