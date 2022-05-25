import React from "react";
import { useQuery } from "react-query";
import Loading from "../../shared/Loading/Loading";

const AllUsers = () => {
    const { data: users, isLoading } = useQuery('users', () => fetch('https://murmuring-ocean-75671.herokuapp.com/users', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    let serial = 1;

    const makeAdmin = (email) => {
        fetch(`https://murmuring-ocean-75671.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(result => {
            });
    }

    return (
        <div>
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th className="text-center">USER EMAIL</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user =>
                            <tr key={user._id}>
                                <th>{serial++}</th>
                                <td className="text-center text-lg">{user.email}</td>
                                <td>{<button disabled={user.role === 'admin'} onClick={() => makeAdmin(user.email)} className="btn btn-xs hover:bg-green-500">Make Admin</button>}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;