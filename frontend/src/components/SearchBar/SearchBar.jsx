import {
    Flex,
    Button,
    Input,
    Text,
    FormControl,
    chakra,
} from "@chakra-ui/react";

const SearchBar = ({ onSubmit, onReset }) => {
    return (
        <chakra.form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(e.target[0].value);
            }}
            onReset={(e) => {
                e.preventDefault();
                onReset();
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
                <Button type="submit" ml="2">
                    Search!
                </Button>
                <Button type="reset" ml="2">
                    Clear
                </Button>
            </Flex>
        </chakra.form>
    );
};

export default SearchBar;
