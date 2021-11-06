import './App.scss';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Dashboard from "./components/Dashboard";
import Posts from "./components/posts/Posts";
import Navbar from './components/navbar/Navbar';
import AddNewPostForm from './components/posts/addpost/forms/AddNewPostForm';
import MyLogin from './components/login/MyLogin';


// tokens to sessionstorage
function setToken(userToken, userRefreshToken) {
  userToken = "Bearer " + userToken;
  sessionStorage.setItem('token', userToken);
  sessionStorage.setItem("refreshtoken", userRefreshToken)

}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = tokenString;
  return userToken
}


function App() {
  var token = getToken();
  return (
    token ?
    <Router>
      <Navbar>
      
        </Navbar>
      <Switch>
          <Route path="/login">
          <MyLogin loggedIn={false} setToken={setToken}/>
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/addnewpost">
            <AddNewPostForm />
            </Route>
          <Route path="">
            <Dashboard />
          </Route>
        </Switch>
   
    </Router>
    :
    <Router>
      <MyLogin loggedIn={false} setToken={setToken}/>
    </Router>
  );
}

export default App;
