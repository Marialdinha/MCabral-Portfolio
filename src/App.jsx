import Nav from './components/Nav.jsx';
import BackImg from './components/backImg.jsx';
import AboutMe from './components/aboutme.jsx';
import Work from './components/work.jsx';
import Contact from './components/contact.jsx';
import Footer from './components/footer.jsx';


function App() {

  return (
    <>
      <div>
        <Nav />
        <main>
          <BackImg />
          <div className="content-container ">
            <div className="content">
              <AboutMe />
              <Work />
              <Contact />
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
