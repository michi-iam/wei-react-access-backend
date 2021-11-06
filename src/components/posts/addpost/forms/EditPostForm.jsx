import React from "react"
import PageTitle from "../../../subcomponents/PageTitle";
import PostImages from "./images/PostImages";
import PostSelect from "./select/CategoryAndTemplate";
import StatusActive from "./select/StatusActive";
import PostLinks from "./links/PostLinks";

import getDataWithAxios from "../../../axios/MyGetAxios";
import postDataWithAxios from "../../../axios/MyPostAxios";


const URL_EDIT_POST_BASICS = process.env.REACT_APP_URL_EDIT_POST_BASICS;
const URL_GET_POSTCHOICES = process.env.REACT_APP_URL_GET_POSTCHOICES;


var BasicPostForm = ({ post, self }) => { return <div>
  <div className="row">
    <input type="hidden" name="postId" value={ post.id } id="" />
    <label className="form-label" htmlFor="title">Titel:
        <input defaultValue={ self.state.title } onChange={event => self.handleChange(event) } name="title" placeholder="title" type="text" className="form-control" />
    </label>
  </div>
  <div className="row">
    <label className="form-label" htmlFor="subTitle">Untertitle:
      <input defaultValue={ self.state.subTitle } onChange={event => self.handleChange(event) } name="subTitle" placeholder="subTitle" type="text" className="form-control" />
    </label>
  </div>
  <div className="row">
    <label className="form-label" htmlFor="text">Text:
      <textarea rows="36" style={{ whiteSppace:"pre-line"}} defaultValue={ self.state.text } onChange={event => self.handleChange(event) } name="text" placeholder="text" type="text" className="form-control" />
    </label>
  </div>
  <div className="row">
    <label className="form-label" htmlFor="subTitle">Extra-Text:
      <textarea rows="6" defaultValue={ self.state.extraText } onChange={event => self.handleChange(event) } name="extraText" placeholder="extraText" type="text" className="form-control" />
    </label>
  </div>
  <div className="row">
    <label className="form-label" htmlFor="linkName">Link-Name:
      <input defaultValue={ self.state.linkName } onChange={event => self.handleChange(event) } name="linkName" placeholder="linkName" type="text" className="form-control" />
    </label>
  </div>
  <div className="row mt-3">
    <label className="form-label" htmlFor="template">Template:
      <PostSelect post = { post } isTemplate={ true } />

    </label>
  </div>
  <div className="row">
    <label className="form-label" htmlFor="categoryId">Kategorie:
      <PostSelect post = { post } isTemplate={ false }/>
    </label>
  </div>


</div>
}

class EditPostForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          post: this.props.post,
          postImages: this.props.post.images,
          title:this.props.post.title,
          subTitle:this.props.post.subTitle,
          text:this.props.post.text,
          extraText:this.props.post.extraText,
          template: this.props.post.template,
          category: this.props.post.category,
          linkName: this.props.post.linkName,

          updated: false,
          categories: [],
          templates: [],

        };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount() {
      var self = this;
      getDataWithAxios(URL_GET_POSTCHOICES, function(data){
        self.setState({ categories: data.categories})
        self.setState({ templates: data.templates})
      })
    }


  
    handleChange(event) {    
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value    });
    }


    handleSubmit(event) {
      event.preventDefault();
    
      var postId = this.state.post.id
      var title = this.state.title;
      var subTitle = this.state.subTitle;
      var text = this.state.text;
      var extraText = this.state.extraText;
      var linkName = this.state.linkName;
 
      var self = this;

      postDataWithAxios(URL_EDIT_POST_BASICS, {
        postId: postId,
        title:title,
        subTitle:subTitle,
        text:text,
        extraText: extraText,
        linkName:linkName,
      }, function(data){
        self.setState({ post: data.post })
        self.setState({ category: data.category })
        self.setState({ template: data.template })

        self.setState({ updated: true })
        setTimeout(() => {
          self.setState({ updated: false })
        }, 3000);
      })


    }
  


    render() {
        var post = this.state.post;
        var updated = this.state.updated;

      return (
        <div className="container bg-light border border-success border-4 ">
           <div className="row  text-center p-5 ">
             <h3 className="text-muted">{"Post:"}</h3>
             <h1 className="fw-bolder">{post.title}</h1>
             <h3 className="text-muted">{"bearbeiten"}</h3>
           </div>
           <div className="row justify-content-center ">
              <div className="row">
               <PostImages post={ post }/>
              </div>
              <div className="row mt-3">
              <div className="row">
                <h3 className="bg-success p-2 rounded">Text</h3>
              </div>
               <div className="row mt-5 mb-3">
                <form onSubmit={this.handleSubmit}>       
                    <BasicPostForm post={ post } self={ this }/>
                    <div className="row justify-content-end">
                      <div className="col-4 text-end">
                      <div className="row">
                      { updated ? <button className="btn btn-info" disabled>GEÄNDERT</button> 
                    : <button className="btn btn-success" type="submit">ändern</button> }
                      </div>
                      </div>
                    </div>
                  </form>
               </div>
              </div>
              <div className="row mt-3 text-center">
                <StatusActive post = { post } />
            </div>
              <div className="row mt-5">
                  <PostLinks post = { post } />
              </div>
           </div>
        </div>
      );
    }
  }

export default EditPostForm;



