import React from 'react';
import MyLink from '../../subcomponents/MyLink';
import EditPostForm from '../addpost/forms/EditPostForm';


class SinglePost extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      post: this.props.post,
      edit: false, // show or edit 
    }
    this.handleClick = this.handleClick.bind(this);
  }

  
  handleClick() {
      this.setState({ edit: true })
  }

    render () {
      var post = this.state.post;

     const editBtn = <div className="row justify-content-center">
         <div className="MyPostTitle mb-2">
            <div className="col-12 col-lg-6 ">
              <h3>{ post.title }</h3>
            </div>
            <div className="row mt-2 text-muted ">
              <div className="col-12 col-lg-6 ps-lg-5">
              { post.text !== "None" ? <p>{ post.text.substring(0,200) }</p>: <p>...kein Text</p>}
              </div>
            </div>
            
        </div>
        <div className="row mb-5 justify-content-end">
            <div className="col-3">
              <div className="row">
               <button className="MyEditBtn" onClick={ this.handleClick }>edit</button>
              </div>
            </div>
        </div>
        <div className="row justify-content-center">
           <hr />
        </div>
     </div>

      
    return this.state.edit ?  <EditPostForm post={ post } key={ post.id }/> : editBtn;
    
    }
  }

export default SinglePost;
  
