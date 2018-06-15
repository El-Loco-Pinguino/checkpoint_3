import React, { Component } from "react"

class ListElement extends Component {
  constructor(props) {
    super(props)
    this.state = {status: this.props.status, definedClass: this.props.status === "dead" ? "eliminated" : "" }
  }
  render() {
    return <tr className={this.state.definedClass}>
      <td><h1>{ this.props.name }</h1></td>
      <td><h2>{ this.state.status === "alive" ? "Vivant" : "Vaincu"}</h2></td>
      <td><img src={ this.props.image } alt={ this.props.name}/></td>
      <td>{ this.state.status === "alive" ? <button onClick={ this.claimDied.bind(this) }>Déclarer comme vaincu</button> : "" }</td>
    </tr>
  }
  claimDied() {
    this.setState({
      status: "dead",
      definedClass: "eliminated"
    })
  }
}

export default ListElement