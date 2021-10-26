import React from "react"

import axios from "axios"



const TOKEN = process.env.REACT_APP_AUTH_TOKEN;
const URL_ADD_OR_REMOVE_POST_IMAGE = process.env.REACT_APP_URL_ADD_OR_REMOVE_POST_IMAGE;
const URL_SET_MAINIMAGE = process.env.REACT_APP_URL_SET_MAINIMAGE;


// function containsObject(obj, list) {
//   var i;
//   for (i = 0; i < list.length; i++) {
//       if (list[i].src === obj.src) {
//           return true;
//       }
//   }

//   return false;
// }


class PostImages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          post: this.props.post,
          postImages: this.props.post.images,
          availableImages: [],
          mainImage: this.props.post.mainImage,

        };
      this.addOrRemovePostImage = this.addOrRemovePostImage.bind(this);
      this.setMainImage = this.setMainImage.bind(this);
    }



 

  componentDidMount() {
    axios.get(`http://192.168.178.72:8000/get_available_images`, {params:{postId: this.state.post.id}})
    .then(res => {
      var data = res.data;
     this.setState({ availableImages: data.availableImages})
    })
  }

  addOrRemovePostImage(image, remove){
    var self = this;
    axios.defaults.headers.common["Authorization"] = TOKEN; // doesn't work (401)
    axios.post(URL_ADD_OR_REMOVE_POST_IMAGE, {
      imageId: image.id,
      postId: this.state.post.id,
      remove: remove
    })
    .then(function (response) {
      var post = response.data.post
      var postImages = response.data.postImages
      var availableImages = response.data.availableImages
      self.setState({ post:post })
      self.setState({ postImages:postImages })
      self.setState({ availableImages:availableImages })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  setMainImage({ image, self }){
    axios.defaults.headers.common["Authorization"] = TOKEN; // doesn't work (401)
    axios.post(URL_SET_MAINIMAGE, {
      imageId: image.id,
      postId: this.state.post.id,
    })
    .then(function (response) {
      var mainImage = response.data.mainImage
 
      self.setState({ mainImage:mainImage })
      self.setState({ postImages:response.data.postImages })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

    render() {
        var AvailableImages = () => { 
          var aVimgs = this.state.availableImages;
          return <div className="row mt-2">
          <div className="row">
            <h3>Verfügbare Bilder</h3>
          </div>
           { Object.keys(aVimgs).map(function(keyName, keyIndex){
               return <div className="col-1" key={ keyIndex }>
               <h1>{ aVimgs[keyName].title }</h1>
               <div>
                 <img onClick={() => this.addOrRemovePostImage(aVimgs[keyName], false) } key={ keyIndex } className="img img-fluid" src={ aVimgs[keyName].src } alt={ aVimgs[keyName].alt } />
               </div>
            </div> 
            }, this)}
            </div>
        } 

        var PostImages = () => {
      
        var postImages = this.state.postImages
          return <div className="row mt-2">
            <div className="row">
              <h3>Bilder zum Post</h3>
            </div>
            <div className="row">
              { Object.keys(postImages).map(function(keyName, keyIndex){
                var image = postImages[keyName]
                return <div className="col-1"  key={ keyIndex }>
                  <img onClick={() => this.addOrRemovePostImage(image, true) } key={ keyIndex } className="img img-fluid" src={ image.src } alt={ image.alt } />
                  { image.src === this.state.mainImage.src ? "" : 
                  <button onClick={() => this.setMainImage({image:image, self:this}) } >als Hauptbild</button> }
                  </div>
              }, this)}

            </div>
          </div>
        }

        var MainImage = () => {
          return <div className="row">
          <div className="col-1">
            Hauptbild 
            <img className="img img-fluid" src={ this.state.mainImage.src } alt={ this.state.mainImage.alt } />
          </div>
          </div>
        }

      return (
        <div className="row mt-5 bg-warning rounded shadow p-4">
            <AvailableImages />
            <PostImages />
            <MainImage />

        </div>
      );
    }
  }

export default PostImages;







  // // mit axios posten
  // addToPostImages(image){
  //   // this.setState({ postImages: this.state.postImages.concat(image)})
  //   // const newList = this.state.availableImages.filter((item) => item.src !== image.src);
  //   // this.setState({ availableImages: newList })
  //   // console.log(image.id)
  //   // var post = ""

  //   var self = this;
  //   axios.defaults.headers.common["Authorization"] = TOKEN; // doesn't work (401)
  //   axios.post(URL_ADD_OR_REMOVE_POST_IMAGE, {
  //     imageId: image.id,
  //     postId: this.state.post.id,
  //   })
  //   .then(function (response) {
  //     var post = response.data.post
  //     var postImages = response.data.postImages
  //     var availableImages = response.data.availableImages
  //     self.setState({ post:post })
  //     self.setState({ postImages:postImages })
  //     self.setState({ availableImages:availableImages })
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

    
  // }





// removeFromPostImages(image){
//   // const newList = this.state.postImages.filter((item) => item.src !== image.src)
//   // this.setState({ postImages: newList })
//   // this.setState({ availableImages: this.state.availableImages.concat(image) }) 

//   // var post = ""
//   var self = this;

//   axios.defaults.headers.common["Authorization"] = TOKEN; // doesn't work (401)
//   axios.post(URL_REMOVE_POST_IMAGE, {
//     imageId: image.id,
//     postId: this.state.post.id,
//   })
//   .then(function (response) {
//     console.log(response);
//     var post = response.data.post
//     var postImages = response.data.postImages
//     var availableImages = response.data.availableImages
  
//     self.setState({ post:post })
//     self.setState({ postImages:postImages })
//     self.setState({ availableImages:availableImages })
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
  
// }