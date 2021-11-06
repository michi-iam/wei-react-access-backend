import React from "react"


import PageTitle from "../../../subcomponents/PageTitle";
import postDataWithAxios from "../../../axios/MyPostAxios";


const URL_EDIT_POST_BASICS = process.env.REACT_APP_URL_EDIT_POST_BASICS;

class AddNewPostForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          title: '',
          subTitle: '',
          text: '',
          extraText: '',
        };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {    
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value    });
    }
    handleSubmit(event) {
      event.preventDefault();
      var title = this.state.title;
      var subTitle = this.state.subTitle;
      var text = this.state.text;
      var extraText = this.state.extraText;

      var self = this;

      postDataWithAxios(URL_EDIT_POST_BASICS, {
        postId: "newPost",
        title:title,
        subTitle:subTitle,
        text:text,
        extraText: extraText,
      }, function(data){
        self.setState({ post: data.post })
        self.setState({ updated: true })
        setTimeout(() => {
          self.setState({ updated: false })
        }, 3000);
      })

    }
  
    render() {
      return (
        <div className="MyContainer">
          <div className="MyTitle">
            <h1>Neuer Post</h1>
          </div>
          <div className="container mt-5">
            <form onSubmit={this.handleSubmit}>       
                <div className="row">
                  <label className="form-label" htmlFor="title">Titel:
                      <input onChange={ this.handleChange } name="title" placeholder="title" type="text" className="form-control" />
                  </label>
                </div>
                <div className="row">
                  <label className="form-label" htmlFor="subTitle">Untertitle:
                    <input onChange={ this.handleChange } name="subTitle" placeholder="subTitle" type="text" className="form-control" />
                  </label>
                </div>
                <div className="row">
                  <label className="form-label" htmlFor="text">Text:
                    <textarea rows="36" onChange={ this.handleChange } name="text" placeholder="text" type="text" className="form-control" />
                  </label>
                </div>
                <div className="row">
                  <label className="form-label" htmlFor="subTitle">Extra-Text:
                    <textarea rows="6" onChange={ this.handleChange } name="extraText" placeholder="extraText" type="text" className="form-control" />
                  </label>
                </div>
              <div className="row justify-content-end mt-3">
                <div className="col-3">
                  <div className="row">
                    <button className="btn btn-success" type="submit">eintragen</button>
                  </div>
                </div>
              </div>
            </form>
          </div>

        </div>
      );
    }
  }

export default AddNewPostForm;