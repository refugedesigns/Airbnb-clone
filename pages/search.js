import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";

export default function Search({searchResults}) {
    const router = useRouter()

    const  { location, startDate, endDate, numOfGuests } = router.query
    const formattedStartDate = format(new Date(startDate), "dd MMMM yy")
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy")
    const range = `${formattedStartDate} - ${formattedEndDate}`


    return (
        <div>
        <Header placeholder={`${location} | ${range} | ${numOfGuests}`} />
        <main className="flex min-h-screen">
            <section className="flex-grow pt-14 px-6">
            <p className="text-xs">300+ Stays - {range} - for {numOfGuests} guests</p>
            <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
            <div className="hidden lg:inline-flex mb-5 text-gray-800 whitespace-nowrap space-x-3">
                <p className="button">
                Cancellation Flexibility
                </p>
                <p className="button">Type of Place</p>
                <p className="button">Price</p>
                <p className="button">Rooms and Beds</p>
                <p className="button">More filters</p>
            </div>
            <div className="flex flex-col">
            {searchResults?.map((data, index) => (
                <InfoCard
                key={index}
                img={data.img}
                location={data.location}
                title={data.title}
                description={data.description}
                price={data.price}
                total={data.total}
                star={data.star}
                />
            ))}
            </div>
            </section>
        </main>
        <div className="bg-gray-100">
            <Footer />
        </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const searchResults = await fetch("https://links.papareact.com/isz").then(res => res.json())

    return {
        props: {
            searchResults
        }
    }
}