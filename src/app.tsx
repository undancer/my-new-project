import * as React from 'react';
import {Button} from '@material-ui/core';

export default class App extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <h2>Welcome to React with Typescript!</h2>
                <Button variant='contained' color='primary'>
                    Hello World
                </Button>
            </div>
        );
    }
}
