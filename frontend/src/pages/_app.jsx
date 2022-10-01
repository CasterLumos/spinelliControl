import { createGlobalStyle, ThemeProvider } from "styled-components";
import { StylesProvider } from "@material-ui/core/styles";
import { Normalize } from "styled-normalize";
import Head from "next/head";
import theme from "../theme/theme";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Spinelli Control</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Normalize />
            <StylesProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </StylesProvider>
        </>
    );
}
