import {
    Box,
    Text,
    Button,
    chakra,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Link,
} from "@chakra-ui/react";
import { useHistory, Link as RouterLink } from "react-router-dom";
import PasswordField from "../PasswordField";
import { writeAuthToken } from "../../services/storage.auth.service";

const LoginForm = (props) => {
    const history = useHistory();

    const logIn = () => {
        writeAuthToken("mock");
        history.push("/");
    };

    return (
        <chakra.form
            onSubmit={(e) => {
                e.preventDefault(); // your login logic here
                logIn();
            }}
            {...props}
        >
            <Stack spacing="6" pt="5">
                <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                    />
                </FormControl>
                <PasswordField />
                <Button type="submit" size="lg" fontSize="md">
                    Sign in
                </Button>
                <Box w="300px">
                    <Text align="center">
                        Don't have an account?{" "}
                        <Link as={RouterLink} to="/signup" color="teal.400">
                            Sign Up Here
                        </Link>
                    </Text>
                </Box>
            </Stack>
        </chakra.form>
    );
};

export default LoginForm;
