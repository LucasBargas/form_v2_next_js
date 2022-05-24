import Head from 'next/head'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Lucas Bargas - Formulário de Cadastro V2</title>
        <meta name="description" content="Esta aplicação web foi criada por Lucas Bargas e tem como objetivo de praticar sua lógica em JavaScript puro e seus conhecimentos no pré-processador SASS." />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lucas Bargas - Formulário de Cadastro V2" />
        <meta property="og:site_name" content="Formulário de Cadastro V2" />
        <meta property="og:description" content="Esta aplicação web foi criado por Lucas Bargas e tem como objetivo praticar sua lógica em NextJS e seus conhecimentos no pré-processador SASS. " />
        <meta property="og:url" content="https://form-v2-next-js-lucasbargas.vercel.app/" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
