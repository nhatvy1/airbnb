import { Box, Typography } from '@mui/material'
import { FaAirbnb } from 'react-icons/fa'
import { pink } from '@mui/material/colors'
import { flexCenter } from '@/Theme/commonStyle'

const Logo = () => {
    return (
        <Box sx={flexCenter}>
            <FaAirbnb size={40} color={pink[500]} />
            <Typography
                sx={{
                    ml: 1,
                    color: (theme) => theme.palette.secondary.main,
                    fontSize: '25px',
                    fontWeight: 900,
                    textTransform: 'lowercase'
                }}
                component={'h3'}
            >
                airbnb
            </Typography>
        </Box>
    )
}

export default Logo
