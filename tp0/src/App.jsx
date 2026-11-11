
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import"./App.css"
import Destinations from "./components/Destinations/Destinations"
function App() {
  return (
    <div className="app">
    <Header/>
    <main>
      <Destinations/>
    </main>
    <Footer/>
    </div>
  );
}

export default App;
