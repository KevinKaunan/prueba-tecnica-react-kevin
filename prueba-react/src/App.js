import { DataContextProvider } from "context/DataContext";
import StaticContext from "context/StaticContex";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Inicio from "pages/Inicio";

import { Link, Route } from "wouter";
import Series from "pages/Series";
import Movies from "pages/Movies";
function App() {
  return (
    <>
      <StaticContext.Provider value={{ name: "Kevin", wishMeLuck: true }}>
        <div className='App'>
          <Link to='/'>
            <Header />
          </Link>
          <DataContextProvider>
            <Route component={Inicio} path='/' />
            <Route component={Series} path='/series' />
            <Route component={Movies} path='/movies' />
          </DataContextProvider>
        </div>
      </StaticContext.Provider>
      <Footer />
    </>
  );
}

export default App;
