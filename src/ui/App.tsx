import * as React from 'react';
import {LinkButton} from './LinkButton';

export default class App extends React.Component<{}, {}> {

    handleClick = () => {
        console.log('app');
    }

    render() {
        return (
            <div>
                <h2>Welcome to React with Typescript!</h2>
                <LinkButton onClick={this.handleClick}>Hello World</LinkButton>
            </div>
        );
    }
}
