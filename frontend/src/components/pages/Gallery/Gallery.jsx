import { Wrap, WrapItem } from "@chakra-ui/react";

import ContentPage from "../../ContentPage";
import GifCard from "../../GifCard";

const Gallery = () => {
    return (
        <ContentPage>
            <Wrap maxW="99%" spacing="30px" justify="center" pt={3}>
                {[...Array(15)].map((x, i) => (
                    <WrapItem>
                        <GifCard />
                    </WrapItem>
                ))}
            </Wrap>
        </ContentPage>
    );
};

export default Gallery;
