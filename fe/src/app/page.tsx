import FooterMenu from "@/components/Footer/FooterMenu";
import Header from "@/components/Header/Header";
import OptionTab from "@/components/OptionTab/OptionTab";
import LocationCards from "@/components/Rooms/LocationCards";
import { Typography, Box, Container } from "@mui/material";
import { displayOnDesktop } from "@/Theme/commonStyle";
import Footer from "@/components/Footer/Footer";

export default function Home() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "100vh",
            }}
        >
            <Box
                position={"fixed"}
                zIndex={10}
                sx={{ background: "white", width: "100%" }}
            >
                <Header />
                <OptionTab />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    height: 100,
                    overflowY: "scroll",
                    marginTop: "200px",
                }}
                zIndex={9}
            >
                <Container maxWidth='xl' sx={{ md: 3 }}>
                    <LocationCards />
                    <Box
                        sx={{
                            display: { xs: "flex", md: "none" },
                        }}
                    ></Box>
                </Container>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }} zIndex={20}>
                <FooterMenu />
            </Box>
            <Box sx={displayOnDesktop}>
                <Footer />
            </Box>
        </Box>
    );
}
