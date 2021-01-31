import React from 'react'
import SvgIcon from '../../styles/SvgIcon'

interface IApi {
    color?: string,
    width?: string,
    height?: string,
    style?: object,
    className?: string
}

const Api: React.FC<IApi> = (props) => {
    return(
        <SvgIcon fill="currentColor" viewBox="0 0 24 24" focusable="false" aria-hidden="true" {...props}>
            <path d="M14,12l-2,2l-2-2l2-2L14,12z M12,6l2.12,2.12l2.5-2.5L12,1L7.38,5.62l2.5,2.5L12,6z M6,12l2.12-2.12l-2.5-2.5L1,12 l4.62,4.62l2.5-2.5L6,12z M18,12l-2.12,2.12l2.5,2.5L23,12l-4.62-4.62l-2.5,2.5L18,12z M12,18l-2.12-2.12l-2.5,2.5L12,23l4.62-4.62 l-2.5-2.5L12,18z"/>
        </SvgIcon>
    )
}

export default Api