import { useEffect } from "react";
import { Stack, Center, Box, Spacer } from "@chakra-ui/react";
import Granim from "granim";
import HeaderLogo from "../HeaderLogo";

const AuthPage = (props) => {
    useEffect(() => {
        new Granim({
            element: "#auth-background",
            direction: "radial",
            isPausedWhenNotInView: false,
            states: {
                "default-state": {
                    gradients: [
                        ["#FF512F", "#DD2476"],
                        ["#DA22FF", "#9733EE"],
                        ["#24C6DC", "#514A9D"],
                        ["#EB3349", "#F45C43"],
                        ["#FF8008", "#FFC837"],
                        ["#4CB8C4", "#3CD3AD"],
                    ],
                },
            },
        });
    });

    return (
        <Box as="main" h="100%" minH="100vh">
            <canvas
                id="auth-background"
                style={{
                    position: "fixed",
                    display: "block",
                    height: "100vh",
                    width: "100%",
                    zIndex: "-1",
                    opacity: "0.8",
                }}
            />
            <Center h="100%" minH="100vh">
                <Stack bg="gray.800" p={["3", "12"]} borderRadius="20px">
                    <Stack
                        direction={["column", "column", "row"]}
                        alignItems="center"
                    >
                        <HeaderLogo />
                        <Spacer />
                        {props.children}
                    </Stack>
                </Stack>
            </Center>
        </Box>
    );
};

export default AuthPage;
