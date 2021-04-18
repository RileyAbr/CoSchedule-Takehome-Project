import { Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { removeAuthToken } from "../../services/storage.auth.service";

const HeaderLogOutButton = () => {
    const history = useHistory();

    const logOut = () => {
        removeAuthToken();
        history.push("/login");
    };

    return (
        <Button
            variant="link"
            onClick={() => {
                logOut();
            }}
            p="2"
        >
            Log Out
        </Button>
    );
};

export default HeaderLogOutButton;
