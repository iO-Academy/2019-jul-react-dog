import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom'
import './index.css'
import Page from './components/Page/Page'
import Notfound from './components/Notfound/Notfound'

class Routing extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Page}/>
                    <Route component={Notfound}/>
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(<Routing/>, document.getElementById('root'))
