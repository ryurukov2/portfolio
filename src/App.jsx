import { Projects } from "./components/Projects";

import ContactForm from "./components/ContactForm";
import MainLayout from "./components/MainLayout";
import About from "./components/About";
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <div className="App bg-gray-900 text-white">
      <BrowserRouter>
        <MainLayout>
          <div id="about">
            <About />
          </div>
          <div id="projects" className="mx-20 px-20">
            <Projects/>
          </div>
          <div id="contact">
            <ContactForm />
          </div>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
