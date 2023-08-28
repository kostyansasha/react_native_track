import { useContext } from "react";
import { Context as AuthContext } from '../context/AuthContext';
import { useEffect } from "react";

const ResolveAuthScreen = () => {
    const { tryLocalSignin } = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignin();
    }, []);

    return null;
};

export default ResolveAuthScreen;