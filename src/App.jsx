import Banner from "./components/Banner/Banner"
import BestSellingProduct from "./components/BestSellingProduct/BestSellingProduct"
import BrowseCategory from "./components/BrowseCategory/BrowseCategory"
import ExploreProduct from "./components/ExploreProduct/ExploreProduct"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import NewArrival from "./components/NewArrival/NewArrival"

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <NewArrival />
      <BrowseCategory />
      <BestSellingProduct />
      <ExploreProduct />
      <Footer />
    </>
  )
}

export default App
