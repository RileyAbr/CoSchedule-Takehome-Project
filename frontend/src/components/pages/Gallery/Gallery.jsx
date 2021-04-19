import { useState, useEffect } from "react";
import { Flex, Wrap, WrapItem } from "@chakra-ui/react";
import ContentPage from "../../ContentPage";
import GifCard from "../../GifCard";
import LoadingGif from "../../LoadingGif";
import Searchbar from "../../SearchBar";
import { getGIPHYTrending, searchGIPHY } from "../../../services/api.service";

const Gallery = () => {
    const [gifList, setGifList] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (!isLoaded) {
            getGIPHYTrendingList();
            setIsLoaded(true);
        }
    }, [isLoaded, gifList]);

    const getGIPHYTrendingList = async () => {
        const data = await getGIPHYTrending();

        if (data.meta.status === 200) {
            setGifList(data.data);
        } else {
            console.error("GIPHY could not be reached.");
        }
    };

    const searchGIPHYList = async (searchTerm) => {
        const data = await searchGIPHY(searchTerm);

        if (data.meta.status === 200) {
            setGifList(data.data);
        } else {
            console.error("GIPHY could not be reached.");
        }
    };

    const handleGIPHYSearchSubmit = (searchValue) => {
        searchGIPHYList(searchValue);
    };

    return (
        <ContentPage>
            <Flex maxW="99%" pt="3" flexDir="column" alignItems="center">
                <Searchbar onSubmit={handleGIPHYSearchSubmit} />
                <Wrap pt="3" spacing="30px" justify="center">
                    {gifList ? (
                        gifList.map((gif, i) => (
                            <>
                                <WrapItem key={i}>
                                    <GifCard
                                        id={gif.id}
                                        url={gif.images.original.url}
                                        title={gif.title}
                                    />
                                </WrapItem>
                            </>
                        ))
                    ) : (
                        <LoadingGif />
                    )}
                </Wrap>
            </Flex>
        </ContentPage>
    );
};

export default Gallery;
