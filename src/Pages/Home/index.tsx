import Header from "@/components/Header";
import SideNavbar from "./SideNavbar";
import { useState } from "react";
import { Paper } from "@/components/ui/paper";
const Home = () => {
  const [isSideBarOpened, setIsSideBarOpened] = useState(false);
  const handleMenuBtn = () => {
    setIsSideBarOpened(!isSideBarOpened);
  };
  return (
    <>
      <Header onMenuClick={handleMenuBtn} />
      <main className="w-100% h-[calc(100vh-4rem)] flex">
        <SideNavbar open={isSideBarOpened} onChange={setIsSideBarOpened} />
        <section className=" flex-[2] p-8">
          <Paper elevation={4} className="w-full h-96"></Paper>
        </section>
      </main>
    </>
  );
};

export default Home;
