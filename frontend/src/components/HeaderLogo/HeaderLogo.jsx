import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Granim from "granim";

import logoMask from "../../assets/logo-mask/logo-mask.png";

const HeaderLogo = () => {
    useEffect(() => {
        new Granim({
            element: "#header-logo",
            direction: "left-right",
            isPausedWhenNotInView: true,
            states: {
                "default-state": {
                    gradients: [
                        ["#EB3349", "#F45C43"],
                        ["#FF8008", "#FFC837"],
                        ["#4CB8C4", "#3CD3AD"],
                        ["#24C6DC", "#514A9D"],
                        ["#FF512F", "#DD2476"],
                        ["#DA22FF", "#9733EE"],
                    ],
                },
            },
        });
    });
    return (
        <Box position="relative" w="200px" h="50px">
            <canvas
                id="header-logo"
                style={{ display: "block", width: "200px", height: "50px" }}
            />
            <Link
                to="/"
                style={{
                    position: "absolute",
                    width: "200px",
                    height: "50px",
                    top: "0",
                    left: "0",
                    backgroundSize: "200px",
                    backgroundImage: "url(" + logoMask + ")",
                    textIndent: "-9999px",
                }}
            >
                GIPHY Gallery
            </Link>
        </Box>
    );
};

export default HeaderLogo;
