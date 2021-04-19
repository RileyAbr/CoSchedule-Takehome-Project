import { useState, useEffect } from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";
import ContentPage from "../../ContentPage";
import GifCard from "../../GifCard";
import LoadingGif from "../../LoadingGif";
import { getGIPHYTrending } from "../../../services/api.service";

const Gallery = () => {
    const [gifList, setGifList] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (!isLoaded) {
            getGIPHYTrendingList();
            setIsLoaded(true);
        }
        console.log(gifList);
    }, [isLoaded, gifList]);

    const getGIPHYTrendingList = async () => {
        const data = await getGIPHYTrending();

        if (data.meta.status === 200) {
            setGifList(data.data);
        } else {
            console.error("GIPHY could not be reached.");
        }
    };

    return (
        <ContentPage>
            <Wrap maxW="99%" spacing="30px" justify="center" pt={3}>
                {gifList ? (
                    gifList.map((gif, i) => (
                        <>
                            <WrapItem key={i}>
                                <GifCard
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
        </ContentPage>
    );
};

export default Gallery;
