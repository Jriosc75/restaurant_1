import { Box, Grid, Typography } from '@mui/material'

export default function CrudLocation() {
    const mapSrc =
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.007036204743!2d-77.06850528445155!3d-11.990814090197665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDU5JzI3LjAiUyA3N8KwMDMnNTguNyJX!5e0!3m2!1sen!2spe!4v1639949015639!5m2!1sen!2spe'

    return (
        <Box py={{ md: 3, sm: 4, xs: 0 }} position={'relative'}>
            <Box maxWidth={1100} mx={'auto'}>
                <Grid container columns={12} spacing={2}>
                    <Grid item md={6} sm={6} xs={12}>
                        <Box display={'flex'} justifyContent={'space-between'}>
                            <Box>
                                <Typography variant="h3">Distrito</Typography>
                                <Typography variant="subtitle1"> Los Olivos</Typography>
                            </Box>
                            <Box mr={{ md: 20, sm: 8, xs: 8 }}>
                                <Typography variant="h3">Celular</Typography>
                                <Typography variant="subtitle1"> 942194555</Typography>
                            </Box>
                        </Box>
                        <Box mt={4}>
                            <Typography variant="h3">Direccion</Typography>
                            <Typography variant="subtitle1"> Calle las burguers</Typography>
                        </Box>
                        <Box mt={4} width={'60%'}>
                            <Typography variant="h3">Horario de atencion</Typography>
                            <Typography
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                                variant="subtitle1"
                            >
                                <span>Lunes</span>
                                <span style={{ marginLeft: 60 }}> 8:00 : 18:10</span>
                            </Typography>
                            <Typography
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                                variant="subtitle1"
                            >
                                <span>Martes</span>
                                <span style={{ marginLeft: 60 }}> 8:00 : 18:10</span>
                            </Typography>
                            <Typography
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                                variant="subtitle1"
                            >
                                <span>Miercoles</span>
                                <span style={{ marginLeft: 60 }}> 8:00 : 18:10</span>
                            </Typography>
                            <Typography
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                                variant="subtitle1"
                            >
                                <span>Jueves</span>
                                <span style={{ marginLeft: 60 }}> 8:00 : 18:10</span>
                            </Typography>
                            <Typography
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                                variant="subtitle1"
                            >
                                <span>Viernes</span>
                                <span style={{ marginLeft: 60 }}> 8:00 : 18:10</span>
                            </Typography>
                            <Typography
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                                variant="subtitle1"
                            >
                                <span>Sabado</span>
                                <span style={{ marginLeft: 60 }}> 8:00 : 18:10</span>
                            </Typography>
                            <Typography
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                                variant="subtitle1"
                            >
                                <span>Domingo</span>
                                <span style={{ marginLeft: 60 }}> 8:00 : 18:10</span>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={6} sm={6} xs={12}>
                        <Box borderRadius={3}>
                            <iframe
                                src={mapSrc}
                                width="100%"
                                style={{
                                    border: 0,
                                    borderRadius: 12,
                                    height: 'calc(100vh - 160px)',
                                }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
