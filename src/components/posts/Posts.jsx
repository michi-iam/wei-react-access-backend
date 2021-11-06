import React from 'react';
import PageTitle from "../subcomponents/PageTitle";
import ShowPosts from './show/ShowPosts';
import getDataWithAxios from "../axios/MyGetAxios";


const BASE_URL = process.env.REACT_APP_BASE_URL;

class AddPost extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      categories: "",
    }
  }


  componentDidMount() {
    var self = this;
    getDataWithAxios(BASE_URL+"get_categories/", function(data){
      self.setState({ categories: data.categories})
    });
  }
  
  //posts for each Category
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
  