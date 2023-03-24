import React, {useContext} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import { ThemeContext } from 'styled-components'

import AppBar from '../../styles/AppBar'
import IconButton from '../../styles/IconButton'
import MenuIcon from '../Icons/Menu'
import Brightness4 from '../Icons/Brightness4'
import Brightness7 from '../Icons/Brightness7'
import Xnorlax from '../Icons/Xnorlax'

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

                    <Link href="/" className="logo">
                        <Xnorlax width="36" height="36" color="primary" />
                        SystemGx
                    </Link>

                    <span className="spacer"></span>
                    
                    <ul className="hide-xs show-md">
                        <li><Link href="/design" className={isActive('/design')}>Design<span className="indicator"></span></Link></li>
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
                            <li><Link href="/design" className={isActive('/design')}>Design<span className="indicator"></span></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </AppBar>
    )
}

export default Navbar