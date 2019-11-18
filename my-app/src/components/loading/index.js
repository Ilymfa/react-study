import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Loading extends Component {
    constructor(props){
        super(props);
        this.node = null;
    }
    render(){
        return(
            <div className="loading">
                <div className="loading-mask"></div>
                <div className="loading-body">loading...</div>
            </div>
        )
    }
    show(){
        this.node = document.createElement('div')
		document.body.appendChild(this.node)
		ReactDOM.render(<Loading />, this.node)
    }
    hide(){
        if(this.node){
            ReactDOM.unmountComponentAtNode(this.node);
            document.body.removeChild(this.node);
        }
    }
}

export default new Loading();