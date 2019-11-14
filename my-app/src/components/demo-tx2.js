import React,{Component} from 'react'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[
                {name:'a',id:1},
                {name:'b',id:2},
                {name:'c',id:3},
            ],
            value:''
        }
    }
    render(){
        return(
            <div>
                <Action onAdd={(name) => {
                    let {data} = this.state;
                    data.push({
                        name,
                        id:name
                    });
                    this.setState({
                        data
                    })
                }}/>
                <List data={ this.state.data }/>
            </div>
        )
    }
}

class Action extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:''
        }
    }
    render(){
        return(
            <div>
                <input value={this.state.value} onChange={(e) => this.setState({value:e.target.value})}/>
                <button onClick={() => {
                    this.props.onAdd(this.state.value);
                    this.setState({
                        value:''
                    })
                }}> add </button>
            </div>
        )
    }
}

class List extends Component {
    render(){
        return(
            <div>
                {this.props.data.map( item => {return <p key={item.id}>{item.name}</p>})}
            </div>
        )
    }
}

export default App;