import Head from 'next/head'

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
              <h4>Bem-vindo ao Xnorlax</h4>
              <p>Se você gostou do nosso conteúdo também poderar instalar esse app na sua tela principal.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
