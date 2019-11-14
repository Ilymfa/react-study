//生命周期

import React,{Component} from 'react';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'react'
        }
    }
    render (){
        console.log("App render")
        return (
            <div>
                {this.state.name}
                {this.state.name && <Son name={this.state.name + '-son'}/>}
            </div>

        )
    }
    componentDidMount(){
        window.app = this;
        console.log("App mount")
    }
    componentWillUpdate(){
        console.log("App Will Update")
    }
    componentDidUpdate(){
        console.log("App did Update")
    }
    componentWillUnmount(){
        console.log("App did UnMount")
    }
}

class Son extends Component {
    render (){
        console.log("son render")
        return (
            <div>
                {this.props.name}
                <GrandSon name={this.props.name + '-GrandSon'}/>
            </div>
        )
    }
    componentDidMount(){
        console.log("son mount")
    }
    componentWillUpdate(){
        console.log("Son Will Update")
    }
    componentDidUpdate(){
        console.log("Son did Update")
    }
    componentWillUnmount(){
        console.log("Son did UnMount")
    }
}

class GrandSon extends Component {
    render (){
        console.log("GrandSon render")
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
    componentDidMount(){
        console.log("GrandSon mount")
    }
    componentWillUpdate(){
        console.log("GrandSon Will Update")
    }
    componentDidUpdate(){
        console.log("GrandSon did Update")
    }
    componentWillUnmount(){
        console.log("GrandSon did UnMount")
    }
}
export default App;
