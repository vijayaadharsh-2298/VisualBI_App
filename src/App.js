import React, { Component } from 'react';
import axios from 'axios';
import { Provider } from 'react-redux';
import GlobalStore from './redux/globalStore';
import { setAlbums } from './redux/albums.action';
import { setTitle } from './redux/titles.action';
import AppRouter from './app.router';

class App extends Component {

  store = GlobalStore();

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/photos')
         .then(res => {
           const albums = res.data.slice(0,100);
           albums.map(alb => this.store.dispatch(setAlbums(alb)));
         })
         .catch(err => console.log(err))
    axios.get('https://jsonplaceholder.typicode.com/albums')
         .then(res => {
            res.data.map(t => this.store.dispatch(setTitle(t)));
            ;
         })
         .catch(err => console.log(err))
  
  }

  render(){
  return (
    <Provider store={this.store}>
      <AppRouter />
    </Provider>
  )};
}

export default App;
