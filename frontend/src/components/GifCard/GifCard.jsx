import { useState, useEffect, useCallback } from "react";
import { Box, Flex, Button, Heading, Image } from "@chakra-ui/react";
import LoadingGif from "../LoadingGif";
import {
    postNewGIPHYRanking,
    patchNewGIPHYRanking,
} from "../../services/api.service";
import { calculateStarRating } from "../../services/utils";

const GifCard = ({ id, url, title }) => {
    const [gifDetails, setGifDetails] = useState();
    const [isCreated, setIsCreated] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [thumbSelected, setThumbSelected] = useState(0);

    const getGIPHYRanking = useCallback(async (newRanking) => {
        const data = await postNewGIPHYRanking(newRanking);

        setGifDetails(data);
    }, []);

    const handleThumbClick = async (rankingValue) => {
        let newGifDetails = gifDetails;
        if (newGifDetails.rankings === undefined) {
            newGifDetails.rankings = {
                oneStar: 0,
                twoStar: 0,
                threeStar: 0,
                fourStar: 0,
                fiveStar: 0,
            };
        }

        switch (rankingValue) {
            case 1:
                newGifDetails.rankings.oneStar += 1;
                break;
            case 2:
                newGifDetails.rankings.twoStar += 1;
                break;
            case 3:
                newGifDetails.rankings.threeStar += 1;
                break;
            case 4:
                newGifDetails.rankings.fourStar += 1;
                break;
            case 5:
                newGifDetails.rankings.fiveStar += 1;
                break;
            default:
                break;
        }

        setThumbSelected(rankingValue);
        patchGIPHYRanking(newGifDetails);
    };

    const patchGIPHYRanking = async (newRanking) => {
        await patchNewGIPHYRanking(newRanking);

        setGifDetails(newRanking);
    };

    useEffect(() => {
        if (!isCreated) {
            getGIPHYRanking({ gifID: id });
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
                                <button
                                    key={i}
                                    variant="ghost"
                                    p="0"
                                    height="min-content"
                                    width="min-content"
                                    onClick={() => handleThumbClick(i + 1)}
                                    style={
                                        i >= thumbSelected
                                            ? { filter: "grayscale(100%)" }
                                            : { filter: "grayscale(0)" }
                                    }
                                >
                                    <span role="img" aria-label="A thumbs-up">
                                        👍
                                    </span>
                                </button>
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
