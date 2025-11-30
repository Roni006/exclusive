import Banner from "./components/Banner/Banner"
import BestSellingProduct from "./components/BestSellingProduct/BestSellingProduct"
import BrowseCategory from "./components/BrowseCategory/BrowseCategory"
import Cart from "./components/Cart/Cart"
import ExploreProduct from "./components/ExploreProduct/ExploreProduct" 
import NewArrival from "./components/NewArrival/NewArrival"

function App() {
  return (
    <> 
      <Banner />
      <NewArrival />
      <BrowseCategory />
      <BestSellingProduct />
      <ExploreProduct />  
    </>
  )
}

export default App
