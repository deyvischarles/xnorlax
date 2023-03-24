import Head from 'next/head'

import Typography from '../styles/Typography'

const Erro404 = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Aplicação Backend e Frontend para a web"/>
        <meta name="keywords" content="xnorlax, 404"/>
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_APP_URL}/404`} />
        <title>SystemGx</title>
      </Head>

      <main>
        <section>
          <div className="container">
            <div className="box col">
              <Typography variant="h1" className="mb2">
                404
              </Typography>

              <Typography variant="h5" component="p" className="mb1">
                página não encontrada!
              </Typography>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Erro404
