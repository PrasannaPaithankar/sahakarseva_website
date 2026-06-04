import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StickyNavbar as Navbar } from './Navbar';
import { SimpleFooter as Footer } from './Footer';
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import Team from './Team.jsx';
import Downloads from './Downloads.jsx';
import LegalUpdates from './LegalUpdates.jsx';
import './App.css';

function App() {
    return (
        <>
            <BrowserRouter>
                <div className="flex flex-col min-h-screen">
                    <Navbar />
                    <main className="flex-grow">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/team" element={<Team />} />
                            <Route path="/downloads" element={<Downloads />} />
                            <Route path="/legal-updates" element={<LegalUpdates />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </BrowserRouter>
        </>
    )
}

export default App
