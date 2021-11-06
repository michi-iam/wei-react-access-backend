import React from "react"


import getDataWithAxios from "../../../../axios/MyGetAxios";
import postDataWithAxios from "../../../../axios/MyPostAxios";


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

        var postId = this.state.post.id
        var change = ""
        var changeId = ""
        if(this.state.is_template === true){
          change= "template"
          changeId = value

        }
        else {
          change= "category"
          changeId=value
        }
        
        var self = this;

        postDataWithAxios(URL_CHANGE_TEMPLATE_OR_CATEGORY, {
          postId: postId,
          changeId: changeId,
          change: change,
        }, function(data){
          self.setState({ post: data.post, 
            category: data.category,
            template: data.template,
            is_template: data.is_template,
            categoryId: data.category.id,
            templateId: data.template.id
          })

        })

    }

  


    render() {
        var is_template = this.props.isTemplate;
      return (   is_template ? <div className="row">
      <label className="form-label" htmlFor="template">
           <select onChange={event => this.handleChange(event) } name="templateId" id="" className="form-select">
           <option value={ this.state.template.id }>{this.state.template.name}</option>
            { this.state.templates.map((template)=>{
              return <option key={ template.id} value={ template.id }>{template.name}</option>
            })}
           </select>
      </label>
    </div> : <div className="row">
      <label className="form-label" htmlFor="category">
           <select onChange={event => this.handleChange(event) } name="categoryId" id="" className="form-select">
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


