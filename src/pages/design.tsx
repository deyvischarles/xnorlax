import Head from 'next/head'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import Typography from '../styles/Typography';

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

const Design = () => {
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
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </SvgIcon>
    )
}

export default Home`

    const codeInportIcons =
`import Home from 'components/icons/Home'
import Favorite from 'components/icons/Favorite'`

    const codeInplementIcons = 
`<HomeIcon />
<HomeIcon color="primary" />
<HomeIcon color="secondary" />
<HomeIcon color="disabled" />`

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
                        <div className="row">
                            <div className="col sm12">
                                <Typography variant="h3" component="h1" className="gutterBottom">Tipografia</Typography>
                                <Typography variant="h5" component="p">Use a tipografia para apresentar seu design e conteúdo da forma mais clara e eficiente possível.</Typography>
                                <br />
                                <Typography variant="body1" component="p">O uso de diferentes tamanhos e estilos de uma só vez pode estragar qualquer leiaute. Uma escala tipográfica tem um conjunto limitado de tipos de tamanhos que funcionam bem em conjunto com o leiaute de grade.</Typography>
                                <br />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col sm12">
                                <div className="box items-start flex-col outlined transparent p2">
                                    <Typography variant="h1" component="h2" className="gutterBottom truncate">H1</Typography>
                                    <Typography variant="h2" className="gutterBottom">H2</Typography>
                                    <Typography variant="h3" className="gutterBottom">H3</Typography>
                                    <Typography variant="h4" className="gutterBottom">H4</Typography>
                                    <Typography variant="h5" className="gutterBottom">H5</Typography>
                                    <Typography variant="h6" className="gutterBottom">H6</Typography>
                                    <Typography variant="subtitle1" component="span" className="gutterBottom">Subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</Typography>
                                    <Typography variant="subtitle2" component="span" className="gutterBottom">Subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</Typography>
                                    <Typography variant="body1" component="p" className="gutterBottom">Body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
                                    <Typography variant="body2" component="p" className="gutterBottom">Body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
                                    <Typography variant="button" className="gutterBottom">Button Text</Typography>
                                    <Typography variant="caption" component="span" className="gutterBottom">Caption text</Typography>
                                    <Typography variant="overline" component="span" className="gutterBottom">Overline text</Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col sm12">
                                <Typography variant="h3" component="h2" className="gutterBottom">Grade</Typography>
                                <Typography variant="h5" component="p">O leiaute responsivo da grade se adapta ao tamanho e orientação da tela, garantindo a consistência entre leiautes.</Typography>
                                <br />
                                <Typography variant="body1" component="p">
                                    Uma grade cria consistência visual entre leiautes, enquanto permite flexibilidade em uma ampla variedade de projetos. Nossa UI responsiva é baseada em um leiaute de grade com 12 colunas.
                                </Typography>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col sm1 box outlined py1">1</div>
                            <div className="col sm1 box outlined py1">2</div>
                            <div className="col sm1 box outlined py1">3</div>
                            <div className="col sm1 box outlined py1">4</div>
                            <div className="col sm1 box outlined py1">5</div>
                            <div className="col sm1 box outlined py1">6</div>
                            <div className="col sm1 box outlined py1">7</div>
                            <div className="col sm1 box outlined py1">8</div>
                            <div className="col sm1 box outlined py1">9</div>
                            <div className="col sm1 box outlined py1">10</div>
                            <div className="col sm1 box outlined py1">11</div>
                            <div className="col sm1 box outlined py1">12</div>
                        </div>

                        <div className="row">
                            <div className="col sm12">
                                <Typography variant="h4" component="h3" className="gutterBottom">Grades Responsivos</Typography>
                                <Typography variant="body1" component="p">No exemplo abaixo, nós tornamos o leiaute responsivo definindo quantas colunas a div 
                                deve ocupar em cada tamanho de tela. Tente redimensionar seu navegador e veja o 
                                leiaute abaixo se auto-ajustando.</Typography>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col sm12 box outlined p1">SM12</div>
                        </div>

                        <div className="row">
                            <div className="col sm12 md4 lg2 box outlined p1">SM12 - MD4 - LG2</div>
                            <div className="col sm12 md4 lg8 box outlined p1">SM12 - MD4 - LG8</div>
                            <div className="col sm12 md4 lg2 box outlined p1">SM12 - MD4 - LG2</div>
                        </div>

                        <div className="row">
                            <div className="col sm12 md6 lg3 box outlined p1">SM12 - MD6 - LG3</div>
                            <div className="col sm12 md6 lg3 box outlined p1">SM12 - MD6 - LG3</div>
                            <div className="col sm12 md6 lg3 box outlined p1">SM12 - MD6 - LG3</div>
                            <div className="col sm12 md6 lg3 box outlined p1">SM12 - MD6 - LG3</div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col sm12">
                                <div className="row">
                                    <Typography variant="h3" component="h2" className="gutterBottom">SvgIcon</Typography>
                                    <Typography variant="body1" component="p">Nós padronizamos mais de 32 ícones de uso comun (veja abaixo). Para cada ícone SVG, exportamos o respectivo componente React presente no diretório "components/icons".</Typography>
                                    <br />
                                    <Typography variant="h4" component="h3">Uso</Typography>
                                    <br />
                                    <Typography variant="body1" component="p">Importe ícones usando a seguinte opções:</Typography>
                                </div>
                                <div className="row">
                                    <SyntaxHighlighter language='tsx' style={false}>
                                        {codeInportIcons}
                                    </SyntaxHighlighter>
                                </div>
                                <div className="row">
                                    <div className="box nowrap outlined transparent p2">
                                        <Lightbulb width="32" height="32" className="space" />
                                        <Lightbulb width="32" height="32" color="primary" className="space"/>
                                        <Lightbulb width="32" height="32" color="secondary" className="space"/>
                                        <Lightbulb width="32" height="32" color="disabled" className="space"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <SyntaxHighlighter language='tsx' style={false}>
                                        {codeInplementIcons}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                        </div>

                        <div className="divider"/>

                        <div className="row">
                            <div className="col sm12">
                                <Typography variant="h5" component="h4" className="gutterBottom">Action</Typography>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col sm4 md2 p2">
                                <div className="box flex-col nowrap outlined transparent p2">
                                    <AccountCircle width="32" height="32" className="mb1"/>
                                    <Typography variant="body1" component="p">AccountCircle</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p2">
                                <div className="box flex-col nowrap outlined transparent p2">
                                    <Api width="32" height="32" className="mb1"/>
                                    <Typography variant="body1" component="p">Api</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p2">
                                <div className="box flex-col nowrap outlined transparent p2">
                                    <ArrowRightAlt width="32" height="32" className="mb1"/>
                                    <Typography variant="body1" component="p">ArrowRightAlt</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p2">
                                <div className="box flex-col nowrap outlined transparent p2">
                                    <BugReport width="32" height="32" className="mb1"/>
                                    <Typography variant="body1" component="p">BugReport</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p2">
                                <div className="box flex-col nowrap outlined transparent p2">
                                    <Code width="32" height="32" className="mb1"/>
                                    <Typography variant="body1" component="p">Code</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p2">
                                <div className="box flex-col nowrap outlined transparent p2">
                                    <ContactSupport width="32" height="32" className="mb1"/>
                                    <Typography variant="body1" component="p">ContactSupport</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p2">
                                <div className="box flex-col nowrap outlined transparent p2">
                                    <CreditCard width="32" height="32" className="mb1"/>
                                    <Typography variant="body1" component="p">CreditCard</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p2">
                                <div className="box flex-col nowrap outlined transparent p2">
                                    <Dashboard width="32" height="32" className="mb1"/>
                                    <Typography variant="body1" component="p">Dashboard</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p2">
                                <div className="box flex-col nowrap outlined transparent p2">
                                    <Delete width="32" height="32" className="mb1"/>
                                    <Typography variant="body1" component="p">Delete</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p2">
                                <div className="box flex-col nowrap outlined transparent p2">
                                    <Description width="32" height="32" className="mb1"/>
                                    <Typography variant="body1" component="p">Description</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p2">
                                <div className="box flex-col nowrap outlined transparent p2">
                                    <Done width="32" height="32" className="mb1"/>
                                    <Typography variant="body1" component="p">Done</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p2">
                                <div className="box flex-col nowrap outlined transparent p2">
                                    <DoneAll width="32" height="32" className="mb1"/>
                                    <Typography variant="body1" component="p">DoneAll</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p2">
                                <div className="box flex-col nowrap outlined transparent p2">
                                    <Event width="32" height="32" className="mb1"/>
                                    <Typography variant="body1" component="p">Event</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p2">
                                <div className="box flex-col nowrap outlined transparent p2">
                                    <Extension width="32" height="32" className="mb1"/>
                                    <Typography variant="body1" component="p">Extension</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p2">
                                <div className="box flex-col nowrap outlined transparent p2">
                                    <Favorite width="32" height="32" className="mb1"/>
                                    <Typography variant="body1" component="p">Favorite</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p2">
                                <div className="box flex-col nowrap outlined transparent p2">
                                    <FavoriteBorder width="32" height="32" className="mb1"/>
                                    <Typography variant="body1" component="p">FavoriteBorder</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p2">
                                <div className="box flex-col nowrap outlined transparent p2">
                                    <FeedBack width="32" height="32" className="mb1"/>
                                    <Typography variant="body1" component="p">FeedBack</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p2">
                                <div className="box flex-col nowrap outlined transparent p2">
                                    <FilterAlt width="32" height="32" className="mb1"/>
                                    <Typography variant="body1" component="p">FilterAlt</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p2">
                                <div className="box flex-col nowrap outlined transparent p2">
                                    <Help width="32" height="32" className="mb1"/>
                                    <Typography variant="body1" component="p">Help</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p2">
                                <div className="box flex-col nowrap outlined transparent p2">
                                    <Home width="32" height="32" className="mb1"/>
                                    <Typography variant="body1" component="p">Home</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p2">
                                <div className="box flex-col nowrap outlined transparent p2">
                                    <Info width="32" height="32" className="mb1"/>
                                    <Typography variant="body1" component="p">Info</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p2">
                                <div className="box flex-col nowrap outlined transparent p2">
                                    <Label width="32" height="32" className="mb1"/>
                                    <Typography variant="body1" component="p">Label</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p2">
                                <div className="box flex-col nowrap outlined transparent p2">
                                    <Language width="32" height="32" className="mb1"/>
                                    <Typography variant="body1" component="p">Language</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p2">
                                <div className="box flex-col nowrap outlined transparent p2">
                                    <Lightbulb width="32" height="32" className="mb1"/>
                                    <Typography variant="body1" component="p">Lightbulb</Typography>
                                </div>
                            </div>
                        </div>

                        <div className="divider"/>

                        <div className="row">
                            <div className="col sm12">
                                <Typography variant="h5" className="gutterBottom">Logos</Typography>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col sm4 md2 p2">
                                <div className="box flex-col nowrap outlined transparent p2">
                                    <GitHub className="mb1"/>
                                    <Typography variant="body1" component="p">GitHub</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p2">
                                <div className="box flex-col nowrap outlined transparent p2">
                                    <Linkedin className="mb1"/>
                                    <Typography variant="body1" component="p">Linkedin</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p2">
                                <div className="box flex-col nowrap outlined transparent p2">
                                    <YouTube className="mb1"/>
                                    <Typography variant="body1" component="p">YouTube</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p2">
                                <div className="box flex-col nowrap outlined transparent p2">
                                    <Instagram className="mb1"/>
                                    <Typography variant="body1" component="p">Instagram</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p2">
                                <div className="box flex-col nowrap outlined transparent p2">
                                    <Facebook className="mb1"/>
                                    <Typography variant="body1" component="p">Facebook</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p2">
                                <div className="box flex-col nowrap outlined transparent p2">
                                    <Whatsapp className="mb1"/>
                                    <Typography variant="body1" component="p">Whatsapp</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p2">
                                <div className="box flex-col nowrap outlined transparent p2">
                                    <Telegram className="mb1"/>
                                    <Typography variant="body1" component="p">Telegram</Typography>
                                </div>
                            </div>
                            <div className="col sm4 md2 p2">
                                <div className="box flex-col nowrap outlined transparent p2">
                                    <PlayStore className="mb1"/>
                                    <Typography variant="body1" component="p">PlayStore</Typography>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col sm12">
                                <Typography variant="body1" component="p">Se você precisa customizar o ícone SVG (não disponível no conjunto padrão de ícones Material) você pode encapsular em um SvgIcon. Este componente estende o elemento nativo "svg":</Typography>
                            </div>
                        </div>
                        <SyntaxHighlighter language='tsx' style={false}>
                            {codeSvgIcons}
                        </SyntaxHighlighter>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col sm12">
                                <Typography variant="h3" component="h2" className="gutterBottom">Campo de texto</Typography>
                                <Typography variant="body1" component="p">Campos de texto permitem que os usuários digitem e editem texto em uma interface de usuário.
                                Eles geralmente aparecem em formulários e diálogos.
                                Em nosso design system usamos dois tipos de campo de texto: "preenchido" e "delineado".</Typography>
                            </div>
                        </div>
                        <div className="row">
                            <div className="box outlined transparent p2">
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
                        <div className="row">
                            <SyntaxHighlighter language='tsx' style={false}>
                                {codeTextField}
                            </SyntaxHighlighter>
                        </div>
                        <div className="row">
                            <div className="col sm12">
                                <Typography variant="h4" component="h3" className="gutterBottom">Propriedades de formulário</Typography>
                                
                                <Typography variant="body1" component="p">Os atributos padrões de formulários são suportados, por exemplo, required, disabled, type, etc.
                                assim como o helperText, que é utilizado para dar contexto sobre um campo de entrada, tal como, 
                                explicar como o campo deve ser preenchido.</Typography>
                            </div>
                        </div>
                        <div className="row">
                            <div className="box content-start outlined transparent p2">
                                <div className="col sm12 md6 lg4">
                                    <TextField 
                                        id="defaultValue"
                                        type="text"
                                        label="Auto preencido"
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
                                        label="Auto preencido"
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