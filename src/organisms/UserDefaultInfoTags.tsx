import * as React from "react";
import UserEmailTag from "../atoms/UserEmailTag";
import UserNameTag from "../atoms/UserNameTag";

interface IProps {
    name: string;
    email: string;
}
const UserDefaultInfoTags = ({name, email}: IProps) => (
    <div>
        <UserNameTag>{name}</UserNameTag>
        <UserEmailTag>{email}</UserEmailTag>
    </div>
);

export default UserDefaultInfoTags;