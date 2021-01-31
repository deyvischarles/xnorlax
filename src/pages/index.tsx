import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Aplicação Backend e Frontend para a web"/>
        <meta name="keywords" content="supermachine, home"/>
        <link rel="canonical" href={process.env.NEXT_PUBLIC_APP_URL}/>
        <title>Supermachine</title>
      </Head>

      <main>
        <section>
          <div className="container">
            <div className="flex-box flex-col transparent">
              <h4>Bem-vindo ao Supermachine</h4>
              <p>Se você gostou do nosso conteúdo também poderar instalar esse app na sua tela principal.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
