import { Box, Typography } from '@mui/material'

export default function CrudLocation() {
    const mapSrc =
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.007036204743!2d-77.06850528445155!3d-11.990814090197665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDU5JzI3LjAiUyA3N8KwMDMnNTguNyJX!5e0!3m2!1sen!2spe!4v1639949015639!5m2!1sen!2spe'

    return (
        <Box mt={3}>
            <Typography variant="h1" pt={1} textAlign={'center'}>
                Ubicacion
            </Typography>
            <Box mt={2} borderRadius={3}>
                <iframe
                    src={mapSrc}
                    width="100%"
                    style={{ border: 0, borderRadius: 12, height: 'calc(100vh - 160px)' }}
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </Box>
        </Box>
    )
}
