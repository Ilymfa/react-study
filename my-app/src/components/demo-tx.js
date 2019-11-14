// 组件之间通信
import React,{Component} from 'react';

class App extends Component {
    render(){
       return (
           <div>
               <Clock
                time={12}
                onWakeUp={ () => {
                    alert('wake up')
                }}
                onSleep={ () => {
                    alert('sleep')
                }}
               />
           </div>
       )
    }
}


class Clock extends Component {
    render (){
        let {
            time,
            onWakeUp,
            onSleep
        } = this.props;
        if( time === 9 ){
            onWakeUp();
        }
        if( time === 21){
            onSleep();
        }
        return (
            <div onClick={ () => {
                alert(1)
            }}>
                clock
            </div>
        )
    }
}

export default App;
