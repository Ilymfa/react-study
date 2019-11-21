import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import './index.sass'

class Button extends Component{
    static propTypes = {
        type:PropTypes.string,
        size:PropTypes.string,
        disabled:PropTypes.bool,
        icon:PropTypes.string,
        onClick:PropTypes.func,
    }
    render(){
        let {
            type,
            size,
            disabled,
            icon,
            onClick,
            ...reset
        } = this.props
        return (
            <button className={`tt-btn  tt-btn-${type}`} {...reset}>submit</button>
        )
    }
}

export default Button