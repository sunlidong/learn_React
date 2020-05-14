import React from 'react'
import Search from './search'
import UserList from './user-list'


export default class App extends React.Component{
    state = {
        searchName:''
    }

        refreshName = (searchaName) =>this.setState({searchaName})

    // redner()
    render(){
        return (
            <div className="container">
                <section className="jumbotron">
                    <h2 className="jumbotron-heading">Search Github</h2>
                    <Search refreshName={this.refreshName}/>
                </section>
                <UserList searchName={this.state.searchName}/>
            </div>
        )
    }
}