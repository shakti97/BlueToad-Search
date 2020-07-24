import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Axios from "axios";
import Search from "./Components/Search";
import ViewImages from "./Components/ViewImages";

const getImages = async (query) => {
  let url = `https://api.unsplash.com/search/photos?query=${query}&per_page=50&client_id=o5j2x0iUuKUeHoMtqjG9_KHvnUWl0HDF0g453y5Ju7U`;
  let images = await Axios.get(url);
  return images.data.results.splice(0, 25);
};

class App extends Component {
  state = {
    query: "",
    images: [],
  };
  fetchImage = async (query) => {
    if (query !== this.state.query) {
      let images = await getImages(query);
      images = images.map((image) => image.urls.regular);
      this.setState({
        images,
        query,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Search fetchImages={this.fetchImage} />
        <ViewImages images={this.state.images} />
      </div>
    );
  }
}

export default App;
