import Head from 'next/head'

const Blog = () => {
  return (
    <>
        <Head>
            <meta name="description" content="Nosso portal de notícias"/>
            <meta name="keywords" content="xnorlax, blog"/>
            <link rel="canonical" href={`${process.env.NEXT_PUBLIC_VERCEL_URL}/blog`} />
            <title>Xnorlax - Blog</title>
        </Head>

        <main>
            <section>
                <div className="container">
                    <div className="flex-box flex-col transparent">
                        <h4>Blog</h4>
                        <p>Nossas últimas notícias, atualizações e tutoriais para desenvolvedores.</p>
                    </div>
                </div>
            </section>
        </main>
    </>
  )
}

export default Blog