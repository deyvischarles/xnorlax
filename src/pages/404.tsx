import Head from 'next/head'

const Erro404 = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Aplicação Backend e Frontend para a web"/>
        <meta name="keywords" content="xnorlax, 404"/>
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_APP_URL}/404`} />
        <title>Xnorlax</title>
      </Head>

      <main>
        <section>
          <div className="container">
            <div className="flex-box flex-col transparent">
              <h1>404</h1>
              <p>página não encontrada!</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Erro404
