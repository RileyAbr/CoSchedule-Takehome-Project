import { useState } from "react";
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
import { postLogin } from "../../services/api.service";

const LoginForm = (props) => {
    const [accessToken, setAccessToken] = useState();
    const history = useHistory();

    const logIn = async (email, password) => {
        const data = await postLogin({
            email: email,
            password: password,
        });

        if (data.accessToken) {
            setAccessToken(writeAuthToken("token", data.accessToken));
            history.push("/gallery");
        } else {
            alert("Incorrect username or password");
        }
    };

    return (
        <chakra.form
            onSubmit={(e) => {
                e.preventDefault();
                logIn(e.target[0].value, e.target[2].value);
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
