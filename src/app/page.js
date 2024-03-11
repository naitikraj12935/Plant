import Image from "next/image";
 import Navbar from "./Components/Nevbar";
 import Input from "./Components/Input";
 import Test from "./Components/Card";
export default function Home() {
  return (
   <div className="bg-gray-50 min-h-screen flex flex-col items-center gap-8">
     <Navbar/>
     <Input/>
     <Test/>
   </div>
  );
}
