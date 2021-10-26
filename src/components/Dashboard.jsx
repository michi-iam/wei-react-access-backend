import React from 'react';
import PageTitle from "./subcomponents/PageTitle";


class Dashboard extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      clicked: false,
    }

  }




    render () {
      return <div className='container'>
          <PageTitle firstLine = "Dashboard" />

      </div>
    }
  }

export default Dashboard;
  