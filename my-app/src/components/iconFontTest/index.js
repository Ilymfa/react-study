import React,{Component} from 'react'
import '../../font/iconfont.css'
import Icon from  '../../myUi/Icon'


class IconFont extends Component {
    render(){
        return (
            <div>
                <span className="icon iconfont icon-pic"></span>
                <Icon name="delete" />
            </div>
        )
    }
}

export default IconFont