import Header from "../Header";
import { Box } from "@chakra-ui/react";

const ContentPage = (props) => {
    return (
        <Box as="main">
            <Header />

            <Box pt="66">{props.children}</Box>
        </Box>
    );
};

export default ContentPage;
