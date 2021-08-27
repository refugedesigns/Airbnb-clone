import Head from 'next/head'
import Image from 'next/image'
import Banner from "../components/Banner";
import Header from "../components/Header";
import LargeCard from '../components/LargeCard';
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";
import { useRef } from 'react';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import Footer from '../components/Footer';

export default function Home({ exploreData, cardsData }) {
   const target = useRef(null);


   const listenScrollEvent = (event) => {
    disableBodyScroll(target)
    const toLeft = event.deltaY < 0 && target.current.scrollLeft > 0;
    const toRight =
      event.deltaY > 0 &&
      target.current.scrollLeft <
        target.current.scrollWidth - target.current.clientWidth;

    if (toLeft || toRight) {
      event.preventDefault();
      event.stopPropagation();
 
      target.current.scrollLeft += event.deltaY;
    }
    enableBodyScroll(target)
   };
  return (
    <div>
      <Head>
        <title>Airbnb Clone 2.0</title>
        <meta name="description" content="Airbnb Clone 2.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((data, index) => (
              <SmallCard
                key={index}
                img={data.img}
                distance={data.distance}
                location={data.location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div
            ref={target}
            onWheel={listenScrollEvent}
            className="flex space-x-4 overflow-x-scroll scrollbar-hide p-3 -ml-3"
          >
            {cardsData.map((data, index) => (
              <MediumCard key={index} img={data.img} title={data.title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Whislist curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
      <div className="mx-auto bg-gray-100">
        <Footer />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );
  const cardsData = await fetch("https://links.papareact.com/zp1").then((response) => response.json()
  );
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
