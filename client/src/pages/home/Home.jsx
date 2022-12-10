import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import "./home.css"
import Rightbar from "../../components/rightbar/Rightbar";


export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Feed/>
        <Rightbar/>
      </div>
    </>
  );
}
