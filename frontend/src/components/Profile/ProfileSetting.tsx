import { flexCenter } from '@/Theme/commonStyle'
import { Box, Button, Link, Stack, Typography } from '@mui/material'
import { BsGlobe } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaRegUserCircle } from 'react-icons/fa'

const ProfileSetting = () => {
    return (
        <Box sx={flexCenter}>
            <Link href={'#'} underline='none'>
                <Typography variant='h1' sx={{ color: 'black'}}>Airbnb your home</Typography>
            </Link>
            <Stack>
                <Button
                    sx={{
                        ':hover': {
                            borderRadius: '50%',
                        },
                    }}
                >
                    <BsGlobe size={24} />
                </Button>
                <Button
                    sx={{
                        borderRadius: 10,
                        border: '1px solid #ddd',
                        px: 1,
                    }}
                >
                    <Stack>
                        <AiOutlineMenu size={20} />
                        <FaRegUserCircle size={20} />
                    </Stack>
                </Button>
            </Stack>
        </Box>
    )
}

export default ProfileSetting
