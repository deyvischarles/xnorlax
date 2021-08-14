import Head from 'next/head'

import Typography from '../styles/Typography'

const Blog = () => {
  return (
    <>
        <Head>
            <meta name="description" content="Nosso portal de notícias"/>
            <meta name="keywords" content="xnorlax, blog"/>
            <link rel="canonical" href={`${process.env.NEXT_PUBLIC_APP_URL}/blog`} />
            <title>Xnorlax - Blog</title>
        </Head>

        <main>
            <section>
                <div className="container">
                    <Typography variant="h3" component="h1" className="mb2">Blog</Typography>
                    
                    <Typography variant="h5" component="p">
                        Nossas últimas notícias, atualizações e tutoriais para desenvolvedores.
                    </Typography>
                </div>
            </section>
        </main>
    </>
  )
}

export default Blog