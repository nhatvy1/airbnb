'use client'
import { Box, Container } from '@mui/material'
import { flexBetweenCenter, displayOnDesktop, dFlex } from '@/Theme/commonStyle'
import Logo from '../Logo/Logo'
import ProfileSetting from '../Profile/ProfileSetting'
import LocationSearch from '../Search/LocationSearch'
import MobileSearch from '../Search/MobileSearcj'

const Header = () => {
    return (
        <Box
            sx={{
                ...dFlex,
                minHeight: 70,
                borderBottom: '1px solid #ddd',
            }}
        >
            <Container
                maxWidth='xl'
                sx={{
                    ...flexBetweenCenter,
                    minHeight: 90,
                    px: 2,
                }}
            >
                <Box sx={displayOnDesktop}>
                    <Logo />
                </Box>
                <Box sx={displayOnDesktop}>
                    <LocationSearch />
                </Box>
                <Box sx={displayOnDesktop}>
                    <ProfileSetting />
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <MobileSearch />
                </Box>
            </Container>
        </Box>
    )
}

export default Header
