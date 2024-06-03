import './App.css'
import Landing from './pages/Landing'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Menu from './pages/client/Menu'
import Cart from './pages/client/Cart'
import LocationRestaurant from './pages/client/LocationRestaurant'

import PanelAdmin from './pages/admin/Panel'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/:id/menu" element={<Menu />} />
                <Route path="/:id/location" element={<LocationRestaurant />} />
                <Route path="/:id/cart" element={<Cart />} />

                <Route path="/auth/admin/:id" element={<PanelAdmin />} />
                <Route path="/auth/:id" element={<h1>client vista</h1>} />
            </Routes>
        </Router>
    )
}

export default App
