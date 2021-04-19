import { useState, useEffect } from "react";
import { Box, Button, Heading, Image } from "@chakra-ui/react";
import LoadingGif from "../LoadingGif";

const GifCard = ({ id, url, title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(false);
    }, [url]);

    const removePlaceholder = () => {
        setIsLoaded(true);
    };

    return (
        <>
            <Box
                bg="gray.800"
                w="300px"
                borderBottomRadius="15px"
                borderTopRadius="8px"
            >
                {!isLoaded && <LoadingGif />}

                <Image
                    src={url}
                    alt={title}
                    borderTopRadius="8px"
                    w="100%"
                    onLoad={removePlaceholder}
                />
                <Box px={3} pb={3}>
                    <Heading>{title || "Animated Gif"}</Heading>
                    <Box>
                        Ranking 0/5{" "}
                        <span role="img" aria-label="A thumbs-up">
                            👍
                        </span>
                    </Box>
                    <Box>
                        {[...Array(5)].map((x, i) => (
                            <span
                                role="img"
                                aria-label="A thumbs-up"
                                style={{ filter: "grayscale(100%)" }}
                                key={i}
                            >
                                👍
                            </span>
                        ))}
                    </Box>
                    <Button>
                        <span
                            role="img"
                            aria-label="A speech button with an ellipses in it"
                        >
                            💬
                        </span>{" "}
                        Comments
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default GifCard;
