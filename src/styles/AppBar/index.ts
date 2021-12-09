import styled from 'styled-components'

interface IAppBar {
    variant?: string,
    disabled?: boolean
}

const AppBar = styled.header<IAppBar>`
    display: flex;
    width: 100%;

    nav {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
        line-height: 56px;
        border-bottom: 1px solid ${props => props.theme.colors.border};
        background-color: ${props => props.theme.colors.navBar};
        color: ${props => props.theme.colors.onNavBar};
        backdrop-filter: blur(20px);
        padding: 0 16px;
        box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);

        @media (min-width : 960px) {
            padding: 0 24px;
        }

        a { color: ${props => props.theme.colors.onNavBar}; }

        .wrapper {
            position: relative;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            align-items: center;
            height: 56px;

            .sidenav-trigger {
                margin-right: 16px;
    
                @media (min-width : 960px) {
                    display: none;
                }
            }
    
            .logo {
                font-size: 2.1rem;
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-image: linear-gradient(
                    91.18deg,
                    ${props => props.theme.colors.blue} 26.63%,
                    ${props => props.theme.colors.cyan} 62.22%
                );
                margin-right: 16px;
    
                svg {
                    float: left;
                    margin-right: 12px;
                }
            }
    
            ul {
                list-style-type: none;
                padding: 0;

                li {
                    position: relative;
                    transition: background-color .3s;
                    float: left;
                }
                
                a {
                    transition: background-color .3s;
                    font-size: 1rem;
                    color: ${props => props.theme.colors.onNavBar};
                    display: flex;
                    padding: 0 16px;
                    cursor: pointer;

                    svg {
                        height: 56px;
                        line-height: 56px;
                        margin-right: 8px;
                        user-select: none;
                    }
            
                    &.button, &.button-outlined, &.button-raised, &.button-floating, &.button-large {
                        margin-left: 15px;
                        margin-right: 15px;
            
                        & > .material-icons {
                            height: inherit;
                            line-height: inherit;
                        }
                    }

                    &:hover {
                        opacity: 100% !important;

                        svg {
                            opacity: 100% !important;
                        }
                    }

                    .indicator {
                        background: ${props => props.theme.colors.onNavBar};
                        position: absolute;
                        width: auto;
                        height: 4px;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        margin: 0 16px;
                        transform: scaleY(0);
                        transform-origin: bottom;
                        transition: transform 235ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
                    }

                    &.active {
                        .indicator {
                            transform: scaleY(1);
                        }
                    }
                }

                &:hover {
                    a, a > svg {
                        opacity: 70%;
                    }
                }

                .slide {
                    background: ${props => props.theme.colors.onNavBar};
                    position: absolute;
                    width: 0;
                    height: 4px;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    transition: transform 235ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
                    z-index: -1;
                }
            }
    
            svg {
                color: ${props => props.theme.colors.onNavBar};
            }

            .spacer {
                flex-grow: 1;
            }
        }

        .content {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            min-height: 56px;

            .logo {
                font-size: 2.1rem;
                color: ${props => props.theme.colors.onNavBar};
                margin-right: 16px;
    
                svg {
                    float: left;
                    margin-right: 12px;
                }
            }

            .spacer {
                flex-grow: 1;
            }
        }
    }

    &.fixed {
        position: relative;
        height: 56px;
        z-index: 997;

        nav {
            position: fixed;
        }
    }

    &.extend {
        @media (max-width : 960px) {
            height: 112px;
        }
    }
`

export default AppBar