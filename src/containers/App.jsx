import { Component } from 'react';
import { withStyles } from 'vitaminjs';

import style from '../../stylesheets/App.css';

class App extends Component {
    render() {
        return (
            <div className={style.app}>
                <div className={style.appHeader}>
                    <h2>{'My blog'}</h2>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default withStyles(style)(App);