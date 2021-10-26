import './App.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from "./components/Dashboard";

import Posts from "./components/posts/Posts";
import Navbar from './components/navbar/Navbar';
import AddNewPostForm from './components/posts/addpost/forms/AddNewPostForm';
function App() {
  return (
    <Router>
      <Navbar>
      
        </Navbar>
      <Switch>
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
  );
}

export default App;
