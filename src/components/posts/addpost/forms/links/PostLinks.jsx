import React from "react"
import axios from "axios";

const URL_REMOVE_LINK_FROM_POST = process.env.REACT_APP_URL_REMOVE_LINK_FROM_POST
const URL_ADD_LINK_TO_POST = process.env.REACT_APP_URL_ADD_LINK_TO_POST
const TOKEN = process.env.REACT_APP_AUTH_TOKEN;
const URL_ADD_NEW_LINK = process.env.REACT_APP_URL_ADD_NEW_LINK;
const URL_GET_AVAILABLE_LINKS = process.env.REACT_APP_URL_GET_AVAILABLE_LINKS
class PostLinks extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          post: this.props.post,
          postLinks: this.props.post.links,
          availableLinks: [],
          newLinkName:"",
          newLinkHref:"",

        };
        this.addLinkToPost = this.addLinkToPost.bind(this);
        this.removeLinkFromPost = this.removeLinkFromPost.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    componentDidMount() {
      axios.get(URL_GET_AVAILABLE_LINKS, {params: { postId: this.state.post.id }})
      .then(response => {
      this.setState({ availableLinks: response.data.availableLinks})


      })
    }

    // Add new Link
    handleChange = (event) => {
      const {name, value} = event.target
    
      this.setState({
        [name]: value,
      })
    }
    handleSubmit(event) {
        event.preventDefault();
        var postId = this.state.post.id
        var newLinkHref = this.state.newLinkHref
        var newLinkName = this.state.newLinkName

        var self = this;
        axios.defaults.headers.common["Authorization"] = TOKEN; // doesn't work (401)
        axios.post(URL_ADD_NEW_LINK, {
          postId: postId,
          newLinkHref: newLinkHref,
          newLinkName: newLinkName,
  
        })
        .then(function (response) {
          self.setState({ post: response.data.post })
          self.setState({ postLinks: response.data.postLinks })
          self.setState({ newLinkHref: "" })
          self.setState({ newLinkName: "" })
    
    
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    removeLinkFromPost(event, link) {

      event.preventDefault();
      var postId = this.state.post.id
      var linkId = link.id
      var self = this;
      axios.defaults.headers.common["Authorization"] = TOKEN; 
      axios.post(URL_REMOVE_LINK_FROM_POST, {
        postId: postId,
        linkId: linkId,
      })
      .then(function (response) {
        self.setState({ post: response.data.post })
        self.setState({ postLinks: response.data.postLinks })
        self.setState({ availableLinks: response.data.availableLinks })
      

      })
      .catch(function (error) {
        console.log(error);
      });
  }


  addLinkToPost(event) {
    var name = event.target.name;
    var value = event.target.value;
    this.setState({
        [name]: value    });
      
      var linkToAddId = value;
      var postId = this.state.post.id;
      
      var self = this;
      axios.defaults.headers.common["Authorization"] = TOKEN; // doesn't work (401)
      axios.post(URL_ADD_LINK_TO_POST, {
        postId: postId,
        linkToAddId: linkToAddId,

      })
      .then(function (response) {
        self.setState({ post: response.data.post })
        self.setState({ postLinks: response.data.postLinks })
        self.setState({ availableLinks: response.data.availableLinks })

      })
      .catch(function (error) {
        console.log(error);
      });
  }

    render() {
        var postLinks = this.state.postLinks;
        var availableLinks = this.state.availableLinks
        var self = this;
        return (  
        <div className="row">
            <div className="row">
                <div className="row">
                    <h4>Links</h4>
                </div>
                {Object.keys(postLinks).map(function(keyName, keyIndex){
                return <div className="row" key={ keyIndex }>
                        <div className="row">
                            <div className="col-5">
                                { postLinks[keyName].name }
                            </div>
                            <div className="col-6">
                                { postLinks[keyName].href }
                            </div>
                            <div className="col-1">
                                <form onSubmit={event => self.removeLinkFromPost( event, postLinks[keyName] ) }>
    
                                    <button type="submit">remove</button>
                                </form>
                            </div>
                        </div>
                    </div>
                })}
            </div>
            <div className="row">
              <div className="row">
                <h4>Links hinzufügen</h4>
              </div>
              <div className="row">
                <label className="form-label" htmlFor="linkToAddId">Verfügbare Links:
                    <select className="form-select" onChange={event => this.addLinkToPost(event) } name="linkToAddId" id="linkToAddId">
                        <option ></option>
                      { availableLinks.map((availableLink)=>{
                        return <option key={ availableLink.id} value={ availableLink.id }>{availableLink.name}</option>
                      })}
                    </select>
            
                </label>
              </div>
            </div>
            <div className="row">
                <form onSubmit={ this.handleSubmit }>
                  <div className="row">
                    <h4>Neuen Link eintragen</h4>
                  </div>
                <div className="row">
                    <label className="form-label" htmlFor="newLinkHref">Url
                        <input className="form-control" onChange={ this.handleChange } name="newLinkHref" type="text" placeholder="href" />
                    </label>  
                </div>
                <div className="row">
                    <label className="form-label" htmlFor="newLinkName">Link-Name
                        <input className="form-control" onChange={ this.handleChange } name="newLinkName" type="text" placeholder="Link-Name" />
                    </label>
                </div>
          
                    <button type="submit">hinzufügen</button>
                 
                </form>
            </div>
        </div>
      );
    }
  }

export default PostLinks;

