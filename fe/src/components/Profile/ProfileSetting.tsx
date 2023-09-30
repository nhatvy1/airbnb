import { flexCenter } from "@/Theme/commonStyle";
import {
    Box,
    Button,
    Divider,
    Link,
    Menu,
    MenuItem,
    Stack,
    Typography,
} from "@mui/material";
import { BsGlobe } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";
import Login from "../Auth/Login";

const ProfileSetting = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [openModal, setOpenModal] = useState(false)
    const handleOpenModal = ()=> setOpenModal(true)
    const handleCloseModal = ()=> setOpenModal(false)

    return (
        <Box sx={flexCenter}>
            <Link href={"#"} underline='none'>
                <Typography variant='h1' sx={{ color: "black" }}>
                    Airbnb your home
                </Typography>
            </Link>
            <Stack>
                <Button
                    sx={{
                        ":hover": {
                            borderRadius: "50%",
                        },
                    }}
                >
                    <BsGlobe size={24} />
                </Button>
                <Button
                    sx={{
                        borderRadius: 10,
                        border: "1px solid #ddd",
                        px: 1,
                    }}
                    id='basic-button'
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup='true'
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                >
                    <Stack>
                        <AiOutlineMenu size={20} />
                        <FaRegUserCircle size={20} />
                    </Stack>
                </Button>
                <Menu
                    anchorEl={anchorEl}
                    id='account-menu'
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: "visible",
                            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                            mt: 1.5,
                            "& .MuiAvatar-root": {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            "&:before": {
                                content: '""',
                                display: "block",
                                position: "absolute",
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: "background.paper",
                                transform: "translateY(-50%) rotate(45deg)",
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                    <MenuItem
                        onClick={handleOpenModal}
                    >
                        <Typography
                            sx={{ fontSize: "0.8rem", fontWeight: "bold" }}
                        >
                            Sign up
                        </Typography>
                    </MenuItem>
                    <MenuItem>
                        <Typography sx={{ fontSize: "0.8rem" }}>
                            Login
                        </Typography>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <Typography sx={{ fontSize: "0.8rem" }}>
                            Airbnb your home
                        </Typography>
                    </MenuItem>
                    <MenuItem>
                        <Typography sx={{ fontSize: "0.8rem" }}>
                            Help center
                        </Typography>
                    </MenuItem>
                </Menu>
            </Stack>
            <Login open={openModal} handleClose={handleCloseModal}/>
        </Box>
    );
};

export default ProfileSetting;
