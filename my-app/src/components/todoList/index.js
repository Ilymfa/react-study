import React,{Component} from 'react'
import './index.css'
import inp from '../input'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[
                {id:1,content:"6点起床"},
                {id:2,content:"8点出门"},
                {id:3,content:"9点打卡"}
            ]
        }
    }
    render(){
        return (
            <div className="todo-list-box">
                <Action addItem={ (info) => {
                    let data = this.state.data;
                    data.push({
                        content:info.value,
                        id:data.length+1
                    })
                    this.setState({
                        data
                    })
                }}/>
                <List
                    list={this.state.data}
                    onDelete={ (index) => {
                        let data = this.state.data;
                        data.splice(index,1)
                        this.setState({
                            data
                        })
                    }}
                    editItem={ (info) => {
                        let data = this.state.data;
                        data[info.index].content = info.value;
                        this.setState({
                            data
                        })
                    }}
                />
            </div>
        )
    }

}

class Action extends Component {
    render(){
        let {
            addItem
        } = this.props;
        return (
            <div className="todo-header">
                Todo List
                <button className="add-btn mt15 right" onClick={() => {
                    inp.show({success:addItem})
                }}>add</button>
            </div>
        )
    }
}

class List extends Component {
    render(){
        let {
            list,
            onDelete,
            editItem
        } = this.props
        return(
            <div className="todo-list">
                {list.map((item,index) => (
                    <div key={index} className="todo-list-item">
                        <p onClick={() => {
                            inp.show({value:item.content,success:editItem,index})
                        }}>{item.content}</p>
                        <button onClick={(e) => {
                            onDelete(index);
                        }}>删除</button>
                    </div>
                ) )}
            </div>
        )
    }
}


export default TodoList