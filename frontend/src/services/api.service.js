const postLogin = async (data) =>
    fetch("https://giphy-gallery-server.herokuapp.com/auth", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });

const postSignUp = async (data) =>
    fetch("https://giphy-gallery-server.herokuapp.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });

const getGIPHYTrending = async () =>
    fetch("https://giphy-gallery-server.herokuapp.com/trending", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });

const searchGIPHY = async (searchValue) =>
    fetch(
        `https://giphy-gallery-server.herokuapp.com/search?searchTerm=${searchValue}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
    )
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });

export { postLogin, postSignUp, getGIPHYTrending, searchGIPHY };
