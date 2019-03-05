import React, { Component } from 'react'
import { hot } from 'react-hot-loader/root'

import Header from './Header'
import AppRouter from './RouterNested'

// // 1. 
// function App() {
//   return <Header />
// }

// 2.
const App = () => {
  return <AppRouter />
}

// // 3.
// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {isRunning: true}
//   }

//   render() {
//     this.myheader
//     return <div>hi</div>
//   }
// }

// // 4. No need for constructor
// class App extends Component {
//   state = {isRunning: true}

//   render() {
//     return <div>hi</div>
//   }

// }

export default hot(App)
