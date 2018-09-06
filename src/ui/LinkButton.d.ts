import * as React from 'react';
export interface ILinkButtonProps {
    readonly onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export declare class LinkButton extends React.Component<ILinkButtonProps, {}> {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    render(): JSX.Element;
}
