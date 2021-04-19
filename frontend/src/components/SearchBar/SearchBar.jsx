import {
    Flex,
    Button,
    Input,
    Text,
    FormControl,
    chakra,
} from "@chakra-ui/react";

const SearchBar = ({ onSubmit }) => {
    return (
        <chakra.form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(e.target[0].value);
            }}
            w="100%"
            p="4"
        >
            <Flex
                w="100%"
                alignItems="center"
                justifyContent="center"
                flexFlow="row nowrap"
            >
                <Text px="3" fontSize="xl">
                    Need something more specific?{" "}
                </Text>
                <FormControl id="searchTerm" w="50%">
                    <Input type="search" />
                </FormControl>
                <Button type="submit" mx="2">
                    Search!
                </Button>
            </Flex>
        </chakra.form>
    );
};

export default SearchBar;
