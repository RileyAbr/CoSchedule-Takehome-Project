import { Route, Switch } from "react-router-dom";
import AuthRoute from "./components/routing/AuthRoute";

import Login from "./components/pages/authentication/Login";
import SignUp from "./components/pages/authentication/SignUp";
import Gallery from "./components/pages/Gallery";

import AuthPage from "./components/AuthPage";

import { readAuthToken } from "./services/storage.auth.service";

const isAuthenticated = readAuthToken() ? true : false;

function App() {
    return (
        <>
            <Switch>
                <Route
                    path="/login"
                    render={() => (
                        <AuthPage>
                            <Login />
                        </AuthPage>
                    )}
                />
                <Route
                    path="/signup"
                    render={() => (
                        <AuthPage>
                            <SignUp />
                        </AuthPage>
                    )}
                />
                <AuthRoute
                    authed={isAuthenticated}
                    exact={true}
                    path="/"
                    component={Gallery}
                />
                <AuthRoute
                    authed={isAuthenticated}
                    exact={true}
                    path="/gallery"
                    component={Gallery}
                />
                <AuthRoute authed={isAuthenticated} component={Gallery} />
            </Switch>
        </>
    );
}

export default App;
