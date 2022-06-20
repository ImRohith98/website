import Navbar from "./components/navbar";
import GlobalStyle from "./services/globalstyles";
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from "./components/footer";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
        <Router>
            <GlobalStyle />
            <Navbar />
            <Home />
            <Footer />
       </Router>
    </div>
  );
}

export default App;
