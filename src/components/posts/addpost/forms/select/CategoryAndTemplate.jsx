import React from "react"

import axios from "axios";
import getDataWithAxios from "../../../../axios/MyGetAxios";


const TOKEN = process.env.REACT_APP_AUTH_TOKEN;
const URL_CHANGE_TEMPLATE_OR_CATEGORY = process.env.REACT_APP_URL_CHANGE_TEMPLATE_OR_CATEGORY;
const URL_GET_POSTCHOICES = process.env.REACT_APP_URL_GET_POSTCHOICES;


class CategoryAndTemplate extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          post: this.props.post,
          category: this.props.post.category,
          template: this.props.post.template,
          categories: [],
          templates: [],
          is_template: false,
          categoryId: "",
          templateId: "",

        };
      this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount() {
        this.setState({ is_template: this.props.isTemplate })

        var self = this;
        getDataWithAxios(URL_GET_POSTCHOICES, function(data){
          self.setState({ categories: data.categories})
          self.setState({ templates: data.templates})
        })

      this.setState({ categoryId: this.state.category.id })
      this.setState({ templateId: this.state.template.id })
    }


  
    handleChange(event) {    
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value    });

        console.log("HANDEL CHANGE")
        console.log(this.state.is_template)
        console.log(this.state.templateId)
        console.log(this.state.categoryId)

        var postId = this.state.post.id
        var change = ""
        var changeId = ""
        //this.state.is_template ? {change= "template", changeId = this.state.templateId }: {change= "category", changeId=this.state.changeId};
        if(this.state.is_template === true){
          change= "template"
          changeId = value
          console.log("template ok")
          console.log(changeId)
        }
        else {
          change= "category"
          changeId=value
        }
        
        var self = this;
        axios.defaults.headers.common["Authorization"] = TOKEN; // doesn't work (401)
        axios.post(URL_CHANGE_TEMPLATE_OR_CATEGORY, {
          postId: postId,
          changeId: changeId,
          change: change,

  
        })
        .then(function (response) {
          self.setState({ post: response.data.post })
          self.setState({ category: response.data.category })
          self.setState({ template: response.data.template })
          self.setState({ is_template: response.data.is_template })
          self.setState({ categoryId: response.data.category.id })
          self.setState({ templateId: response.data.template.id })
          
    
        })
        .catch(function (error) {
          console.log(error);
        });
    }

  


    render() {
        var is_template = this.props.isTemplate;
      return (   is_template ? <div className="row">
      <label className="form-label" htmlFor="template">Template:
           <select onChange={event => this.handleChange(event) } name="templateId" id="">
           <option value={ this.state.template.id }>{this.state.template.name}</option>
            { this.state.templates.map((template)=>{
              return <option key={ template.id} value={ template.id }>{template.name}</option>
            })}
           </select>
      </label>
    </div> : <div className="row">
      <label className="form-label" htmlFor="category">Kategorie:
           <select onChange={event => this.handleChange(event) } name="categoryId" id="">
           <option value={ this.state.category.id }>{this.state.category.name}</option>
            { this.state.categories.map((category)=>{
              return <option key={ category.id} value={ category.id }>{category.name}</option>
            })}
           </select>
  
      </label>
    </div>
  
      );
    }
  }

export default CategoryAndTemplate;


