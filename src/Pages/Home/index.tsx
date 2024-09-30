import Header from "@/components/Header";
import SideNavbar from "./SideNavbar";
import { Outlet } from "react-router-dom";
const Home = () => {
  // const [isSideBarOpened, setIsSideBarOpened] = useState(false);
  // const handleMenuBtn = () => {
  //   setIsSideBarOpened(!isSideBarOpened);
  // };
  return (
    <div className="bg-surface-containerLowest">
      <Header />
      <main className="w-100% h-[calc(100vh-4rem)] flex ">
        <SideNavbar />
        <section className=" flex-[2] px-3 py-4 overflow-y-scroll">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default Home;
