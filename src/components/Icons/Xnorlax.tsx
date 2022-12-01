import SvgIcon from '../../styles/SvgIcon'

interface IXnorlax {
    color?: string,
    width?: string,
    height?: string,
    style?: object,
    className?: string
}

const Xnorlax: React.FC<IXnorlax> = (props) => {
    return(
        <SvgIcon fill="currentColor" viewBox="0 0 24 24" focusable="false" aria-hidden="true" {...props}>
            <path d="M11,9v2h5l-3,4V13H8l3-4M11.5,7a.487.487,0,0,0-.395.2l-4.5,6A.5.5,0,0,0,7,14h5v2.5a.5.5,0,0,0,.505.5.487.487,0,0,0,.395-.2l4.5-6A.5.5,0,0,0,17,10H12V7.5A.5.5,0,0,0,11.5,7Z"/>
            <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm6.4,16.316c-.006,0-.008-.011-.014-.015l-2-1.5L18.5,14a.5.5,0,0,0-.8-.6l-2.407,3.2a.5.5,0,0,0,.1.7L17.649,19A8.992,8.992,0,0,1,5.6,5.684c.006,0,.008.011.014.015l2,1.505L5.5,10a.5.5,0,0,0,.8.6l2.407-3.2a.5.5,0,0,0-.1-.7L6.351,5A8.992,8.992,0,0,1,18.4,18.316Z"/>
        </SvgIcon>
    )
}

export default Xnorlax