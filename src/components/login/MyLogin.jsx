import React from 'react';


import { Redirect } from 'react-router';


import postDataWithAxios from "../axios/MyPostAxios";



const URL_OBTAIN_TOKEN = process.env.REACT_APP_URL_OBTAIN_TOKEN;


class MyLogin extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            loggedIn: this.props.loggedIn,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
      }
      handleChange(event) {    
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value    });
    }

    // get tokens
    handleSubmit(event) {
        event.preventDefault();
        var username = this.state.username;
        var password = this.state.password;
        console.log(username)
        console.log(password)

        var self = this;
        postDataWithAxios(URL_OBTAIN_TOKEN, {
          username: username,
          password: password,
        }, function(data){
          self.props.setToken(data.access, data.refresh) // pass to app.js
          self.setState({ loggedIn: true })
          window.location.reload(false);
        }, function(){
          self.setState({ loggedIn: false })
        })
  
      }

      render(){
          return(
             this.state.loggedIn ? <Redirect to="/" /> :
             <div className="container">
              <div className="row bg-gray p-3 shadow-lg rounded text-light mb-4 text-center mt-5">
                <h3>Login</h3>
              </div>
             <div className="row mt-5 justify-content-center">
             <div className="col-8">
             <form onSubmit={ this.handleSubmit }>
                 <input className="form-control mt-5 mb-2" onChange={ this.handleChange } name="username" type="text" placeholder="username" />
                 <input className="form-control" onChange={ this.handleChange } name="password" type="password" placeholder="passwort" />
                 <div className="row mt-2 justify-content-end">
                   <div className="col-auto">
                   <button className="btn btn-success" type="submit">login</button>
                   </div>
                 </div>
             </form>
             </div>
             </div>
         </div>
          )
      }
}


export default MyLogin;