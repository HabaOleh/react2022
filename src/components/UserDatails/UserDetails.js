import React from 'react';
import {Button} from "../Button/Button";

const UserDetails = ({user}) => {
    const {
        id,
        name,
        username,
        email,
        phone,
        website,
        address: {street, suite, city, zipcode, geo: {lat, lng}},
        company: {name:companyName,catchPhrase, bs}
    } = user
    return (
        <div>
            <strong>{id}. {name}</strong>
            <div>Username: {username} </div>
            <div>Email: {email}</div>
            <div>Phone: {phone}</div>
            <div>Address: {street}, {suite}, {city}, {zipcode}</div>
            <div>GEO: {lat}, {lng}</div>
            <div>Site: {website}</div>
            <div>Company: {companyName}</div>
            <div>Catch Phrase: {catchPhrase}</div>
            <div>BS: {bs}</div>
            <Button to={"posts"}>Get User Post</Button>
        </div>
    );
};

export {UserDetails};
