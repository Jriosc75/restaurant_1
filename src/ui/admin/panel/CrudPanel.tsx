import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function CrudPanel() {
    const navigate = useNavigate()
    return (
        <div>
            <Button variant="contained" color="secondary" onClick={() => navigate('/12121/menu')}>
                ir a mi enlace
            </Button>
        </div>
    )
}
