const postLogin = async (data) =>
    fetch("https://giphy-gallery-server.herokuapp.com/auth", {
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

const postSignUp = async (data) => fetch();

export { postLogin, postSignUp };
