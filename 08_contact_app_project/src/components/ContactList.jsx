import React from "react";
import { usePhoneBookStore } from "../stores/usePhoneBookStore";

const ContactList = () => {
    const { phoneBook } = usePhoneBookStore();
    console.log(phoneBook);
    return (
        <div>
            {phoneBook.map((item) => (
                <div key={item.id}>
                    <div>{item.name}</div>
                    <div>{item.phoneNumber}</div>
                </div>
            ))}
        </div>
    );
};
export default ContactList;
