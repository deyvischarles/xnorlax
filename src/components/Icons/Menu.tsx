import SvgIcon from '../../styles/SvgIcon'

interface IMenu {
    color?: string,
    width?: string,
    height?: string,
    style?: object,
    className?: string
}

const Menu: React.FC<IMenu> = (props) => {
    return(
        <SvgIcon fill="currentColor" viewBox="0 0 24 24" focusable="false" aria-hidden="true" {...props}>
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        </SvgIcon>
    )
}

export default Menu