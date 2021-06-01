import React, { Component } from 'react'
export default class GifSearch extends Component {
    
    state = {
        search: ""
    }

    handleChange = (event) => {
         this.setState(
            {
                search: event.target.value
            }
        )
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.fetchGifs(this.state.search)
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="text" value={this.state.search}></input>
                <input type="submit"></input>
            </form>
        )
    }
}
  