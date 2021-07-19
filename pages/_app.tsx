import { AppProps } from "next/app";
import { GlobalStyle } from "../style/GlobalStyle";
import { RecoilRoot } from "recoil";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export default App;
