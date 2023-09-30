'use client'
import { locationsTab } from '@/data/mock-data'
import { Box, Container, Tabs, Tab, tabsClasses, Button } from '@mui/material'
import { useState } from 'react'
import { FaFilter } from 'react-icons/fa'


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
                    onChange={handleChange}
                    variant='scrollable'
                    scrollButtons
                    sx={{
                        [`& .${tabsClasses.scrollButtons}`]: {
                            '&.Mui-disabled': { opacity: 0.3 },
                        },
                    }}
                >
                    {locationsTab.map((tab) => {
                        return (
                            <Tab
                                key={tab.id}
                                icon={tab.icon}
                                label={tab.label}
                                sx={{ fontSize: '0.7rem', fontWeight: 'bold'}}
                            />
                        )
                    })}
                </Tabs>
                <Button
                    sx={{
                        display: { xs: 'none', md: 'block' },
                        border: '1px solid #ddd',
                        minWidth: 90,
                        justifyContent: 'space-between',
                        borderRadius: 2,
                        textTransform: 'capitalize',
                        py: 1,
                        color: 'theme.palette.text.primary',
                    }}
                >
                    <FaFilter /> Filters
                </Button>
            </Box>
        </Container>
    )
}

export default OptionTab
