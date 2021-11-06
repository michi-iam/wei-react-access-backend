import React from 'react';
import MyLink from './subcomponents/MyLink';


class Dashboard extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      clicked: false,
    }

  }




    render () {
      return <div className='MyContainer'>
          <div className="MyTitle">
            <h1>Dashboard</h1>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-12 col-lg-6">
              <div className="row">
              { MyLink("/posts", "Posts", "btn btn-link text-textColor1") }
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-12 col-lg-6">
                <div className="row">
                { MyLink("/addnewpost", "Neuer Post", "btn btn-link text-textColor1") }
                </div>
              </div>
            </div>
      </div>
    }
  }

export default Dashboard;
  