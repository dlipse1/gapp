import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Weather from './weather.jsx'
import Order from './order.jsx'
import logo from './surf.png'

const BasicExample = () => (
  <Router>
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <ul className='header'>
        <li><Link to="/">Catalogue</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/whatsNew">Whats New</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/weather">Weather</Link></li>
        <li><Link to="/order">Order</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Catalogue}/>
      <Route path="/whatsNew" component={WhatsNew}/>
      <Route path="/resources" component={Resources}/>
      <Route path="/topics" component={Topics}/>
      <Route path="/weather" component={Weather}/>
      <Route path="/order" component={Order}/>
    </div>
  </Router>
)

const Catalogue = () => (
  <div>
    <h2>Catalogue</h2>
  </div>
)

const WhatsNew = () => (
  <div>
    <h2>Whats New</h2>
  </div>
)

const Resources = () => (
  <div>
    <h2>Resources</h2>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul className='topics'>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components777`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default BasicExample