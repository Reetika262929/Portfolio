import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/Components/Header/header";
import Body from "@/Components/Body/body";
import Footer from "@/Components/Footer/footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (

<>

    {/* // <Image src="https://cdn.pixabay.com/photo/2013/07/13/12/06/woman-159169_640.png "  width="100" height="100"/> */}
<Header />
<Body />
{/* <Footer /> */}
    </>
  );
}
