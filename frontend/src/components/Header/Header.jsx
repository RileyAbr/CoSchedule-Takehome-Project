import { Flex } from "@chakra-ui/react";

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
            justifyContent="space-between"
            position="fixed"
        >
            <HeaderLogo />

            <HeaderLogOutButton />
        </Flex>
    );
};

export default Header;
