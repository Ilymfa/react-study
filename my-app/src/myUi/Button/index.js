import React,{Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Icon from '../Icon'
import './index.sass'

class Button extends Component{
    static propTypes = {
        type:PropTypes.string,
        size:PropTypes.string,
        icon:PropTypes.string,
        onClick:PropTypes.func,
    }

    static defaultProps = {
        // disabled:false,
    }
    render(){
        let {
            type,
            size,
            icon,
            children,
            ...reset
        } = this.props
        let cls = classnames({
            'tt-btn':true,
            [`tt-btn-${type}`]:type != undefined,
            'ant-btn-lg':size === 'large'
        })
        return (
            <button className={cls} {...reset}>
                <Icon name={icon}/>
                {children}
            </button>
        )
    }
}

export default Button