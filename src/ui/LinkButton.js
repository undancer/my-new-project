"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const core_1 = require("@material-ui/core");
class LinkButton extends React.Component {
    constructor() {
        super(...arguments);
        this.handleClick = (event) => {
            event.preventDefault();
            console.log('click');
            if (this.props.onClick) {
                this.props.onClick(event);
            }
        };
    }
    render() {
        return (React.createElement(core_1.Button, { variant: 'contained', color: 'primary', onClick: this.handleClick }, this.props.children));
    }
}
exports.LinkButton = LinkButton;
//# sourceMappingURL=LinkButton.js.map