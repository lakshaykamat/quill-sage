import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import Image from "next/image";
import { MdCreate } from "react-icons/md";
type Props = {
    avatar: string;
    bio: string;
    username: string;
    inputBox: {
        status: boolean;
        text: string;
    } | null;
    setInputBox: Dispatch<
        SetStateAction<{
            status: boolean;
            text: string;
        }>
    > | null;
    editBio(event: FormEvent<HTMLFormElement>): Promise<void>;
};

const Header = ({
    avatar,
    bio,
    username,
    inputBox,
    setInputBox,
    editBio,
}: Props) => {
    return (
        <div className="flex items-center gap-5 my-6">
            <Image
                src={avatar}
                className="rounded-full"
                width={150}
                height={150}
                alt="User Avatar"
            />
            <div>
                <h2>{username}</h2>
                {inputBox && setInputBox ? (
                    inputBox.status ? (
                        <form onSubmit={editBio}>
                            <input
                                onChange={(e) =>
                                    setInputBox({ ...inputBox, text: e.target.value })
                                }
                                onBlur={() => setInputBox({ ...inputBox, status: false })}
                                type="text"
                                className="outline-none bg-inherit focus:ring-1"
                                placeholder="New Bio"
                            />
                        </form>
                    ) : (
                        <span className="flex items-center gap-2 text-sm text-gray-500">
                            {bio}
                            <MdCreate
                            className=""
                                onClick={() => setInputBox({ ...inputBox, status: true })}
                            />
                        </span>
                    )
                ) : (
                    <span className="text-sm">{bio}</span>
                )}
            </div>
        </div>
    );
};

export default Header;
