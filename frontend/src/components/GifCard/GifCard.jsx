import { useState, useEffect } from "react";
import { Box, Flex, Button, Heading, Image } from "@chakra-ui/react";
import LoadingGif from "../LoadingGif";
import { postNewGIPHYRanking } from "../../services/api.service";
import { calculateStarRating } from "../../services/utils";

const GifCard = ({ id, url, title }) => {
    const [gifDetails, setGifDetails] = useState();
    const [isCreated, setIsCreated] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const getGIPHYRanking = async (newRanking) => {
        const data = await postNewGIPHYRanking(newRanking);

        setGifDetails(data);
    };

    useEffect(() => {
        const newRanking = {
            gifID: id,
        };
        if (!isCreated) {
            getGIPHYRanking(newRanking);
            setIsCreated(true);
        }
    }, [id, isCreated, gifDetails, getGIPHYRanking]);

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
                    display={isLoaded ? "block" : "none"}
                />
                <Box px={3} pb={3}>
                    <Heading size="md" py="1">
                        {id}
                    </Heading>
                    <Heading size="md" py="1">
                        {title || "Animated Gif"}
                    </Heading>
                    <Flex pt="2" pb="3" justifyContent="space-between">
                        {gifDetails && (
                            <Box>
                                Ranking:{" "}
                                {calculateStarRating(gifDetails.rankings)}
                                /5{" "}
                                <span role="img" aria-label="A thumbs-up">
                                    👍
                                </span>
                            </Box>
                        )}
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
                    </Flex>
                    <Button display="block" margin="0 auto">
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
