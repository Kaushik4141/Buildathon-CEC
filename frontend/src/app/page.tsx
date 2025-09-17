import Image from "next/image";
import Landingpage from "./components/landingpage/landingpage";
import Next from "./components/landingpage/next";

export default function Home() {
  return (
    <main>
      <Landingpage />
      <Next/>
    
    </main>
  );
}