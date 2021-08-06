import Head from 'next/head'

import Typography from '../styles/Typography'
import Assistant from '../components/Assistant'

const Laboratory = () => {
    return (
        <>
            <Head>
                <meta name="description" content="Área para testes e experiências"/>
                <meta name="keywords" content="supermachine, laboratório"/>
                <link rel="canonical" href={`${process.env.NEXT_PUBLIC_APP_URL}/laboratory`} />
                <title>Supermachine - Laboratório</title>
            </Head>

            <main>
                <section>
                    <div className="container">
                        <br/>
                        <div className="row">
                            <div className="col sm12">
                                <div className="box flex-col transparent p3">
                                    <Assistant />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col sm12">
                                <div className="box flex-col transparent p3">
                                    <Typography variant="h3" component="h1" className="gutterBottom">
                                        Laboratório
                                    </Typography>
                                    <Typography variant="h5" component="p">
                                        Nossa área de testes e experiências. Para participar escolha uma das opções abaixo
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col sm12 md4 p3">
                                <a href="/teste">
                                    <div className="box items-start outlined flex-col p3">
                                        <Typography variant="h6" component="span" className="gutterBottom">
                                            Classificar fotos
                                        </Typography>
                                        <Typography variant="body1" component="p">
                                            Envie uma foto sua e descubra se nossa IA acha interessante.
                                        </Typography>
                                    </div>
                                </a>
                            </div>
                            <div className="col sm12 md4 p3">
                                <a href="/teste">
                                    <div className="box items-start flex-start outlined flex-col p3">
                                        <Typography variant="h6" component="span" className="gutterBottom">
                                            Vazio :(
                                        </Typography>
                                        <Typography variant="body1" component="p">
                                            Iremos atualizar o conteudo deste link em breve.
                                        </Typography>
                                    </div>
                                </a>
                            </div>
                            <div className="col sm12 md4 p3">
                                <a href="/teste">
                                    <div className="box items-start flex-start outlined flex-col p3">
                                        <Typography variant="h6" component="span" className="gutterBottom">
                                            Vazio :(
                                        </Typography>
                                        <Typography variant="body1" component="p">
                                            Iremos atualizar o conteudo deste link em breve.
                                        </Typography>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Laboratory