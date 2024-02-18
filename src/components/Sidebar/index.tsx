import './styles.scss';
import UserLabel from "../UserLabel";
import SidebarContent from "./SidebarContent";

export default function Sidebar() {

    return <div className="sidebar">
        <SidebarContent />
        <UserLabel />
    </div>
}
