import React from "react"

import postDataWithAxios from "../../../../axios/MyPostAxios";


const URL_TOGGLE_POST_ACTIVE = process.env.REACT_APP_URL_TOGGLE_POST_ACTIVE

class StatusActive extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          post: this.props.post,
          poststatus: this.props.post.active,
        };

      this.handleInputChange = this.handleInputChange.bind(this);
    }


    componentDidMount(){
        this.setState({ poststatus: this.props.post.active })
    }


    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value    });
          var postId = this.state.post.id
          var self = this;

          postDataWithAxios(URL_TOGGLE_POST_ACTIVE,{
            postId: postId,
            active:value,
          }, function(data){
            self.setState({ post: data.post })
            self.setState({ poststatus: data.post.active })
          })


      }


    render() {
      return (  
        <label htmlFor="poststatus">Status { this.state.poststatus ? "Aktiv" : "inaktiv" }
            { this.state.poststatus === true ?  <input onChange={this.handleInputChange } type="checkbox" name="poststatus" id="poststatus" checked={ this.state.poststatus }/> :  <input onChange={ this.handleInputChange } type="checkbox" name="poststatus" id="poststatus" checked={ this.state.poststatus }/> } 
        </label>
      );
    }
  }

export default StatusActive;


