import './App.css'
import Landing from './pages/Landing'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Menu from './pages/Menu'
import Cart from './pages/Cart'
import LocationRestaurant from './pages/LocationRestaurant'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/:id/menu" element={<Menu />} />
                <Route path="/:id/location" element={<LocationRestaurant />} />
                <Route path="/:id/cart" element={<Cart />} />
            </Routes>
        </Router>
    )
}

export default App
