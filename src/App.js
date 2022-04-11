import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './pages/Common/Footer/Footer';
import Header from './pages/Common/Header/Header';
import EditHero from './pages/Dashboard/Admin/Hero/EditHero';
import MakeHero from './pages/Dashboard/Admin/Hero/MakeHero';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import Home from './pages/Home/Home/Home';

function App() {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />}>
                        <Route path="hero/add" element={<MakeHero />} />
                        <Route path="hero/edit/:id" element={<EditHero />} />
                    </Route>
                </Routes>
                <Footer></Footer>
            </Router>
        </div>
    );
}

export default App;
