import Head from 'next/head'
import Link from 'next/link'

const About = () => {
    return (
        <>
            <Head>
                <meta name="description" content="Sobre a supermachine"/>
                <meta name="keywords" content="supermachine, sobre"/>
                <link rel="canonical" href={`${process.env.NEXT_PUBLIC_APP_URL}/about`}/>
                <title>Supermachine - Sobre</title>
            </Head>

            <main>
                <section>
                    <div className="container">
                        <div className="flex-box flex-col transparent">
                            <h3>Sobre</h3>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default About