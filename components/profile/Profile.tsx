import {Card} from "@/components/ui/card"
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar"
import Link from "next/link";

type ProfileProps = {
    avatar: string;
    name: string;
    title: string;
    orgName: string;
    profileUrl: string;
}

const Profile = ({avatar, name, title, orgName, profileUrl}: ProfileProps) => {
    return (
        <Card className="flex flex-col items-center p-6 bg-white dark:bg-gray-950 rounded-lg shadow-lg">
            <Avatar className="mb-4 h-32 w-32">
                <AvatarImage src={avatar} alt={name}/>
            </Avatar>
            <div className="text-center">
                <Link className="underline" href={profileUrl}>
                    <h3 className="text-lg font-semibold">{name}</h3>
                </Link>
                <p className="text-gray-500 dark:text-gray-400">{title}</p>
                <p className="text-gray-500 dark:text-gray-400">{orgName}</p>
            </div>
        </Card>
    );
};

export default Profile;
