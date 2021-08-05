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
                            <div className="col sm12 pad-top-24">
                                <Typography variant="h3" component="h1" className="gutterBottom">Tipografia</Typography>
                                <Typography variant="h5" component="p">Use a tipografia para apresentar seu design e conteúdo da forma mais clara e eficiente possível.</Typography>
                                <br />
                                <Typography variant="body1" component="p">O uso de diferentes tamanhos e estilos de uma só vez pode estragar qualquer leiaute. Uma escala tipográfica tem um conjunto limitado de tipos de tamanhos que funcionam bem em conjunto com o leiaute de grade.</Typography>
                                <br />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col sm12">
                                <div className="flex-box items-start flex-col pad-16 outlined transparent">
                                    <Typography variant="h1" component="h2" className="gutterBottom">Headline 1</Typography>
                                    <Typography variant="h2" className="gutterBottom">Headline 2</Typography>
                                    <Typography variant="h3" className="gutterBottom">Headline 3</Typography>
                                    <Typography variant="h4" className="gutterBottom">Headline 4</Typography>
                                    <Typography variant="h5" className="gutterBottom">Headline 5</Typography>
                                    <Typography variant="h6" className="gutterBottom">Headline 6</Typography>
                                    <Typography variant="subtitle1" className="gutterBottom">subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</Typography>
                                    <Typography variant="subtitle2" className="gutterBottom">subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</Typography>
                                    <Typography variant="body1" className="gutterBottom">body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
                                    <Typography variant="body2" className="gutterBottom">body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
                                    <Typography variant="button" className="gutterBottom">Button Text</Typography>
                                    <Typography variant="caption" className="gutterBottom">caption text</Typography>
                                    <Typography variant="overline" className="gutterBottom">Overline text</Typography>
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
                            <div className="col sm1 flex-box outlined pad-8">1</div>
                            <div className="col sm1 flex-box outlined pad-8">2</div>
                            <div className="col sm1 flex-box outlined pad-8">3</div>
                            <div className="col sm1 flex-box outlined pad-8">4</div>
                            <div className="col sm1 flex-box outlined pad-8">5</div>
                            <div className="col sm1 flex-box outlined pad-8">6</div>
                            <div className="col sm1 flex-box outlined pad-8">7</div>
                            <div className="col sm1 flex-box outlined pad-8">8</div>
                            <div className="col sm1 flex-box outlined pad-8">9</div>
                            <div className="col sm1 flex-box outlined pad-8">10</div>
                            <div className="col sm1 flex-box outlined pad-8">11</div>
                            <div className="col sm1 flex-box outlined pad-8">12</div>
                        </div>

                        <div className="row">
                            <div className="col sm12">
                                <Typography variant="h4" className="gutterBottom">Grades Responsivos</Typography>
                                <Typography variant="body1" component="p">No exemplo abaixo, nós tornamos o leiaute responsivo definindo quantas colunas a div 
                                deve ocupar em cada tamanho de tela. Tente redimensionar seu navegador e veja o 
                                leiaute abaixo se auto-ajustando.</Typography>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col sm12 flex-box outlined pad-8">SM12</div>
                        </div>

                        <div className="row">
                            <div className="col sm12 md4 lg2 flex-box outlined pad-8">SM12 - MD4 - LG2</div>
                            <div className="col sm12 md4 lg8 flex-box outlined pad-8">SM12 - MD4 - LG8</div>
                            <div className="col sm12 md4 lg2 flex-box outlined pad-8">SM12 - MD4 - LG2</div>
                        </div>

                        <div className="row">
                            <div className="col sm12 md6 lg3 flex-box outlined pad-8">SM12 - MD6 - LG3</div>
                            <div className="col sm12 md6 lg3 flex-box outlined pad-8">SM12 - MD6 - LG3</div>
                            <div className="col sm12 md6 lg3 flex-box outlined pad-8">SM12 - MD6 - LG3</div>
                            <div className="col sm12 md6 lg3 flex-box outlined pad-8">SM12 - MD6 - LG3</div>
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
                                    <div className="flex-box pad-16 nowrap outlined transparent">
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
                                <Typography variant="h5" className="gutterBottom">Action</Typography>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col sm4 md2 pad-16">
                                <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                    <AccountCircle width="32" height="32" className="space-botton"/>
                                    <p>AccountCircle</p>
                                </div>
                            </div>
                            <div className="col sm4 md2 pad-16">
                                <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                    <Api width="32" height="32" className="space-botton"/>
                                    <p>Api</p>
                                </div>
                            </div>
                            <div className="col sm4 md2 pad-16">
                                <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                    <ArrowRightAlt width="32" height="32" className="space-botton"/>
                                    <p>ArrowRightAlt</p>
                                </div>
                            </div>
                            <div className="col sm4 md2 pad-16">
                                <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                    <BugReport width="32" height="32" className="space-botton"/>
                                    <p>BugReport</p>
                                </div>
                            </div>
                            <div className="col sm4 md2 pad-16">
                                <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                    <Code width="32" height="32" className="space-botton"/>
                                    <p>Code</p>
                                </div>
                            </div>
                            <div className="col sm4 md2 pad-16">
                                <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                    <ContactSupport width="32" height="32" className="space-botton"/>
                                    <p>ContactSupport</p>
                                </div>
                            </div>
                            <div className="col sm4 md2 pad-16">
                                <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                    <CreditCard width="32" height="32" className="space-botton"/>
                                    <p>CreditCard</p>
                                </div>
                            </div>
                            <div className="col sm4 md2 pad-16">
                                <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                    <Dashboard width="32" height="32" className="space-botton"/>
                                    <p>Dashboard</p>
                                </div>
                            </div>
                            <div className="col sm4 md2 pad-16">
                                <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                    <Delete width="32" height="32" className="space-botton"/>
                                    <p>Delete</p>
                                </div>
                            </div>
                            <div className="col sm4 md2 pad-16">
                                <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                    <Description width="32" height="32" className="space-botton"/>
                                    <p>Description</p>
                                </div>
                            </div>
                            <div className="col sm4 md2 pad-16">
                                <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                    <Done width="32" height="32" className="space-botton"/>
                                    <p>Done</p>
                                </div>
                            </div>
                            <div className="col sm4 md2 pad-16">
                                <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                    <DoneAll width="32" height="32" className="space-botton"/>
                                    <p>DoneAll</p>
                                </div>
                            </div>
                            <div className="col sm4 md2 pad-16">
                                <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                    <Event width="32" height="32" className="space-botton"/>
                                    <p>Event</p>
                                </div>
                            </div>
                            <div className="col sm4 md2 pad-16">
                                <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                    <Extension width="32" height="32" className="space-botton"/>
                                    <p>Extension</p>
                                </div>
                            </div>
                            <div className="col sm4 md2 pad-16">
                                <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                    <Favorite width="32" height="32" className="space-botton"/>
                                    <p>Favorite</p>
                                </div>
                            </div>
                            <div className="col sm4 md2 pad-16">
                                <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                    <FavoriteBorder width="32" height="32" className="space-botton"/>
                                    <p>FavoriteBorder</p>
                                </div>
                            </div>
                            <div className="col sm4 md2 pad-16">
                                <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                    <FeedBack width="32" height="32" className="space-botton"/>
                                    <p>FeedBack</p>
                                </div>
                            </div>
                            <div className="col sm4 md2 pad-16">
                                <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                    <FilterAlt width="32" height="32" className="space-botton"/>
                                    <p>FilterAlt</p>
                                </div>
                            </div>
                            <div className="col sm4 md2 pad-16">
                                <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                    <Help width="32" height="32" className="space-botton"/>
                                    <p>Help</p>
                                </div>
                            </div>
                            <div className="col sm4 md2 pad-16">
                                <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                    <Home width="32" height="32" className="space-botton"/>
                                    <p>Home</p>
                                </div>
                            </div>
                            <div className="col sm4 md2 pad-16">
                                <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                    <Info width="32" height="32" className="space-botton"/>
                                    <p>Info</p>
                                </div>
                            </div>
                            <div className="col sm4 md2 pad-16">
                                <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                    <Label width="32" height="32" className="space-botton"/>
                                    <p>Label</p>
                                </div>
                            </div>
                            <div className="col sm4 md2 pad-16">
                                <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                    <Language width="32" height="32" className="space-botton"/>
                                    <p>Language</p>
                                </div>
                            </div>
                            <div className="col sm4 md2 pad-16">
                                <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                    <Lightbulb width="32" height="32" className="space-botton"/>
                                    <p>Lightbulb</p>
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
                            <div className="col sm4 md2 pad-16">
                                <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                    <GitHub className="space-botton"/>
                                    <p>GitHub</p>
                                </div>
                            </div>
                            <div className="col sm4 md2 pad-16">
                                <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                    <Linkedin className="space-botton"/>
                                    <p>Linkedin</p>
                                </div>
                            </div>
                            <div className="col sm4 md2 pad-16">
                                <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                    <YouTube className="space-botton"/>
                                    <p>YouTube</p>
                                </div>
                            </div>
                            <div className="col sm4 md2 pad-16">
                                <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                    <Instagram className="space-botton"/>
                                    <p>Instagram</p>
                                </div>
                            </div>
                            <div className="col sm4 md2 pad-16">
                                <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                    <Facebook className="space-botton"/>
                                    <p>Facebook</p>
                                </div>
                            </div>
                            <div className="col sm4 md2 pad-16">
                                <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                    <Whatsapp className="space-botton"/>
                                    <p>Whatsapp</p>
                                </div>
                            </div>
                            <div className="col sm4 md2 pad-16">
                                <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                    <Telegram className="space-botton"/>
                                    <p>Telegram</p>
                                </div>
                            </div>
                            <div className="col sm4 md2 pad-16">
                                <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                    <PlayStore className="space-botton"/>
                                    <p>PlayStore</p>
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
                            <div className="flex-box pad-16 outlined transparent">
                                <div className="col sm12 md6 lg4">
                                    <TextField
                                        id="filed"
                                        type="text"
                                        label="Preenchido"
                                        className="marg-16"
                                    />
                                </div>
                                <div className="col sm12 md6 lg4">
                                    <TextField 
                                        id="outlined"
                                        type="text"
                                        label="Delineado"
                                        variant="outlined"
                                        className="marg-16"
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
                            <div className="flex-box content-start pad-16 outlined transparent">
                                <div className="col sm12 md6 lg4">
                                    <TextField 
                                        id="defaultValue"
                                        type="text"
                                        label="Auto preencido"
                                        defaultValue="Valor padrão"
                                        className="marg-16"
                                    />
                                </div>
                                <div className="col sm12 md6 lg4">
                                    <TextField 
                                        id="required"
                                        type="text"
                                        label="Obrigatório"
                                        required
                                        helpText="Este campo é obrigatório"
                                        className="marg-16"
                                    />
                                </div>
                                <div className="col sm12 md6 lg4">
                                    <TextField id="disabledFiled" type="text" label="Desativado" className="marg-16" disabled/>
                                </div>
                                <div className="col sm12 md6 lg4">
                                    <TextField id="defaultValueOutlined" type="text" label="Auto preencido" defaultValue="Valor padrão" variant="outlined" className="marg-16" />
                                </div>
                                <div className="col sm12 md6 lg4">
                                    <TextField id="requiredOutlined" type="text" label="Obrigatório" required helpText="Este campo é obrigatório" variant="outlined" className="marg-16" />
                                </div>
                                <div className="col sm12 md6 lg4">
                                    <TextField id="disabledOutlined" type="text" label="Desativado" variant="outlined" className="marg-16" disabled/>
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