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
        <div className="row border border-secondary p-2 border-1">
          <label className="form-label " htmlFor="poststatus">Status { this.state.poststatus ? <span className="text-success fw-bolder">"Aktiv"</span> : <span className="text-danger fw-bolder">"inaktiv"</span> }
            { this.state.poststatus === true ?  <input className="form-check-input ms-3" onChange={this.handleInputChange } type="checkbox" name="poststatus" id="poststatus" checked={ this.state.poststatus }/> :  <input className="form-check-input ms-3" onChange={ this.handleInputChange } type="checkbox" name="poststatus" id="poststatus" checked={ this.state.poststatus }/> } 
          </label>
        </div>
      );
    }
  }

export default StatusActive;


