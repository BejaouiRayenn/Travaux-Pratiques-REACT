
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import"./App.css"
import Destinations from "./components/Destinations/Destinations"
import Reservation from "./components/Reservation/Reservation"
function App() {
  return (
    <div className="app">
    <Header/>
    <main>
      <Reservation/>
    </main>
    <Footer/>
    </div>
  );
}

export default App;
