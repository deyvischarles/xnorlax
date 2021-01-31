import React from 'react'
import SvgIcon from '../../styles/SvgIcon'

interface IFeedBack {
    color?: string,
    width?: string,
    height?: string,
    style?: object,
    className?: string
}

const FeedBack: React.FC<IFeedBack> = (props) => {
    return(
        <SvgIcon fill="currentColor" viewBox="0 0 24 24" focusable="false" aria-hidden="true" {...props}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/>
        </SvgIcon>
    )
}

export default FeedBack