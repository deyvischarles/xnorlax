import Head from 'next/head'

const About = () => {
    return (
        <>
            <Head>
                <meta name="description" content="Sobre a Xnorlax"/>
                <meta name="keywords" content="xnorlax, sobre"/>
                <link rel="canonical" href="/about" />
                <title>Xnorlax - Sobre</title>
            </Head>

            <main>
                <section>
                    <div className="container">
                        <div className="box col">
                            <h3>Sobre</h3>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default About