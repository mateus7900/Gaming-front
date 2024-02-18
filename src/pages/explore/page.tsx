import Sidebar from "../../components/Sidebar";
import UserList from "../../components/UserList";
import useUser from "../../context/UserContext";
import "./styles.scss";

export default function ExplorePage() {

    const { user } = useUser();


    return <div className="explore-page">
        <Sidebar />
        <UserList username={user?.username as string} />
    </div>
}
