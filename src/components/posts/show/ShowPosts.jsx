import React from 'react';
import PageTitle from "../../subcomponents/PageTitle";
import SinglePost from './SinglePost';

class ShowPosts extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      catTitle: this.props.category.name,
      posts: this.props.category.posts,
    }
  }



  
    render () {
      var posts = this.state.posts;
      var catTitle = this.state.catTitle;
      return <div className='container'>
          <div className="row bg-warning p-3">
          <PageTitle firstLine="" secondLine="" thirdLine={ catTitle } />
          </div>
          {Object.keys(posts).map(function(keyName, keyIndex){
                return <SinglePost post={ posts[keyName] } key={ keyIndex } />
                })}
      </div>
    }
  }

export default ShowPosts;
  