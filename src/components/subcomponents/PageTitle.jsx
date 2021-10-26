import React from 'react';


class PageTitle extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            firstLine: "Herzlich willkommen",
            secondLine: "im",
            thirdLine: "Komponentenname"
        }
      }

      componentDidMount() {
          this.setState({ firstLine: this.props.firstLine })
          this.setState({ secondLine: this.props.secondLine })
          this.setState({ thirdLine: this.props.thirdLine })
      }
      
    render () {
      return <div>
        <h1>{ this.state.firstLine }</h1>
        <h4>{ this.state.secondLine }</h4>
        <h1>{ this.state.thirdLine }</h1>
      </div>
    }
  }

export default PageTitle;