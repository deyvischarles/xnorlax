import SvgIcon from '../../styles/SvgIcon'

interface IDashboard {
    color?: string,
    width?: string,
    height?: string,
    style?: object,
    className?: string
}

const Dashboard: React.FC<IDashboard> = (props) => {
    return(
        <SvgIcon fill="currentColor" viewBox="0 0 24 24" focusable="false" aria-hidden="true" {...props}>
            <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
        </SvgIcon>
    )
}

export default Dashboard