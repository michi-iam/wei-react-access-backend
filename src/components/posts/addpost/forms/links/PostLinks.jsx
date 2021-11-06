import React from "react"


import postDataWithAxios from "../../../../axios/MyPostAxios";
import getDataWithAxios from "../../../../axios/MyGetAxios";

const URL_REMOVE_LINK_FROM_POST = process.env.REACT_APP_URL_REMOVE_LINK_FROM_POST;
const URL_ADD_LINK_TO_POST = process.env.REACT_APP_URL_ADD_LINK_TO_POST;
const URL_ADD_NEW_LINK = process.env.REACT_APP_URL_ADD_NEW_LINK;
const URL_GET_AVAILABLE_LINKS = process.env.REACT_APP_URL_GET_AVAILABLE_LINKS;


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
      var self = this;
      getDataWithAxios(URL_GET_AVAILABLE_LINKS, function(data){
        self.setState({ availableLinks: data.availableLinks})
      }, {params: { postId: this.state.post.id }})

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

        postDataWithAxios(URL_ADD_NEW_LINK, {
          postId: postId,
          newLinkHref: newLinkHref,
          newLinkName: newLinkName,
        }, function(data){
          self.setState({ post: data.post,
            postLinks: data.postLinks,
            newLinkHref: "",
            newLinkName: ""
          })
        })


    }

    removeLinkFromPost(event, link) {
      event.preventDefault();
      var postId = this.state.post.id
      var linkId = link.id
      var self = this;

      postDataWithAxios(URL_REMOVE_LINK_FROM_POST, {
        postId: postId,
        linkId: linkId,
      }, function(data){
        self.setState({ post:data.post,
          postLinks:data.postLinks,
          availableLinks:data.availableLinks
        })
      })

  }


  addLinkToPost(event) {
    var name = event.target.name;
    var value = event.target.value;
    this.setState({ [name]: value });
      
      var linkToAddId = value;
      var postId = this.state.post.id;
      
      var self = this;

      postDataWithAxios(URL_ADD_LINK_TO_POST, {
        postId: postId,
        linkToAddId: linkToAddId,
      }, function(data){
        self.setState({ post: data.post,
          postLinks: data.postLinks,
          availableLinks: data.availableLinks
        })
      })


  }

    render() {
        var postLinks = this.state.postLinks;
        var availableLinks = this.state.availableLinks
        var self = this;
        return (  
        <div className="row pb-5">
            <div className="row">
            <div className="row">
              <h3 className="bg-secondary p-2 rounded">Links</h3>
            </div>
                {Object.keys(postLinks).map(function(keyName, keyIndex){
                return <div className="row" key={ keyIndex }>
                        <div className="row mt-2">
                            <div className="col-5">
                                { postLinks[keyName].name }
                            </div>
                            <div className="col-6">
                                { postLinks[keyName].href }
                            </div>
                            <div className="col-1">
                                <form onSubmit={event => self.removeLinkFromPost( event, postLinks[keyName] ) }>
                                    <button className="btn btn-danger" type="submit">remove</button>
                                </form>
                            </div>
                        </div>
                    </div>
                })}
            </div>
            <div className="row mt-5">
            <div className="row">
              <h3 className="bg-secondary p-2 rounded">Links zum Post hinzufügen</h3>
            </div>
              <div className="row mt-2">
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
            <div className="row mt-5">
            <div className="row mt-2">
              <h3 className="bg-secondary p-2 rounded">Neuen Link eintragen</h3>
            </div>
                <div className="row">
                  <form onSubmit={ this.handleSubmit }>
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
                      <div className="row justify-content-end">
                        <div className="col-3">
                          <div className="row text-end">
                          <button className="btn btn-success" type="submit">hinzufügen</button>
                          </div>
                        </div>
                      </div>
                    </form>
                </div>
            </div>
        </div>
      );
    }
  }

export default PostLinks;


