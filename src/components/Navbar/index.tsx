import React, {useContext} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import { ThemeContext } from 'styled-components'

import AppBar from '../../styles/AppBar'
import IconButton from '../../styles/IconButton'
import MenuIcon from '../Icons/Menu'
import Brightness4 from '../Icons/Brightness4'
import Brightness7 from '../Icons/Brightness7'

interface INavbar {
    toggleTheme(): void
}

const Navbar: React.FC<INavbar> = ({toggleTheme}) => {
    const { title } = useContext(ThemeContext)
    const router = useRouter()

    function isActive(route: string) {
        return route === router.pathname ? 'active' : ''
    }

    return (
        <AppBar className="fixed extend">
            <nav className="">
                <div className="wrapper">
                    <IconButton aria-label="Abrir menu lateral" data-target="slide-out" className="sidenav-trigger edgeStart hide-xs">
                        <MenuIcon/>
                    </IconButton>
                    
                    <Link href="/"><a className="logo">Xnorlax</a></Link>

                    <span className="spacer"></span>
                    
                    <ul className="hide-xs show-md">
                        <li><Link href="/blog"><a className={isActive('/blog')}>Blog<span className="indicator"></span></a></Link></li>
                        <li><Link href="/design"><a className={isActive('/design')}>Design<span className="indicator"></span></a></Link></li>
                        <li><Link href="/laboratory"><a className={isActive('/laboratory')}>Laboratório<span className="indicator"></span></a></Link></li>
                    </ul>

                    <ul className="space">
                        <li>
                            <IconButton aria-label="Alternar o tema Dark e Light" onClick={toggleTheme} className="edgeEnd">
                                {title === 'Light' ? <Brightness4/> : <Brightness7/>}
                            </IconButton>
                        </li>
                    </ul>
                </div>
                <div className="content hide-md">
                    <div className="wrapper">
                        <ul>
                            <li><Link href="/blog"><a className={isActive('/blog')}>Blog<span className="indicator"></span></a></Link></li>
                            <li><Link href="/design"><a className={isActive('/design')}>Design<span className="indicator"></span></a></Link></li>
                            <li><Link href="/laboratory"><a className={isActive('/laboratory')}>Laboratório<span className="indicator"></span></a></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </AppBar>
    )
}

export default Navbar