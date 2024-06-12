import './App.css'
import Landing from './pages/Landing'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Menu from './pages/client/Menu'
import LocationRestaurant from './pages/client/LocationRestaurant'
import PanelAdmin from './pages/admin/Panel'
import CrudFoods from './ui/clients/menu/CrudFoods'
import Profile from './pages/client/Profile'
import Cart from './pages/client/Cart'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/:id/menu" element={<Menu />} />
                <Route path="/:id/menu1" element={<CrudFoods />} />
                <Route path="/:id/location" element={<LocationRestaurant />} />
                <Route path="/client/profile" element={<Profile />} />
                <Route path="/client/cart" element={<Cart />} />

                <Route path="/auth/admin/:id" element={<PanelAdmin />} />
                <Route path="/auth/:id" element={<h1>client vista</h1>} />
            </Routes>
        </Router>
    )
}

export default App
