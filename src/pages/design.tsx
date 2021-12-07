import { useState, useEffect } from 'react'
import Head from 'next/head'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

import Typography from '../styles/Typography'

import GitHub from '../components/Icons/GitHub'
import Linkedin from '../components/Icons/Linkedin'
import YouTube from '../components/Icons/YouTube'
import Instagram from '../components/Icons/Instagram'
import Facebook from '../components/Icons/Facebook'
import Whatsapp from '../components/Icons/Whatsapp'
import Telegram from '../components/Icons/Telegram'
import PlayStore from '../components/Icons/PlayStore'
import AccountCircle from '../components/Icons/AccountCircle'
import Api from '../components/Icons/Api'
import ArrowRightAlt from '../components/Icons/ArrowRightAlt'
import BugReport from '../components/Icons/BugReport'
import Code from '../components/Icons/Code'
import ContactSupport from '../components/Icons/ContactSupport'
import CreditCard from '../components/Icons/CreditCard'
import Dashboard from '../components/Icons/Dashboard'
import Delete from '../components/Icons/Delete'
import Description from '../components/Icons/Description'
import Done from '../components/Icons/Done'
import DoneAll from '../components/Icons/DoneAll'
import Event from '../components/Icons/Event'
import Extension from '../components/Icons/Extencion'
import Favorite from '../components/Icons/Favorite'
import FavoriteBorder from '../components/Icons/FavoriteBorder'
import FeedBack from '../components/Icons/FeedBack'
import FilterAlt from '../components/Icons/FilterAlt'
import Help from '../components/Icons/Help'
import Home from '../components/Icons/Home'
import Info from '../components/Icons/Info'
import Label from '../components/Icons/Label'
import Language from '../components/Icons/Language'
import Lightbulb from '../components/Icons/Lightbulb'
import TextField from '../components/TextField'
import Skeleton from '../styles/Skeleton'

import Button from '../styles/Button'
import IconButton from '../styles/IconButton'

const Design = () => {
    const codeSkeletonUse = 
`{loading ? (
    <Skeleton variant="rect" width={210} height={118} />
  ) : (
    <img style={{ width: 210, height: 118 }} alt={item.title} src={item.src} />
)}`

    const codeSkeletonVariants = 
`<Skeleton variant="text" />
<Skeleton variant="circle" width={50} height={50} />
<Skeleton variant="rect" width={210} height={118} />`

    const codeSkeletonAnimation = 
`<Skeleton variant="text" />
<Skeleton variant="text" animation="wave" />
<Skeleton variant="text" animation={false} />`

    const codeSkeletonDimension =
`<Typography variant="h1">
    {loading ? <Skeleton variant="text" /> : 'h1'}
</Typography>
...`

    const codeInportTypography =
`import Typography from '../styles/Typography'`

    const codeTypographyExample = 
`<Typography variant="body1">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Quos blanditiis tenetur...
</Typography>`

    const codeTypographySemantic = 
`{/ * Já existe um h1 na página, não vamos duplicá-lo. */}
<Typography variant="h1" component="h2">
    h1. Título
</Typography>`

    const codeSvgIcons = 
`import SvgIcon from '../../styles/SvgIcon'

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
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    )
}

export default Home`

    const codeInportIcons =
`import Home from 'components/icons/Home'
import Favorite from 'components/icons/Favorite'`

    const codeInplementIcons = 
`<Lightbulb />
<Lightbulb color="primary" />
<Lightbulb color="secondary" />
<Lightbulb color="disabled" />`

    const codeImplementButton = 
`<Button>Default</Button>
<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button disabled>Disabled</Button>
<Button href="#text-buttons" color="primary">Link</Button>`

    const codeImplementButtonContained = 
`<Button variant="contained">Default</Button>
<Button variant="contained" color="primary">Primary</Button>
<Button variant="contained" color="secondary">Secondary</Button>
<Button variant="contained" disabled>Disabled</Button>
<Button variant="contained" color="primary" href="#contained-buttons">Link</Button>`

    const codeImplementButtonOutlined = 
`<Button variant="outlined">Default</Button>
<Button variant="outlined" color="primary">Primary</Button>
<Button variant="outlined" color="secondary">Secondary</Button>
<Button variant="outlined" disabled>Disabled</Button>
<Button variant="outlined" color="primary" href="#outlined-buttons">Link</Button>`

    const codeTextField =
`import TextField from '../components/TextField'

export default function BasicTextFields() {
    return (
        <form>
            <TextField id="filled" label="Filled" />
            <TextField id="outlined" label="Outlined" variant="outlined" />
        </form>
    )
}`

    const ripple = (event) => {
        const button = event.target
        const ripple = document.createElement('span')

        ripple.classList.add('ripple')
        button.insertAdjacentElement('beforeend', ripple)

        const position = button.getBoundingClientRect()

        const top = Math.abs(position.top - event.clientY)
        const left = Math.abs(position.left - event.clientX)
        const scale = position.width

        ripple.style.setProperty('--top', `${top}px`)
        ripple.style.setProperty('--left', `${left}px`)
        ripple.style.setProperty('--scale', scale)
        ripple.style.setProperty('--opacity', '0.4')

        function clearEffect() {
            ripple.removeEventListener('transitionend', clearEffect)
            ripple.style.setProperty('--opacity', '0')

            ripple.addEventListener('transitionend', () => {
                ripple.remove()
            })
        }

        ripple.addEventListener('transitionend', clearEffect)



        // if(button.tagName.toLowerCase() !== 'button') {
        //     return false
        // } else {
        //     let rect = button.getBoundingClientRect()
        //     let ripple = button.querySelector('.ripple')

        //     if(!ripple) {
        //         ripple = document.createElement('span')
        //         ripple.className = 'ripple'
        //         ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px'
        //         button.appendChild(ripple)
        //     }

        //     ripple.classList.remove('show')
        //     let top = event.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop
        //     let left = event.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft

        //     ripple.style.top = top + 'px'
        //     ripple.style.left = left + 'px'
        //     ripple.classList.add('show')
        //     return false
        // }
    }

    // addEventListener('mousedown', ripple)

    return (
        <>
            <Head>
                <meta name="description" content="Nosso sistema de design"/>
                <meta name="keywords" content="xnorlax, design"/>
                <link rel="canonical" href={`${process.env.NEXT_PUBLIC_APP_URL}/design`} />
                <title>Xnorlax - Design</title>
            </Head>

            <main>
                <section>
                    <div className="container">
                        <Typography variant="h3" component="h1" className="mb2">Esqueleto</Typography>

                        <Typography variant="h5" component="p" className="mb2">
                            Exibe uma visualização do espaço reservado de seu conteúdo antes que os dados sejam carregados, reduzindo a sensação de lentidão do tempo de carregamento.
                        </Typography>

                        <Typography variant="body1" component="p" className="mb2">
                            Os dados dos seus componentes podem não estar imediatamente disponíveis. Você 
                            pode aumentar o desempenho percebido pelos usuários usando esqueletos. Ele passa 
                            a sensação de que as coisas estão acontecendo imediatamente, então a informação 
                            é mostrada incrementalmente na tela.
                        </Typography>

                        <Typography variant="body1" component="p">
                            O componente é projetado para ser usado diretamente em seus componentes. Por exemplo:
                        </Typography>

                        <SyntaxHighlighter language='tsx' style={false}>
                            {codeSkeletonUse}
                        </SyntaxHighlighter>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <Typography variant="h4" component="h2" className="mb2">
                            Variantes
                        </Typography>

                        <Typography variant="body1" component="p" className="mb2">
                            O componente suporta 3 variantes de forma.
                        </Typography>
                        
                        <div className="box outlined p2 r2">
                            <div className="item p1">
                                <Skeleton variant="text" width={210} animation="wave" className="mb1" />
                                <Skeleton variant="circle" width={50} height={50} animation="wave" className="mb1" />
                                <Skeleton variant="rect" width={210} height={118} animation="wave" />
                            </div>
                        </div>

                        <SyntaxHighlighter language='tsx' style={false}>
                            {codeSkeletonVariants}
                        </SyntaxHighlighter>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <Typography variant="h4" component="h2" className="mb2">
                            Animações
                        </Typography>

                        <Typography variant="body1" component="p" className="mb2">
                            Por padrão, o skeleton pulsa, mas você pode mudar a animação para uma onda ou 
                            desativá-la completamente.
                        </Typography>
                        
                        <div className="box outlined r2 p2">
                            <div className="item p1">
                                <Skeleton variant="text" width={210} className="mb1" />
                                <Skeleton variant="text" width={210} animation="wave" className="mb1" />
                                <Skeleton variant="text" width={210} animation={false} />
                            </div>
                        </div>

                        <SyntaxHighlighter language='tsx' style={false}>
                            {codeSkeletonAnimation}
                        </SyntaxHighlighter>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <Typography variant="h4" component="h2" className="mb2">
                            Inferindo dimensões
                        </Typography>

                        <Typography variant="body1" component="p" className="mb2">
                            Além de aceitar as propriedades <code>width</code> e <code>height</code>, o componente também pode inferir as dimensões.
                        </Typography>

                        <div className="grid outlined r2 p2 my2">
                            <div className="row mb2">
                                <div className="col sm6 p2">
                                    <Typography variant="h1" component="span" className="mb1">
                                        <Skeleton variant="text" />
                                    </Typography>
                                    <Typography variant="h3" component="span" className="mb1">
                                        <Skeleton variant="text" />
                                    </Typography>
                                    <Typography variant="body1" component="span" className="mb1">
                                        <Skeleton variant="text" />
                                    </Typography>
                                    <Typography variant="caption" component="span" className="mb1">
                                        <Skeleton variant="text" />
                                    </Typography>
                                </div>
                                <div className="col sm6 p2">
                                    <Typography variant="h1" component="span" className="mb1">
                                        H1    
                                    </Typography>
                                    <Typography variant="h3" component="span" className="truncate mb1">
                                        H3
                                    </Typography>
                                    <Typography variant="body1" component="span" className="mb1">
                                        Body 1
                                    </Typography>
                                    <Typography variant="caption" component="span" className="truncate mb1">
                                        Caption
                                    </Typography>
                                </div>
                            </div>
                        </div>

                        <SyntaxHighlighter language='tsx' style={false}>
                            {codeSkeletonDimension}
                        </SyntaxHighlighter>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <Typography variant="h3" component="h2" className="mb2">Tipografia</Typography>

                        <Typography variant="h5" component="p" className="mb2">
                            Use a tipografia para apresentar seu design e conteúdo da forma mais clara e eficiente possível.
                        </Typography>

                        <Typography variant="body1" component="p">
                            O uso de diferentes tamanhos e estilos de uma só vez pode estragar qualquer leiaute. Uma 
                            escala tipográfica tem um conjunto limitado de tipos de tamanhos que funcionam bem em conjunto 
                            com o leiaute de grade.
                        </Typography>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <Typography variant="h4" component="h2" className="mb2">Componente</Typography>

                        <div className="grid outlined r2 p2 mb2">
                            <Typography variant="h1" component="h2" className="gutterBottom truncate">H1</Typography>
                            <Typography variant="h2" className="gutterBottom">H2</Typography>
                            <Typography variant="h3" className="gutterBottom">H3</Typography>
                            <Typography variant="h4" className="gutterBottom">H4</Typography>
                            <Typography variant="h5" className="gutterBottom">H5</Typography>
                            <Typography variant="h6" className="gutterBottom">H6</Typography>
                            <Typography variant="subtitle1" component="span" className="gutterBottom">Subtitle 1</Typography>
                            <Typography variant="subtitle2" component="span" className="gutterBottom">Subtitle 2</Typography>
                            <Typography variant="body1" component="p" className="gutterBottom">Body 1</Typography>
                            <Typography variant="body2" component="p" className="gutterBottom">Body 2</Typography>
                            <Typography variant="button" className="gutterBottom">Button</Typography>
                            <Typography variant="caption" component="span" className="gutterBottom">Caption</Typography>
                            <Typography variant="overline" component="span" className="gutterBottom">Overline</Typography>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <Typography variant="h4" component="h2" className="mb2">Uso</Typography>

                        <Typography variant="body1" component="p">
                            Faça a importação do componente tipografico da seguinte forma:
                        </Typography>
                    
                        <SyntaxHighlighter language='tsx' style={false}>
                            {codeInportTypography}
                        </SyntaxHighlighter>
                    
                        <div className="box outlined r2 p2">
                            <Typography variant="body1" component="p">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Quos blanditiis tenetur...
                            </Typography>
                        </div>
                    
                        <SyntaxHighlighter language='tsx' style={false}>
                            {codeTypographyExample}
                        </SyntaxHighlighter>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <Typography variant="h4" component="h2" className="mb2">
                            Alterando o elemento semântico
                        </Typography>

                        <Typography variant="body1" component="p" className="mb2">
                            O componente de Tipografia (Typography) usa a propriedade <code>variant</code> para associar 
                            a variação da UI com um elemento semântico. É importante ressaltar que o estilo de uma 
                            tipografia é independente do elemento semântico por baixo dela.
                        </Typography>
                        
                        <ul>
                            <li>
                                Você pode alterar o elemento subjacente para uma ocasião em específico com a 
                                propriedade <code>component</code>:
                            </li>
                        </ul>

                        <SyntaxHighlighter language='tsx' style={false}>
                            {codeTypographySemantic}
                        </SyntaxHighlighter>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <Typography variant="h3" component="h2" className="mb2">
                            Grade
                        </Typography>

                        <Typography variant="h5" component="p" className="mb2">
                            O leiaute responsivo da grade se adapta ao tamanho e orientação da tela, garantindo a 
                            consistência entre leiautes.
                        </Typography>

                        <Typography variant="body1" component="p" className="mb2">
                            Uma grade cria consistência visual entre leiautes, enquanto permite flexibilidade em uma ampla 
                            variedade de projetos. Nossa UI responsiva é baseada em um leiaute de grade com 12 colunas.
                        </Typography>

                        <div className="row mb2">
                            <div className="col sm1 box surface outlined r2 py1">1</div>
                            <div className="col sm1 box surface outlined r2 py1">2</div>
                            <div className="col sm1 box surface outlined r2 py1">3</div>
                            <div className="col sm1 box surface outlined r2 py1">4</div>
                            <div className="col sm1 box surface outlined r2 py1">5</div>
                            <div className="col sm1 box surface outlined r2 py1">6</div>
                            <div className="col sm1 box surface outlined r2 py1">7</div>
                            <div className="col sm1 box surface outlined r2 py1">8</div>
                            <div className="col sm1 box surface outlined r2 py1">9</div>
                            <div className="col sm1 box surface outlined r2 py1">10</div>
                            <div className="col sm1 box surface outlined r2 py1">11</div>
                            <div className="col sm1 box surface outlined r2 py1">12</div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <Typography variant="h4" component="h3" className="mb2">
                            Grades Responsivos
                        </Typography>
                        
                        <Typography variant="body1" component="p" className="mb2">
                            No exemplo abaixo, nós tornamos o leiaute responsivo definindo quantas colunas a div 
                            deve ocupar em cada tamanho de tela. Tente redimensionar seu navegador e veja o 
                            leiaute abaixo se auto-ajustando.
                        </Typography>

                        <div className="row my2">
                            <div className="col sm12 box surface outlined r2 p1">SM12</div>
                        </div>

                        <div className="row mb2">
                            <div className="col sm12 md4 lg2 box surface outlined r2 p1">SM12 - MD4 - LG2</div>
                            <div className="col sm12 md4 lg8 box surface outlined r2 p1">SM12 - MD4 - LG8</div>
                            <div className="col sm12 md4 lg2 box surface outlined r2 p1">SM12 - MD4 - LG2</div>
                        </div>

                        <div className="row mb2">
                            <div className="col sm12 md6 lg3 box surface outlined r2 p1">SM12 - MD6 - LG3</div>
                            <div className="col sm12 md6 lg3 box surface outlined r2 p1">SM12 - MD6 - LG3</div>
                            <div className="col sm12 md6 lg3 box surface outlined r2 p1">SM12 - MD6 - LG3</div>
                            <div className="col sm12 md6 lg3 box surface outlined r2 p1">SM12 - MD6 - LG3</div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <Typography variant="h3" component="h2" className="mb2">
                            SvgIcon
                        </Typography>

                        <Typography variant="body1" component="p" className="mb2">
                            {`Nós padronizamos mais de 32 ícones de uso comun (veja abaixo). Para cada ícone SVG, 
                            exportamos o respectivo componente React presente no diretório "components/icons".`}
                        </Typography>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <Typography variant="h4" component="h3" className="mb2">Uso</Typography>

                        <Typography variant="body1" component="p">
                            Importe ícones usando as seguintes opções:
                        </Typography>

                        <SyntaxHighlighter language='tsx' style={false}>
                            {codeInportIcons}
                        </SyntaxHighlighter>

                        <div className="box nowrap outlined r2 p2">
                            <Lightbulb width="32" height="32" className="mx1" />
                            <Lightbulb width="32" height="32" color="primary" className="mx1"/>
                            <Lightbulb width="32" height="32" color="secondary" className="mx1"/>
                            <Lightbulb width="32" height="32" color="disabled" className="mx1"/>
                        </div>

                        <SyntaxHighlighter language='tsx' style={false}>
                            {codeInplementIcons}
                        </SyntaxHighlighter>

                        <div className="divider"/>
                    </div>
                    <div className="container px1">
                        <Typography variant="h5" component="h4" className="mx1 mb2">
                            Action
                        </Typography>
                        
                        <div className="row mb2">
                            <div className="col sm4 md2 p1">
                                <div className="box col nowrap outlined r2 p2">
                                    <AccountCircle width="32" height="32" className="mb1"/>
                                    <Typography variant="caption" component="p">AccountCircle</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p1">
                                <div className="box col nowrap outlined r2 p2">
                                    <Api width="32" height="32" className="mb1"/>
                                    <Typography variant="caption" component="p">Api</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p1">
                                <div className="box col nowrap outlined r2 p2">
                                    <ArrowRightAlt width="32" height="32" className="mb1"/>
                                    <Typography variant="caption" component="p">ArrowRightAlt</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p1">
                                <div className="box col nowrap outlined r2 p2">
                                    <BugReport width="32" height="32" className="mb1"/>
                                    <Typography variant="caption" component="p">BugReport</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p1">
                                <div className="box col nowrap outlined r2 p2">
                                    <Code width="32" height="32" className="mb1"/>
                                    <Typography variant="caption" component="p">Code</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p1">
                                <div className="box col nowrap outlined r2 p2">
                                    <ContactSupport width="32" height="32" className="mb1"/>
                                    <Typography variant="caption" component="p">ContactSupport</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p1">
                                <div className="box col nowrap outlined r2 p2">
                                    <CreditCard width="32" height="32" className="mb1"/>
                                    <Typography variant="caption" component="p">CreditCard</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p1">
                                <div className="box col nowrap outlined r2 p2">
                                    <Dashboard width="32" height="32" className="mb1"/>
                                    <Typography variant="caption" component="p">Dashboard</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p1">
                                <div className="box col nowrap outlined r2 p2">
                                    <Delete width="32" height="32" className="mb1"/>
                                    <Typography variant="caption" component="p">Delete</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p1">
                                <div className="box col nowrap outlined r2 p2">
                                    <Description width="32" height="32" className="mb1"/>
                                    <Typography variant="caption" component="p">Description</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p1">
                                <div className="box col nowrap outlined r2 p2">
                                    <Done width="32" height="32" className="mb1"/>
                                    <Typography variant="caption" component="p">Done</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p1">
                                <div className="box col nowrap outlined r2 p2">
                                    <DoneAll width="32" height="32" className="mb1"/>
                                    <Typography variant="caption" component="p">DoneAll</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p1">
                                <div className="box col nowrap outlined r2 p2">
                                    <Event width="32" height="32" className="mb1"/>
                                    <Typography variant="caption" component="p">Event</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p1">
                                <div className="box col nowrap outlined r2 p2">
                                    <Extension width="32" height="32" className="mb1"/>
                                    <Typography variant="caption" component="p">Extension</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p1">
                                <div className="box col nowrap outlined r2 p2">
                                    <Favorite width="32" height="32" className="mb1"/>
                                    <Typography variant="caption" component="p">Favorite</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p1">
                                <div className="box col nowrap outlined r2 p2">
                                    <FavoriteBorder width="32" height="32" className="mb1"/>
                                    <Typography variant="caption" component="p">FavoriteBorder</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p1">
                                <div className="box col nowrap outlined r2 p2">
                                    <FeedBack width="32" height="32" className="mb1"/>
                                    <Typography variant="caption" component="p">FeedBack</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p1">
                                <div className="box col nowrap outlined r2 p2">
                                    <FilterAlt width="32" height="32" className="mb1"/>
                                    <Typography variant="caption" component="p">FilterAlt</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p1">
                                <div className="box col nowrap outlined r2 p2">
                                    <Help width="32" height="32" className="mb1"/>
                                    <Typography variant="caption" component="p">Help</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p1">
                                <div className="box col nowrap outlined r2 p2">
                                    <Home width="32" height="32" className="mb1"/>
                                    <Typography variant="caption" component="p">Home</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p1">
                                <div className="box col nowrap outlined r2 p2">
                                    <Info width="32" height="32" className="mb1"/>
                                    <Typography variant="caption" component="p">Info</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p1">
                                <div className="box col nowrap outlined r2 p2">
                                    <Label width="32" height="32" className="mb1"/>
                                    <Typography variant="caption" component="p">Label</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p1">
                                <div className="box col nowrap outlined r2 p2">
                                    <Language width="32" height="32" className="mb1"/>
                                    <Typography variant="caption" component="p">Language</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p1">
                                <div className="box col nowrap outlined r2 p2">
                                    <Lightbulb width="32" height="32" className="mb1"/>
                                    <Typography variant="caption" component="p">Lightbulb</Typography>
                                </div>
                            </div>
                        </div>

                        <div className="divider mx1"/>

                        <Typography variant="h5" className="mx1 mb2">Logos</Typography>

                        <div className="row mb2">
                            <div className="col sm4 md2 p1">
                                <div className="box col nowrap outlined r2 p2">
                                    <GitHub className="mb1"/>
                                    <Typography variant="caption" component="p">GitHub</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p1">
                                <div className="box col nowrap outlined r2 p2">
                                    <Linkedin className="mb1"/>
                                    <Typography variant="caption" component="p">Linkedin</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p1">
                                <div className="box col nowrap outlined r2 p2">
                                    <YouTube className="mb1"/>
                                    <Typography variant="caption" component="p">YouTube</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p1">
                                <div className="box col nowrap outlined r2 p2">
                                    <Instagram className="mb1"/>
                                    <Typography variant="caption" component="p">Instagram</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p1">
                                <div className="box col nowrap outlined r2 p2">
                                    <Facebook className="mb1"/>
                                    <Typography variant="caption" component="p">Facebook</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p1">
                                <div className="box col nowrap outlined r2 p2">
                                    <Whatsapp className="mb1"/>
                                    <Typography variant="caption" component="p">Whatsapp</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p1">
                                <div className="box col nowrap outlined r2 p2">
                                    <Telegram className="mb1"/>
                                    <Typography variant="caption" component="p">Telegram</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p1">
                                <div className="box col nowrap outlined r2 p2">
                                    <PlayStore className="mb1"/>
                                    <Typography variant="caption" component="p">PlayStore</Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <Typography variant="body1" component="p">
                            {`Se você precisa customizar o ícone SVG (não disponível no conjunto padrão de ícones Material) 
                            você pode encapsular em um SvgIcon. Este componente estende o elemento nativo "svg":`}
                        </Typography>

                        <SyntaxHighlighter language='tsx' style={false}>
                            {codeSvgIcons}
                        </SyntaxHighlighter>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <Typography variant="h3" component="h2" className="mb2">Botão</Typography>

                        <Typography variant="h5" component="p" className="mb2">
                            Botões permitem que os usuários tomem ações e decisões com um simples toque.
                        </Typography>

                        <Typography variant="body1" component="p" className="mb2">
                            Botões comunicam ações que os usuários podem realizar. Eles são normalmente colocados em toda 
                            a interface do usuário, em lugares como:
                        </Typography>

                        <ul>
                            <li>
                                Caixa de diálogo
                            </li>
                            <li>
                                Janelas modais
                            </li>
                            <li>
                                Formulários
                            </li>
                            <li>
                                Cartões
                            </li>
                            <li>
                                Barras de ferramentas
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <Typography variant="h4" component="h2" className="mb2">
                            Botões de Texto
                        </Typography>

                        <Typography variant="body1" component="p" className="mb2">
                            Botões de texto são utilizados tipicamente para ações menos significativas, incluindo 
                            aquelas localizadas em:
                        </Typography>

                        <ul className="mb2">
                            <li>
                                Caixa de diálogo
                            </li>
                            <li>
                                Cartões
                            </li>
                        </ul>

                        <Typography variant="body1" component="p" className="mb2">
                            Em cartões, os botões de texto ajudam a manter a ênfase no conteúdo do cartão.
                        </Typography>
                        
                        <div className="box outlined p2 r2">
                            <Button className="m1">Default</Button>
                            <Button color="primary" className="m1">Primary</Button>
                            <Button color="secondary" className="m1">Secondary</Button>
                            <Button disabled className="m1">Disabled</Button>
                            <Button color="primary" className="m1">Link</Button>
                        </div>

                        <SyntaxHighlighter language='tsx' style={false}>
                            {codeImplementButton}
                        </SyntaxHighlighter>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <Typography variant="h4" component="h2" className="mb2">
                            Botões Contidos
                        </Typography>

                        <Typography variant="body1" component="p" className="mb2">
                            Botões Contidos tem alta ênfase, distinguem-se pelo uso de elevação e preenchimento. 
                            Eles contém as principais ações da sua aplicação.
                        </Typography>
                        
                        <div className="box outlined p2 r2">
                            <Button variant="contained" className="m1">Default</Button>
                            <Button variant="contained" color="primary" className="m1">Primary</Button>
                            <Button variant="contained" color="secondary" className="m1">Secondary</Button>
                            <Button variant="contained" disabled className="m1">Disabled</Button>
                            <Button variant="contained" color="primary" className="m1">Link</Button>
                        </div>

                        <SyntaxHighlighter language='tsx' style={false}>
                            {codeImplementButtonContained}
                        </SyntaxHighlighter>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <Typography variant="h4" component="h2" className="mb2">
                            Botões Delineados
                        </Typography>

                        <Typography variant="body1" component="p" className="mb2">
                            Botões delineados são botões com ênfase média. Eles contém ações que são importantes, 
                            mas não são as ações primárias de um aplicativo.
                        </Typography>

                        <Typography variant="body1" component="p" className="mb2">
                            Botões delineados são uma alternativa de menor ênfase comparado com botões contidos, 
                            ou uma alternativa de maior ênfase comparado com botões de texto.
                        </Typography>
                        
                        <div className="box outlined p2 r2">
                            <Button onClick={ripple} variant="outlined" className="m1">Default</Button>
                            <Button onClick={ripple} variant="outlined" color="primary" className="m1">Primary</Button>
                            <Button onClick={ripple} variant="outlined" color="secondary" className="m1">Secondary</Button>
                            <Button variant="outlined" disabled className="m1">Disabled</Button>
                            <Button onClick={ripple} variant="outlined" color="primary" className="m1">Link</Button>
                        </div>

                        <SyntaxHighlighter language='tsx' style={false}>
                            {codeImplementButtonOutlined}
                        </SyntaxHighlighter>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <Typography variant="h4" component="h2" className="mb2">
                            Botões de Ícones
                        </Typography>
                        
                        <div className="box outlined p2 r2">
                            <IconButton className="m1"><Home /></IconButton>
                            <IconButton color="primary" className="m1"><Home color="primary" /></IconButton>
                            <IconButton color="secondary" className="m1"><Home color="secondary" /></IconButton>
                            <IconButton disabled className="m1"><Home /></IconButton>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <Typography variant="h3" component="h2" className="mb2">Campo de texto</Typography>

                        <Typography variant="body1" component="p" className="mb2">
                            {`Campos de texto permitem que os usuários digitem e editem texto em uma interface de usuário.
                            Eles geralmente aparecem em formulários e diálogos.
                            Em nosso design system usamos dois tipos de campo de texto: "preenchido" e "delineado".`}
                        </Typography>

                        <div className="row">
                            <div className="box outlined r2 p2">
                                <div className="col sm12 md6 lg4">
                                    <TextField
                                        id="filed"
                                        type="text"
                                        label="Preenchido"
                                        className="m2"
                                    />
                                </div>
                                <div className="col sm12 md6 lg4">
                                    <TextField 
                                        id="outlined"
                                        type="text"
                                        label="Delineado"
                                        variant="outlined"
                                        className="m2"
                                    />
                                </div>
                            </div>
                        </div>

                        <SyntaxHighlighter language='tsx' style={false}>
                            {codeTextField}
                        </SyntaxHighlighter>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <Typography variant="h4" component="h3" className="mb2">Propriedades de formulário</Typography>
                        
                        <Typography variant="body1" component="p" className="mb2">
                            Os atributos padrões de formulários são suportados, por exemplo, required, disabled, type, etc.
                            assim como o helperText, que é utilizado para dar contexto sobre um campo de entrada, tal como, 
                            explicar como o campo deve ser preenchido.
                        </Typography>

                        <div className="row mb2">
                            <div className="box outlined r2 p2">
                                <div className="col sm12 md6 lg4">
                                    <TextField 
                                        id="defaultValue"
                                        type="text"
                                        label="Auto preenchido"
                                        defaultValue="Valor padrão"
                                        className="m2"
                                    />
                                </div>
                                <div className="col sm12 md6 lg4">
                                    <TextField 
                                        id="required"
                                        type="text"
                                        label="Obrigatório"
                                        required
                                        helpText="Este campo é obrigatório"
                                        className="m2"
                                    />
                                </div>
                                <div className="col sm12 md6 lg4">
                                    <TextField 
                                        id="disabled"
                                        type="text"
                                        label="Desativado"
                                        className="m2"
                                        disabled
                                    />
                                </div>
                                <div className="col sm12 md6 lg4">
                                    <TextField 
                                        id="defaultValueOutlined"
                                        type="text"
                                        label="Auto preenchido"
                                        defaultValue="Valor padrão"
                                        variant="outlined"
                                        className="m2"
                                    />
                                </div>
                                <div className="col sm12 md6 lg4">
                                    <TextField
                                        id="requiredOutlined"
                                        type="text"
                                        label="Obrigatório"
                                        required helpText="Este campo é obrigatório"
                                        variant="outlined"
                                        className="m2"
                                    />
                                </div>
                                <div className="col sm12 md6 lg4">
                                    <TextField
                                        id="disabledOutlined"
                                        type="text"
                                        label="Desativado"
                                        variant="outlined"
                                        className="m2"
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Design