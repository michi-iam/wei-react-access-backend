import React from 'react';
import PageTitle from "../subcomponents/PageTitle";
import ShowPosts from './show/ShowPosts';
import axios from 'axios';
class AddPost extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      categories: "",
    }
  }


  componentDidMount() {
    axios.get(`http://192.168.178.72:8000/get_categories`)
    .then(res => {
      const data = res.data;
      console.log(res)
      console.log(data.data)
     this.setState({ categories: data.data})
    })
  }
  
  //Each Category
    render () {
      var categories = this.state.categories;
      return <div className='container'>
          <PageTitle firstLine="" secondLine="" thirdLine="Posts" />
          {Object.keys(categories).map(function(keyName, keyIndex){
                return <div id={ categories[keyName].linkName } key={keyIndex} className="row mb-2">
                    <ShowPosts category={ categories[keyName] } /> 
                  </div>
                })}
      </div>
    }
  }

export default AddPost;
  