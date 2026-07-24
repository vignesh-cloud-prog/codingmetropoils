import Layout from "@/components/common/Layout"
import ChatWidget from "@/components/ChatWidget"
import "@/styles/main.scss"

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <ChatWidget />
    </Layout>
  )
}
