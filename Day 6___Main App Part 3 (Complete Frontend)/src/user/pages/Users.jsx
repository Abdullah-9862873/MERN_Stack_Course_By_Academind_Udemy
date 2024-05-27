import React from "react";
import UsersList from "../components/UsersList";



const Users = () => {

    const USERS = [{id: 'us1', image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: "Abdullah", placeCount:3}];

    return (
        <UsersList items={USERS} />
    );
}

export default Users;