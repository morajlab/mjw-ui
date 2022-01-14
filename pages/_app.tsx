import { Fragment } from "react";
import { FocusStyleManager } from "@blueprintjs/core";
import Head from "next/head";
import type { AppProps } from "next/app";

import "normalize.css/normalize.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "../styles/globals.css";

FocusStyleManager.onlyShowFocusOnTabs();

export const App = ({ Component, pageProps }: AppProps) => (
  <Fragment>
    <Head>
      <title>Workspace UI</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </Head>
    <Component {...pageProps} />
  </Fragment>
);

export default App;
