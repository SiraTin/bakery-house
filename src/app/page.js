import Image from "next/image";
import Homesection from "./home/home";
import Navbar from "./layouts/navbar";
import Footer from "./layouts/footer";

export const metadata = {
  title: "Bakery House` - Home",
  description: "Generated by create next app",
};

export default function Home() {
  const pageId = 1;
  return (
    <>
      <Navbar pageId = {pageId}/>
      <main className="bg-white w-full min-h-screen">
        <Homesection />
      </main>
      <Footer/>
    </>
  );
}
