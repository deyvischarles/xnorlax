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
            <Typography variant="h3" component="h1" className="mb2">
              Bem-vindo a SystemGx!
            </Typography>

            <Typography variant="h5" component="h2" className="mb2">
              Nosso sistema ainda está em desenvolvimento, mas você pode espiar nosso design de componentes 
              à vontade.
            </Typography>
            
            <Typography variant="body1" component="p">
              Se você quiser acompanhar nosso progresso também poderar instalar esse app no seu smartphone.
            </Typography>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
