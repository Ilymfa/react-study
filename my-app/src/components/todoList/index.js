import React,{Component} from 'react'
import './index.css'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[
                {id:1,content:"6点起床"},
                {id:2,content:"8点出门"},
                {id:2,content:"9点打卡"}
            ]
        }
    }
    render(){
        return (
            <div className="todo-list-box">
                <Action/>
                <List
                    list={this.state.data}
                    onDelete={ (index) => {
                        let data = this.state.data;
                        data.splice(index,1)
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
        return (
            <div className="todo-header">
                Todo List
                <button className="add-btn">add</button>
            </div>
        )
    }
}

class List extends Component {
    render(){
        let {
            list,
            onDelete
        } = this.props
        return(
            <div className="todo-list">
                {list.map((item,index) => (
                    <div key={index} className="todo-list-item">
                        <p>{item.content}</p>
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