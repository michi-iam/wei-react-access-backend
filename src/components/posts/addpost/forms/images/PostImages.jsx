import React from "react"

import getDataWithAxios from "../../../../axios/MyGetAxios";
import postDataWithAxios from "../../../../axios/MyPostAxios";


const URL_ADD_OR_REMOVE_POST_IMAGE = process.env.REACT_APP_URL_ADD_OR_REMOVE_POST_IMAGE;
const URL_SET_MAINIMAGE = process.env.REACT_APP_URL_SET_MAINIMAGE;

const URL_GET_AVAILABLE_IMAGES = process.env.REACT_APP_URL_GET_AVAILABLE_IMAGES;
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
    var self = this;
    getDataWithAxios(URL_GET_AVAILABLE_IMAGES, function(data){
      self.setState({ availableImages: data.availableImages})
    }, {params:{postId: self.state.post.id}})

    

  }

  addOrRemovePostImage(image, remove){
    var self = this;


    postDataWithAxios(URL_ADD_OR_REMOVE_POST_IMAGE, {
      imageId: image.id,
      postId: this.state.post.id,
      remove: remove
    }, function(data){
      self.setState({ post:data.post,
        postImages:data.postImages,
        availableImages:data.availableImages,
      })
    })

  }

  setMainImage({ image, self }){

    postDataWithAxios(URL_SET_MAINIMAGE, {
      imageId: image.id,
      postId: this.state.post.id,
    }, function(data){
      self.setState({
        mainImage: data.mainImage,
        postImages: data.postImages
      })
    })


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







