import '../styles/globals.css'
import '../styles/forest.min.css'
import 'remixicon/fonts/remixicon.css';




import type { AppProps } from 'next/app'
import { ThemeContextProvider } from '@/context'
import { NextPage } from 'next';
import { ReactNode } from 'react';
import { MainLayoutContainer } from 'src/container';
import { wrapper } from '@/store';

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};
type MyAppProps = AppProps & {
  Component: Page;
};
function MyApp({ Component, pageProps }: MyAppProps) {

  const getLayout = Component.getLayout || ((page: ReactNode) => page);

  return  <ThemeContextProvider>
            <MainLayoutContainer>
              {getLayout(<Component {...pageProps} />)}
            </MainLayoutContainer>
          </ThemeContextProvider>
  

}



// export default MyApp;
export default wrapper.withRedux(MyApp);

