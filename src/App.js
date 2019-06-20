import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import RootData from "./rootData.json"
import NavBarX from "./components/NavBar/navBar.js"
import Home from "./components_pages/Home/home.js"
import Page2 from "./components_pages/Page2/page2.js"
import Theme from "./components_pages/Theme/theme.js"
import FullPage from "./components_pages/FullPage/fullPage.js"
import './styles/App.sass'
import './styles/main.sass'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      rootData: RootData
    }
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path="/fullpage"
              render={route => <FullPage {...route}
                rootData={this.state.rootData.pages.FullPage}
              />}
            />
            <Route path="/"
              render={() => <NavPages rootData={this.state.rootData}/>}
            />
          </Switch>
        </BrowserRouter>
      </div>

    )
  }

}

function NavPages (props) {
  return (
    <div>
      <NavBarX title={props.rootData.website_name}/>
      <Switch>
        <Route path="/(|home|landing)/"
          render={route => <Home {...route}
            rootData={props.rootData}
          />}
        />
        <Route exact path="/page2"
          render={route => <Page2 {...route}
            rootData={props.rootData.pages.Page2}
          />}
        />
        <Route exact path="/theme"
          render={route => <Theme {...route}
            rootData={props.rootData.pages.Theme}
          />}
        />
      </Switch>
    </div>
  )
}

export default App
