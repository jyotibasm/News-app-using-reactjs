import {useState} from "react"
import { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSec from "./components/HeroSec";
import MainSec from "./components/MainSec";
import Pagination from "./components/PaginationSec";
import Spinner from "./components/Spinner";


export default function App() {
  const [category, setCategory] = useState("general")
  const [articles,setArticles] = useState([])
  const [isLoad,setIsLoad] = useState(true)

  let [count, setCount] = useState(1);

  const hangleNext = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  const hanglePrevious = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleBusiness = () => {
    setCategory("business");
  }
  const handleTechnology = () => {
    setCategory("technology");
  }
  const handleHealth = () => {
    setCategory("health");
  }
  const handleSports = () => {
    setCategory("sports");
  }

  useEffect(()=>{
    setIsLoad(true)
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=5&page=${count}&apiKey=e9bd1b5ac250491cb1a6b6666897aa7f`
    fetch(url).then(res=>{return res.json()}).then(data =>{setArticles(data.articles)}).then(()=>{
      setIsLoad(false)
    })
  },[category,count])

  return (
    <div className="h-screen w-full">
      <Header 
      handleBusiness={handleBusiness} 
      handleTechnology={handleTechnology} 
      handleHealth={handleHealth} 
      handleSports={handleSports}
      />
      <HeroSec />
      <Pagination 
      hanglePrevious={hanglePrevious}
      hangleNext={hangleNext}
      count={count}
      />
      <MainSec data={articles} isLoad={isLoad}/>
      <Footer />
    </div>
  );
}
