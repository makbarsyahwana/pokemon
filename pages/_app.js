import { ApolloProvider } from "@apollo/client";
import { GlobalProvider } from "../context/GlobalState"
import { client } from "../configFile/ApolloClient";
import Navbar from "../component/Navbar"

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <GlobalProvider>
        <Navbar />
        <Component {...pageProps} />
      </GlobalProvider>
    </ApolloProvider>
  )
}

export default MyApp
