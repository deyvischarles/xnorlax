import Head from 'next/head'
import Assistant from '../components/Assistant'
import Button from '../components/Button'
import Typography from '../styles/Typography'

const reload = () => {
    setTimeout(() => {
        location.reload()
    }, 1000)
}

const Offline = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Aplicação Backend e Frontend para a web"/>
        <meta name="keywords" content="xnorlax, offline"/>
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_APP_URL}/offline`} />
        <title>Xnorlax - Offline</title>
      </Head>

      <main>
        <div className="container">
            <div className="box col txt-center vh1">
                <Assistant />
                <Typography variant="h2" component="h1" className="mt2 mb2 bold">
                    Sem conexão com a Internet
                </Typography>
                <Typography variant="h5" component="p" className="mb4">
                    Verifique sua conexão e atualize a página.
                </Typography>
                <Button onClick={reload} variant="outlined" color="primary" className="m1">Atualizar</Button>
            </div>
        </div>
      </main>
    </>
  )
}

export default Offline