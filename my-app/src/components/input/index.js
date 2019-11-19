import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

let node = null;
class Inp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value:'',
        }
    }
    render (){
        let {
            success
        } = this.props.data
        let data = this.props.data;
        return(
            <div>
                <div className="loading">
                    <div className="loading-mask"></div>
                    <div className="loading-body">
                        <input type="text" className="inp-txt mr10" value={this.state.value} onChange={(e) => {this.setState({value:e.target.value})}}/>
                        <button className="mr10"  onClick={ () => {
                            data.value = this.state.value;
                            success(data)
                            this.hide();
                        }}>add</button>
                        <button onClick={ () => {
                            this.hide();
                        }}>cancel</button>
                    </div>
                </div>

            </div>
        )
    }

    componentDidMount(){
        let value = this.props.data.value || ''
        console.log(this.props.value)
        this.setState({
            value
        })
    }

    show(obj){
        node = document.createElement("div")
        document.body.appendChild(node)
        ReactDom.render(<Inp data={obj}/>,node)

    }
    hide(){
        if(node){
            ReactDom.unmountComponentAtNode(node)
            document.body.removeChild(node)
        }
    }

}

export default new Inp()