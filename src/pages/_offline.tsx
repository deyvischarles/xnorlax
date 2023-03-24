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
        <title>SystemGx - Offline</title>
      </Head>

      <main>
        <section>
          <div className="container">
              <div className="box p3">
                <Assistant />
              </div>
              <div className="box col">
                  <Typography variant="h5" component="h1" weight='bold' className="mt2 mb2">
                      Sem conexão com a Internet
                  </Typography>
                  <Typography variant="body1" component="p" className="mb4">
                      Verifique sua conexão ou atualize a página.
                  </Typography>
                  <Button onClick={reload} variant="outlined" color="primary" className="m1">Atualizar</Button>
              </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Offline