import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import "@fontsource/amaranth"
import "@fontsource/montserrat"

const theme: ThemeConfig = extendTheme({
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
    },
    fonts: {
        heading: `'amaranth', sans-serif`,
        body: `'montserrat', sans-serif`,
    },
});

export default theme