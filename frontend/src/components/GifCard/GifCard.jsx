import { useState, useEffect } from "react";
import { Box, Button, Heading, Image } from "@chakra-ui/react";

import LoadingGif from "../LoadingGif";

const GifCard = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [gifData, setGifData] = useState();

    useEffect(() => {
        if (!isLoaded) {
            fetch(
                // "https://api.giphy.com/v1/gifs/qu97lsaw5GHfBdxQxf?api_key=WwQ361VAY9EkuZ2mWIJJbIYNy0eLJNr0"
                "https://api.giphy.com/v1/gifs/zyNp2ChOYAeOc?api_key=WwQ361VAY9EkuZ2mWIJJbIYNy0eLJNr0"
            )
                .then((res) => res.json())
                .then((result) => {
                    setIsLoaded(true);
                    setGifData(result.data);
                });
        }
    });

    return (
        <>
            <Box
                bg="gray.800"
                w="300px"
                borderBottomRadius="15px"
                borderTopRadius="8px"
            >
                {gifData ? (
                    <Image
                        src={gifData.images.original.url}
                        alt="Sample Gif"
                        borderTopRadius="8px"
                    />
                ) : (
                    <LoadingGif />
                )}
                <Box px={3} pb={3}>
                    <Heading>{gifData?.title || "Animated Gif"}</Heading>
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
