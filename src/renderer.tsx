import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import App from './ui/App';

let render = () => {
    ReactDOM.render(
        (
            <AppContainer>
                <App/>
            </AppContainer>
        )
        , document.getElementById('App'));
};

render();
if (module.hot) {
    module.hot.accept(render);
}
