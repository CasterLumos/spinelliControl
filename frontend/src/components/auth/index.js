import React, { useEffect, useState } from "react";

export default function Auth(props) {
    const [auth, setAuth] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem("userToken");
        if (token !== null) {
            fetch(`${process.env.URL_API}/api/authenticated/`, {
                headers: { Authorization: `Bearer ${token}` },
            }).then((res) => {
                if (res.ok) {
                    setAuth(true);
                } else if (res.status !== 200) {
                    window.location.href = process.env.URL_APP;
                }
            });
        } else {
            localStorage.removeItem("userToken");
            window.location.href = process.env.URL_APP;
        }
    }, []);
    if (auth) {
        return <>{props.children}</>;
    } else {
        return <h1></h1>;
    }
}
