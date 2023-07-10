import { AuthProvider } from "@/contexts"
import { initAmplify } from "@/utils"
import 'semantic-ui-css/semantic.min.css'
import "@/scss/global.scss";

initAmplify();

export default function App(props) {
  const { Component, pageProps } = props;
  return(
      <AuthProvider>
          <Component {...pageProps} />
      </AuthProvider>
      )
}
