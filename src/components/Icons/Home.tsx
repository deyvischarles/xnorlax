import SvgIcon from '../../styles/SvgIcon'

interface IHome {
    color?: string,
    width?: string,
    height?: string,
    style?: object,
    className?: string
}

const Home: React.FC<IHome> = (props) => {
    return(
        <SvgIcon fill="currentColor" viewBox="0 0 24 24" focusable="false" aria-hidden="true" {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </SvgIcon>
    )
}

export default Home