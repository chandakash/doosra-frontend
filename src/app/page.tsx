import TopPicks from "./components/home/TopPicks";
import UpcomingMatches from "./components/home/UpcomingMatches";
import Banner from "./components/layout/Banner";
import BottomNavigation from "./components/layout/BottomNavigation";
import Header from "./components/layout/Header";
import SearchBar from "./components/layout/SearchBar";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] text-white pb-16">
      <Header />
      <div className="px-4 py-2">
        <Banner />
        <SearchBar />
        <UpcomingMatches />
        <TopPicks />
      </div>
      <BottomNavigation />
    </main>
  )
}