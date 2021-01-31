import React from 'react'
import SvgIcon from '../../styles/SvgIcon'

interface IArrowBack {
    color?: string,
    width?: string,
    height?: string,
    style?: object,
    className?: string
}

const ArrowBack: React.FC<IArrowBack> = (props) => {
    return(
        <SvgIcon fill="currentColor" viewBox="0 0 24 24" focusable="false" aria-hidden="true" {...props}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </SvgIcon>
    )
}

export default ArrowBack