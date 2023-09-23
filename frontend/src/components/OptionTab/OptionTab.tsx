'use client'
import { Box, Container, Tabs, Tab } from '@mui/material'
import { useState } from 'react'

const OptionTab = () => {
    const [value, setValue] = useState(0)

    const handleChange = (event:any, newValue: any)=> {
        setValue(newValue)
    }

    return (
        <Container maxWidth='xl'>
            <Box
                sx={{
                    display: 'flex',
                    flexGrow: 1,
                    px: { xs: 0, md: 2 },
                    alignItems: 'center',
                    my: 2,
                }}
            >
                <Tabs
                    value={value}
                >
                    value={value}
                    {/* onChange={handleChange} */}
                </Tabs>
            </Box>
        </Container>
    )
}

export default OptionTab
