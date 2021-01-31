import React from 'react'
import SvgIcon from '../../styles/SvgIcon'

interface IDelete {
    color?: string,
    width?: string,
    height?: string,
    style?: object,
    className?: string
}

const Delete: React.FC<IDelete> = (props) => {
    return(
        <SvgIcon fill="currentColor" viewBox="0 0 24 24" focusable="false" aria-hidden="true" {...props}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
        </SvgIcon>
    )
}

export default Delete