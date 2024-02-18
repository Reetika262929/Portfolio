import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (

<>
    {/* // <Image src="https://cdn.pixabay.com/photo/2013/07/13/12/06/woman-159169_640.png "  width="100" height="100"/> */}
    <h2 className="absolute inset-0  text-center text-6xl mt-[100px]">
    I'm <span className="text-orange-700">Reetika</span><br />
    Frontend Developer
  </h2>
    <div className="relative text-center">
  <img className="display-block m-auto mt-[200px]" src="https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_640.png" width="30%" height="100%" />
 
</div>

<div >


</div>


    </>
  );
}
