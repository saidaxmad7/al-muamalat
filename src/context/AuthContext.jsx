import { createContext, useState } from "react";
import { request } from "../services/request";

const defaultProvider = {
    user: null,
    loading: false,
    setUser: () => null,
    setLoading: () => Boolean,
    login: () => Promise.resolve(),
    register: () => Promise.resolve(),
    logout: () => Promise.resolve(),
    handleVerify: () => Promise.resolve(),
    handleVerifySignin: () => Promise.resolve(),
    handleResend: () => Promise.resolve(),
};

const AuthContext = createContext(defaultProvider);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(defaultProvider.user);
    const [loading, setLoading] = useState(defaultProvider.loading);
    const [email, setEmailData] = useState("");

    const handleLogin = (params) => {
        setLoading(true);
        return request
            .post("/v2/auth/signin/init", params)
            .then((response) => {
                setUser(response.data.user);
                setEmailData(response.data?.email);
                return response;
            })
            .catch((error) => {
                return Promise.reject(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleRegister = (params) => {
        setLoading(true);
        return request
            .post("/v2/auth/signup/init", params)
            .then((response) => {
                console.log(response.data);
                setUser(response.data.user);
                setEmailData(response.data?.email ?? params.email);
                return response;
            })
            .catch((error) => {
                console.log(error);
                return Promise.reject(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleVerify = ({ email, otp }) => {
        request
            .post("/v2/auth/signup/verify", { email, otp })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log("finally");
            });
    };
    const handleVerifySignin = ({ email, otp }) => {
        return request
            .post("/v2/auth/signin/verify", { email, otp })
            .then((response) => {
                localStorage.setItem(
                    "accessToken",
                    response.data.data.tokens?.accessToken,
                );
                localStorage.setItem(
                    "refreshToken",
                    response.data.data.tokens?.refreshToken,
                );
                // localStorage.removeItem("verifyEmail")
                console.log(response.data.data.tokens?.accessToken);
                return response;
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log("finally");
            });
    };

    const handleResend = (email) => {
        // email param obyekt emas, string bo'lsa, uni obyektga o'gir
        const payload = typeof email === "string" ? { email } : email;
        request
            .post("/v2/auth/signin/resend", payload)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => console.log(error))
            .finally(() => {
                console.log("finally");
            });
    };

    const values = {
        user,
        loading,
        login: handleLogin,
        register: handleRegister,
        verify: handleVerify,
        verifySignin: handleVerifySignin,
        resend: handleResend,
    };

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
