import Layout from "@/components/common/Layout"
import ChatWidget from "@/components/ChatWidget"
import GoogleAnalytics from "@/components/common/GoogleAnalytics"
import "@/styles/main.scss"

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <GoogleAnalytics />
      <Component {...pageProps} />
      <ChatWidget />
    </Layout>
  )
}
