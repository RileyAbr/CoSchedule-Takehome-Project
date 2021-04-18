import { Center, Spinner } from "@chakra-ui/react";

const LoadingGif = () => {
    return (
        <Center h="200px">
            <Spinner size="xl" speed="0.7s" thickness="4px" />
        </Center>
    );
};

export default LoadingGif;
