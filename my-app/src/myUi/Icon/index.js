import React,{Component} from 'react'
import PropTypes from 'prop-types'
import '../../font/iconfont.css'

class Icon extends Component {
    static propTypes = {
        name:PropTypes.string
    }
    static defaultProps = {
        name:'t'
    }
     render(){
         let {
             name,
             ...reset
         } = this.props
         return(
             <span {...reset} className={`icon iconfont icon-${name}`}></span>
         )
     }
}

export default Icon