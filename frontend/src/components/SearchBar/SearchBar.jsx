import {
    Center,
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
            <Text px="3" fontSize="xl">
                Need something more specific?{" "}
            </Text>
            <FormControl id="searchTerm">
                <Input type="search" w="50%" />
            </FormControl>
            <Button type="submit" mx="2">
                Search!
            </Button>
        </chakra.form>
    );
};

export default SearchBar;
