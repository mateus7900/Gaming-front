import './styles.scss'
import Sidebar from "../../components/Sidebar";
import Timeline from "../../components/Timeline";
import TrendingTopics from "../../components/TrendingTopics";

export default function HomePage() {
    return <div className="home-page">
        <Sidebar />
        <Timeline />
        <TrendingTopics />
    </div>
}
