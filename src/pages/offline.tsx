import Head from 'next/head'

const Offline = () => {
  return (
    <>
        <Head>
            <meta name="description" content="Sem conexão com a Internet."/>
            <meta name="keywords" content="supermachine, offline"/>
            <link rel="canonical" href={`${process.env.NEXT_PUBLIC_APP_URL}/offline`}/>
            <title>Supermachine - Offline</title>
        </Head>

        <main>
            <section>
                <div className="container">
                    <div className="flex-box flex-col transparent">
                        <h3>Offline</h3>
                        <p>Sem conexão com a Internet! Por favor, tente novamente mais tarde ou recarregue a página.</p>
                    </div>
                </div>
            </section>
        </main>
    </>
  )
}

export default Offline