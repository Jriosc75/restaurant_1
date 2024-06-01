import { Box, Typography } from '@mui/material'
import CardBurger from './card/CardBurger'
import style from './menu.module.css'
export default function CrudMenu() {
    return (
        <Box mt={0} mb={4}>
            <Box mt={2}>
                <Box position={'relative'} mt={3}>
                    <Typography variant="h1" pt={1} textAlign={'center'}>
                        Hamburguesas
                    </Typography>
                    {/*                     <Box position={'absolute'} right={1} top={0} width={300}>
                        <SelectInputPrimary
                            options={[
                                { value: '1', label: 'Hamburguesas' },
                                { value: '2', label: 'Shawarmas' },
                                { value: '3', label: 'Bebidas' },
                            ]}
                        />
                    </Box> */}
                </Box>
                <Box className={style.containergrid} mt={{ md: 4, xs: 2 }}>
                    <div className={style.itemgrid}>
                        <CardBurger />
                    </div>
                    <div className={style.itemgrid}>
                        <CardBurger />
                    </div>
                    <div className={style.itemgrid}>
                        <CardBurger />
                    </div>
                    <div className={style.itemgrid}>
                        <CardBurger />
                    </div>
                    <div className={style.itemgrid}>
                        <CardBurger />
                    </div>
                </Box>
            </Box>

            <Box mt={7}>
                <Box position={'relative'} mt={3}>
                    <Typography variant="h1" pt={1} textAlign={'center'}>
                        Alitas brosters
                    </Typography>
                </Box>
                <Box className={style.containergrid} mt={{ md: 4, xs: 2 }}>
                    <div className={style.itemgrid}>
                        <CardBurger />
                    </div>
                    <div className={style.itemgrid}>
                        <CardBurger />
                    </div>
                    <div className={style.itemgrid}>
                        <CardBurger />
                    </div>
                    <div className={style.itemgrid}>
                        <CardBurger />
                    </div>
                    <div className={style.itemgrid}>
                        <CardBurger />
                    </div>
                </Box>
            </Box>

            <Box mt={7}>
                <Box position={'relative'} mt={3}>
                    <Typography variant="h1" pt={1} textAlign={'center'}>
                        Shawarmas
                    </Typography>
                </Box>
                <Box className={style.containergrid} mt={4}>
                    <div className={style.itemgrid}>
                        <CardBurger />
                    </div>
                    <div className={style.itemgrid}>
                        <CardBurger />
                    </div>
                    <div className={style.itemgrid}>
                        <CardBurger />
                    </div>
                    <div className={style.itemgrid}>
                        <CardBurger />
                    </div>
                    <div className={style.itemgrid}>
                        <CardBurger />
                    </div>
                </Box>
            </Box>

            <Box mt={7}>
                <Box position={'relative'} mt={3}>
                    <Typography variant="h1" pt={1} textAlign={'center'}>
                        Shawarmas
                    </Typography>
                </Box>
                <Box className={style.containergrid} mt={{ md: 4, xs: 2 }}>
                    <div className={style.itemgrid}>
                        <CardBurger />
                    </div>
                    <div className={style.itemgrid}>
                        <CardBurger />
                    </div>
                    <div className={style.itemgrid}>
                        <CardBurger />
                    </div>
                    <div className={style.itemgrid}>
                        <CardBurger />
                    </div>
                    <div className={style.itemgrid}>
                        <CardBurger />
                    </div>
                </Box>
            </Box>
        </Box>
    )
}
