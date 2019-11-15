import React,{Component} from 'react'
import '../App.css'


class EventComponent extends Component {
    cb = {}
    on(name,cb){
        this.cb[name] = cb
    }
    off(name){
        delete this.cb[name]
    }
    trigger(name,arg){
        this.cb[name](arg);
    }
}

class App extends EventComponent {
    constructor(props){
        super(props)
        this.state = {
            value:''
        }
    }
    render(){
        return(
            <div>
                <input value={this.state.value} onChange={(e) => this.setState({value:e.target.value})}/>
                <button onClick={ () => {
                    this.trigger('add',this.state.value)
                    this.setState({
                        value:''
                    })
                }}>add</button>
                <button onClick={() => {
                    this.refs.list.clear();
                }}>clear list</button>
                <List ref='list'/>
            </div>
        )
    }
    componentDidMount(){
        window.app = this;
        var listInstance = this.refs.list;
        this.on('add', name => {
            listInstance.add(name);
        })
    }
}

class List extends EventComponent {
    constructor(props){
        super(props)
        this.state = {
            data:[
                {name:'a',id:'1'},
                {name:'b',id:'2'},
                {name:'c',id:'3'}
            ]
        }
    }
    render () {
        return(
            <div>
                {this.state.data.map( item => <p key={item.id}>{item.name}</p>)}
            </div>
        )
    }
    clear(){
        this.setState({
            data:[]
        })
    }
    add(name){
        let data = this.state.data
        data.push({
            name,
            id:name
        });
        this.setState({
            data
        })
    }
}

export default App;