import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return <div className="flex flex-col min-h-screen bg-background pt-20">
      <Header/>
      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet/>
      </main>
      <Footer/>
    </div>;
};

export default App;
