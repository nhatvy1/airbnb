import Header from '@/components/Header/Header'
import OptionTab from '@/components/OptionTab/OptionTab'
import { Typography, Box } from '@mui/material'

export default function Home() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
            }}
        >
            <Box>
                <Header />
                <OptionTab />
            </Box>
        </Box>
    )
}
