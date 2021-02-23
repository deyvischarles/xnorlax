import Head from 'next/head'

import Assistant from '../components/Assistant'

const Laboratory = () => {
    return (
        <>
            <Head>
                <meta name="description" content="Área para testes e experiências"/>
                <meta name="keywords" content="supermachine, laboratório"/>
                <link rel="canonical" href={`${process.env.NEXT_PUBLIC_APP_URL}/laboratory`}/>
                <title>Supermachine - Laboratório</title>
            </Head>

            <main>
                <section>
                    <div className="container">
                        <br/>
                        <div className="row">
                            <div className="col sm12">
                                <div className="flex-box flex-col pad-24 transparent">
                                    <Assistant />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col sm12">
                                <div className="flex-box flex-col pad-24 transparent">
                                    <h4>Laboratório</h4>
                                    <p>Nossa área de testes e experiências. Para participar escolha uma das opções abaixo</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col sm12 md4 pad-24">
                                <a href="/teste">
                                    <div className="flex-box items-start pad-24 outlined flex-col">
                                        <h5>Classificação de fotos</h5>
                                        <p>Envie uma foto sua e descubra se nossa IA acha interessante.</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col sm12 md4 pad-24">
                                <a href="/teste">
                                    <div className="flex-box items-start flex-start pad-24 outlined flex-col">
                                        <h5>Vazio :(</h5>
                                        <p>Iremos atualizar o conteudo deste link em breve.</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col sm12 md4 pad-24">
                                <a href="/teste">
                                    <div className="flex-box items-start flex-start pad-24 outlined flex-col">
                                        <h5>Vazio :(</h5>
                                        <p>Iremos atualizar o conteudo deste link em breve.</p>
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