import Navbar from "./components/Navbar";
import Header from "./components/header/Header";
import Faq from "./components/Faq";
import Solavatar from "./components/Solavatar";
import Footer from "./components/Footer";
import Gotop from "./components/Gotop";


function App() {
  return (
    <>
      <Navbar />
      <main className='gradient gradient-lottery'>
        <div className='main-layout with-login'>
          <div className='main-container'>
          <Header/>
          <Faq/>
          </div>
        </div>
      </main>
      <Solavatar/>
      <Footer/>
      <Gotop/>
    </>
  )
}

export default App;
