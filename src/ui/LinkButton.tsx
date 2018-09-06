import * as React from 'react';
import {Button} from '@material-ui/core';

export interface ILinkButtonProps {

    readonly onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export class LinkButton extends React.Component<ILinkButtonProps, {}> {

    handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {

        event.preventDefault();
        console.log('click');

        if (this.props.onClick) {
            this.props.onClick(event);
        }

    }

    render() {
        return (
            <Button
                variant='contained'
                color='primary'
                onClick={this.handleClick}
            >
                {this.props.children}
            </Button>
        );
    }
}
