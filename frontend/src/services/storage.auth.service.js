const readAuthToken = () => {
    return localStorage.getItem("token");
};

const writeAuthToken = (tokenValue) => {
    localStorage.setItem("token", tokenValue);
    return tokenValue;
};

const removeAuthToken = () => {
    localStorage.removeItem("token");
    return null;
};

export { readAuthToken, writeAuthToken, removeAuthToken };
