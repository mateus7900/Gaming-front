import { useSearchParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import TrendingTopics from "../../components/TrendingTopics";
import UserCard from "../../components/UserCard";
import "./styles.scss";

export default function UserPage() {
    const [queryParameters] = useSearchParams();
    const username = queryParameters.get("id")

    console.log(username);

    return (
        <div className="user-page">
            <Sidebar />
            <UserCard username={username as string} />
            <TrendingTopics />
        </div>
    );
}

