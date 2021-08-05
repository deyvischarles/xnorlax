import Head from 'next/head'

import Typography from '../styles/Typography'

const Home = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Frontend web"/>
        <meta name="keywords" content="xnorlax, home"/>
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_APP_URL}`} />
        <title>Xnorlax</title>
      </Head>

      <main>
        <section>
          <div className="container">
            <div className="flex-box flex-col transparent">
              <Typography variant="h3" component="h1" className="gutterBottom">Bem-vindo!</Typography>
              <Typography variant="h5" component="h2">Nosso sistema ainda está em desenvolvimento, mas você pode navegar a vontade pelos conteúdo já existentes.</Typography>
              <br />
              <Typography variant="body1" component="p">Se você gostar do nosso conteúdo também poderar instalar esse app na sua tela principal.</Typography>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
