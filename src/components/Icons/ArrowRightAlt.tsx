import SvgIcon from '../../styles/SvgIcon'

interface IArrowRightAlt {
    color?: string,
    width?: string,
    height?: string,
    style?: object,
    className?: string
}

const ArrowRightAlt: React.FC<IArrowRightAlt> = (props) => {
    return(
        <SvgIcon fill="currentColor" viewBox="0 0 24 24" focusable="false" aria-hidden="true" {...props}>
            <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"/>
        </SvgIcon>
    )
}

export default ArrowRightAlt