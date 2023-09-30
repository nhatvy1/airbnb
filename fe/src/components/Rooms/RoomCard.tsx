import { carouselImage, fixedIcon } from "@/Theme/commonStyle";
import { Box } from "@mui/material";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/scrollbar';
import "swiper/css";
import "../../styles/style.css";

const RoomCard = ({ location }: { location: any }) => {
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = location.locationImages.length; //so that ww know how many dots

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1); // jumps when click the next arrow
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1); // jumps when click back arrow
    };

    const handleStepChange = (step: any) => {
        setActiveStep(step); // handle swipe change
    };

    return (
        <Box sx={{ flexGrow: 1, position: "relative" }}>
            <Box sx={{ fixedIcon, cursor: "pointer" }}>
                <FaRegHeart size={24} color='#fff' />
            </Box>
            <Swiper
                navigation={true}
                pagination={true}
                modules={[Pagination, Navigation]}
                className='mySwiper swiperCustom'
            >
                {location.locationImages.map((item: any, index: any) => (
                    <SwiperSlide key={index}>
                        <div key={item.id}>
                            <Box
                                component='img'
                                sx={carouselImage}
                                src={item.url}
                                alt={item.id}
                            ></Box>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default RoomCard;
