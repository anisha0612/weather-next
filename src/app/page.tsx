import Header from "@ui/shared/Header/Header";
import HomePage from "@ui/Pages/HomePage";

export default function Home() {
  
  return (
  <div className="min-h-screen bg-[#0b0f17] text-white">
        <Header />
        <div className="px-4 py-6 sm:px-6 lg:px-8">
          <HomePage />
        </div>
  </div>
  );
}
