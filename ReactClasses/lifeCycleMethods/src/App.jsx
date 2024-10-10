import React, {Component} from "react";
import DataFetcher from "./components/DataFetcher";
import './App.css';

class App extends Component{
  render(){
    return(
      <>
        <DataFetcher apiUrl = "https://jsonplaceholder.typicode.com/posts"/>
      </>
    )
  }
}

export default App