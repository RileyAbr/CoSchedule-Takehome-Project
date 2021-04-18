import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
};

const theme = extendTheme({
    styles: {
        global: (props) => ({
            "*": {
                boxSizing: "borderbox",
            },

            body: {
                bg: "gray.700",
            },
        }),
    },
    config,
});

export default theme;
