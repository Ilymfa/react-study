import React,{Component} from 'react';
import ReactDOM from "react-dom";
import loading from './loading'
import '../App.css'

class App extends Component {
    constructor(){
        super(...arguments)

    }
    render(){
        return(
            <div>
                app
            </div>
        )
    }

    componentDidMount(){
        loading.show();
        setTimeout(() => {
            loading.hide();
        }, 3000);
    }
}


export default App;