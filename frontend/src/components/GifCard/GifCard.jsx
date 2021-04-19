import { useState, useEffect, useCallback } from "react";
import {
    Box,
    Flex,
    Button,
    Heading,
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Text,
    FormControl,
    FormLabel,
    Input,
    chakra,
    Divider,
    Stack,
    Radio,
    RadioGroup,
} from "@chakra-ui/react";
import LoadingGif from "../LoadingGif";
// import CommentsModal from "../CommentsModal";
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
    const { isOpen, onOpen, onClose } = useDisclosure();

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

    const handleNewComment = async (commentBody) => {
        let newGifDetails = gifDetails;

        gifDetails.comments.push({
            author: "anonymous",
            body: commentBody,
        });

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
        if (gifDetails && id !== gifDetails.gifId) {
            setIsCreated(false);
        }
    }, [id, isCreated, gifDetails, getGIPHYRanking]);

    const removePlaceholder = () => {
        setIsLoaded(true);
    };

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Here's What Everyone is Saying</ModalHeader>
                    <Divider />
                    <ModalCloseButton />
                    <ModalBody>
                        {gifDetails &&
                            gifDetails.comments &&
                            gifDetails.comments.map((comment, i) => {
                                return (
                                    <Box
                                        key={i}
                                        borderColor="gray.600"
                                        borderStyle="solid"
                                        borderBottom="1px"
                                        py="3"
                                    >
                                        <Text fontSize="sm" color="gray.400">
                                            - {comment.author}
                                        </Text>

                                        <Text fontSize="lg">
                                            {comment.body}
                                        </Text>
                                    </Box>
                                );
                            })}
                    </ModalBody>

                    <ModalFooter>
                        <chakra.form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleNewComment(e.target[0].value);
                            }}
                            w="100%"
                        >
                            <Box py="2">
                                <FormControl id="comment">
                                    <FormLabel>
                                        What would you like to say?
                                    </FormLabel>
                                    <Input
                                        name="comment"
                                        type="text"
                                        required
                                    />
                                </FormControl>
                            </Box>
                            <Flex justifyContent="flex-end">
                                <Button
                                    mr="3"
                                    type="submit"
                                    onSubmit={handleNewComment}
                                >
                                    Add Comment
                                </Button>
                                <Button variant="ghost" onClick={onClose}>
                                    Cancel
                                </Button>
                            </Flex>
                        </chakra.form>
                    </ModalFooter>
                </ModalContent>
            </Modal>

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
                    <Button display="block" margin="0 auto" onClick={onOpen}>
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
