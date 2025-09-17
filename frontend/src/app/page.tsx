import Landingpage from "./components/landingpage/landingpage";
import Next from "./components/landingpage/next";
import { StickyCard002 } from "./components/landingpage/skiper17";
import {CardCarousel } from "./components/landingpage/card-carousel";
 const images = [
    { src: "/hah1.png", alt: "Image 1" },
    { src: "/hi1.png", alt: "Image 2" },
    { src: "/hi2.png", alt: "Image 3" },
  ]

const cards = [
  {
    id: 1,
    image: "/Gemini_Generated_Image_mt4xcemt4xcemt4x.png",
    alt: "Jason and Lucia have always known the deck is stacked against them.",
  },
  {
    id: 2,
    image: "/Gemini_Generated_Image_t4ji7ot4ji7ot4ji.png",
    alt: "Description 2",
  },
  {
    id: 3,
    image: "/ch.png",
    alt: "Description 2",
  },
  {
    id: 4,
    image: "/ch1.png",
    alt: "Description 2",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <Landingpage />
        <Next/>
          <CardCarousel
        images={images}
        autoplayDelay={2000}
        showPagination={true}
        showNavigation={true}
      />
        <div className="h-screen w-full">
          <StickyCard002 cards={cards} />
           
        </div>
      
      </div>
      

    </main>
  );
}