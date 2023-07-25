// import '../styles/globals.css'

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

export default function App({ Component, pageProps }) {

  const client = new ApolloClient({
    uri : "http://backend-example.codebootcame.co.kr/graphql",
    cache : new InMemoryCache() // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시로 저장해 놓기

  })

  return (
    // 이 컴포넌트에서 그래프큐엘 쓸수있게 해주는 셋팅
    <ApolloProvider client={client}>
      <Component {...pageProps} /> 
    </ApolloProvider>
  )
}
