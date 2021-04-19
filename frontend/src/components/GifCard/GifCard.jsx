import { Box, Button, Heading, Image } from "@chakra-ui/react";

const GifCard = ({ url, title }) => {
    return (
        <>
            <Box
                bg="gray.800"
                w="300px"
                borderBottomRadius="15px"
                borderTopRadius="8px"
            >
                <Image src={url} alt={title} borderTopRadius="8px" w="100%" />
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
