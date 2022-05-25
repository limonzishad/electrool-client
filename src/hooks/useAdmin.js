import { useEffect, useState } from "react";

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    useEffect((user) => {
        const email = user?.email;
        if (email) {
            fetch(`https://murmuring-ocean-75671.herokuapp.com/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                }
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin);
                });
        }
    }, [user])
    return [admin];
};

export default useAdmin;