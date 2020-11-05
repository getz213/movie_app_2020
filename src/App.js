import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  }

  getMovies = async () => {
    // 구조 할당을 해서 받는 것이 좋다 
    const {
      data : {
        data : { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    //console.log(movies);

    this.setState({movies, isLoading: false}); // ES6에서 객체 키와 변수명이 동일하면 축약이 가능하다 

  }

  componentDidMount(){
    
    this.getMovies();
  }

  render(){

    const { isLoading } = this.state;

  return <div>{ isLoading ? 'Loading.......' : 'We are ready' }</div>
  }
}



export default App;
