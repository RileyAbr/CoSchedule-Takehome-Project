import ContentPage from "../../ContentPage";
import { useParams } from "react-router-dom";

const Detail = () => {
    const params = useParams();

    console.log(params);

    return (
        <ContentPage>
            <div>Detail works!</div>
            <div>ID: {params.id}</div>
        </ContentPage>
    );
};

export default Detail;
