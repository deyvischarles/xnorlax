import React, { useState, useEffect } from 'react'

import Head from 'next/head'

import Skeleton from '../styles/Skeleton'
import Typography from '../styles/Typography'
import Assistant from '../components/Assistant'

const Laboratory = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const init = setTimeout(() => {
            setLoading(false)
        }, 1000)

        return () => clearTimeout(init)
    }, [])

    return (
        <>
            <Head>
                <meta name="description" content="Área para testes e experiências"/>
                <meta name="keywords" content="supermachine, laboratório"/>
                <link rel="canonical" href={`${process.env.NEXT_PUBLIC_APP_URL}/laboratory`} />
                <title>Xnorlax - Laboratório</title>
            </Head>

            <main>
                <section>
                    <div className="container">
                        <div className="box p3">
                            {loading ? (
                                <Skeleton variant="circle" animation="wave" width={96} height={96} />
                            ) : (
                                <Assistant />
                            )}
                        </div>

                        <div className="box col basis p3">
                            <Typography variant="h3" component="h1" className="gutterBottom">
                                {loading ? <Skeleton variant="text" width={180}/> : 'Laboratório'}
                            </Typography>
                            <Typography variant="h5" component="p">
                                {loading ? (
                                    <Skeleton variant="text" width={240}/>
                                ) : (
                                    'Nossa área de testes e experiências. Para participar escolha uma das opções abaixo'
                                )}
                            </Typography>
                        </div>
                        
                        <div className="row">
                            <div className="col sm12 md4 p3">
                                {loading ? (
                                    <Skeleton variant="rect" animation="wave" width="100%" height="100%" className="r2" />
                                ) : (
                                    <a href="/teste">
                                        <div className="box col start top outlined r2 p3">
                                            <Typography variant="h6" component="span" className="gutterBottom">
                                                Classificar fotos
                                            </Typography>
                                            <Typography variant="body1" component="p">
                                                Envie uma foto sua e descubra se nossa IA acha interessante.
                                            </Typography>
                                        </div>
                                    </a>
                                )}
                            </div>
                            
                            <div className="col sm12 md4 p3">
                                {loading ? (
                                    <Skeleton variant="rect" animation="wave" width="100%" height={140} className="r2" />
                                ) : (
                                    <a href="/teste">
                                        <div className="box col start top outlined r2 p3">
                                            <Typography variant="h6" component="span" className="gutterBottom">
                                                Vazio :(
                                            </Typography>
                                            <Typography variant="body1" component="p">
                                                Iremos atualizar o conteudo deste link em breve.
                                            </Typography>
                                        </div>
                                    </a>
                                )}
                            </div>

                            <div className="col sm12 md4 p3">
                                {loading ? (
                                    <Skeleton variant="rect" animation="wave" width="100%" height="100%" className="r2" />
                                ) : (
                                    <a href="/teste">
                                        <div className="box col start top outlined r2 p3">
                                            <Typography variant="h6" component="span" className="gutterBottom">
                                                Vazio :(
                                            </Typography>
                                            <Typography variant="body1" component="p">
                                                Iremos atualizar o conteudo deste link em breve.
                                            </Typography>
                                        </div>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Laboratory