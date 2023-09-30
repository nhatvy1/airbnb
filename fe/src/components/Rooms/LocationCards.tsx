'use client'
import { useState } from "react"
import { locations as cardLocations } from "@/data/mock-data"
import { Box, Grid } from "@mui/material"
import RoomCard from "./RoomCard"

const LocationCards = ()=> {
    const [cards] = useState(cardLocations)
    if (!cardLocations.length) {
        return null
    }

    return (
        <Box sx={{ mx: 2 }}>
            <Grid container rowSpacing={3} columnSpacing={3}>
                {cards.map((location)=> (
                    <Grid key={location.id} item xs={12} sm={4} md={4} lg={3}>
                        <RoomCard location={location}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default LocationCards