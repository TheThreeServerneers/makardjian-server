import React from 'react';
import axios from 'axios';
import ProductOverview from './ProductOverview.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoSideBar: [],
      mainPhoto: {},
      highlightedThumbnail: {},
      currentProduct: {},
      currentDescription: [],
      showZoomBox: false,
    };
    this.changeMainPhoto = this.changeMainPhoto.bind(this);
    this.displayZoomBox = this.displayZoomBox.bind(this);
  }

  componentDidMount() {
    const productId = window.location.pathname.split('/')[1];
    console.log(productId);
    this.getProduct(productId);
  }

  getProduct(id) {
    axios.get(`/products/${id}`)
      .then((data) => {
        console.log(data);
        const parsedDescription = JSON.parse(data.data[0].description);
        console.log(parsedDescription);
        const mainPhoto = { main_url: data.data[0].photo1, zoom_url: data.data[0].photo1_zoom, main_photo: true };
        const p1 = { main_url: data.data[0].photo2, zoom_url: data.data[0].photo2_zoom, main_photo: false };
        const p2 = { main_url: data.data[0].photo3, zoom_url: data.data[0].photo3_zoom, main_photo: false };
        const p3 = { main_url: data.data[0].photo4, zoom_url: data.data[0].photo4_zoom, main_photo: false };
        const p4 = { main_url: data.data[0].photo5, zoom_url: data.data[0].photo5_zoom, main_photo: false };
        const photoSideBar = [mainPhoto, p1, p2, p3, p4].filter(photo => photo.main_url);
        console.log(photoSideBar);
        this.setState({
          mainPhoto,
          highlightedThumbnail: mainPhoto,
          photoSideBar,
          currentProduct: data.data[0],
          currentDescription: [parsedDescription],
        });
        console.log(this.state);
      });
  }

  changeMainPhoto(photo) {
    this.setState({
      mainPhoto: photo,
      highlightedThumbnail: photo,
    });
  }

  displayZoomBox() {
    this.setState({
      showZoomBox: !this.state.showZoomBox,
    });
  }

  render() {
    return (
      <div data-test="component-app" id="mk-product-overview">
        <ProductOverview
          product={this.state.currentProduct} 
          description={this.state.currentDescription}
          photoSideBar={this.state.photoSideBar} 
          mainPhoto={this.state.mainPhoto} 
          highlightedThumbnail={this.state.highlightedThumbnail} 
          showZoomBox={this.state.showZoomBox}
          changeMainPhoto={this.changeMainPhoto}
          displayZoomBox={this.displayZoomBox}/>
      </div>
    );
  };
};

export default App;

//Note: 
  //The reason there is a this.state.currentDescription is b/c I was having trouble parsing the description in child components.
  