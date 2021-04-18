import { Flex, Spacer } from "@chakra-ui/react";

import HeaderLogo from "../HeaderLogo";
import HeaderLogOutButton from "../HeaderLogOutButton";

const Header = () => {
    return (
        <Flex
            as="header"
            bg="gray.800"
            w="100%"
            py="2"
            px="4"
            alignItems="center"
            position="fixed"
        >
            <HeaderLogo />

            <Spacer />

            <HeaderLogOutButton />
        </Flex>
    );
};

export default Header;
