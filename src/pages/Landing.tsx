import { Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Landing() {
    const navigate = useNavigate()
    return (
        <Box border={'1px solid red'}>
            <h1>LANDING</h1>
            <Button onClick={() => navigate('/131231/menu')}>fsfs</Button>
        </Box>
    )
}
