import React from 'react';
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
     var editBtn = <div className="container">
         <div className="row">
            <h3>{ post.title }</h3>
        </div>
        <div className="row">
            <button onClick={ this.handleClick }>edit</button>
        </div>
     </div>

      
    return this.state.edit ?  <EditPostForm post={ post } key={ post.id }/> : editBtn;
    }
  }

export default SinglePost;
  
