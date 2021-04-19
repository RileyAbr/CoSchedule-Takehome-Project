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
import { postSignUp } from "../../services/api.service.js";

const SignUpForm = (props) => {
    const history = useHistory();

    const signUp = async (firstName, lastName, email, password) => {
        const data = await postSignUp({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
        });

        if (data.id) {
            history.push("/login");
        } else {
            alert("Incorrect form info");
        }
    };

    return (
        <chakra.form
            onSubmit={(e) => {
                e.preventDefault();
                signUp(
                    e.target[0].value,
                    e.target[1].value,
                    e.target[2].value,
                    e.target[4].value
                );
            }}
            {...props}
        >
            <Stack spacing="6" pt="5">
                <FormControl id="firstName">
                    <FormLabel>First Name</FormLabel>
                    <Input name="firstName" type="text" required />
                </FormControl>
                <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input name="lastName" type="text" required />
                </FormControl>
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
                    Sign Up
                </Button>
                <Box w="300px">
                    <Text align="center">
                        Have an account?{" "}
                        <Link as={RouterLink} to="/login" color="teal.400">
                            Sign In Instead
                        </Link>
                    </Text>
                </Box>
            </Stack>
        </chakra.form>
    );
};

export default SignUpForm;
