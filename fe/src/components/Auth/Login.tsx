import {
    Box,
    Button,
    Divider,
    FormControl,
    MenuItem,
    Modal,
    OutlinedInput,
    Paper,
    Select,
    SelectChangeEvent,
    TextField,
    Typography,
} from "@mui/material";
import { Theme, useTheme } from "@mui/material/styles";
import { useState } from "react";
import { GrFacebook } from "react-icons/gr";
import { FcGoogle } from 'react-icons/fc'
import { AiFillApple, AiOutlineMail } from 'react-icons/ai'
import { btnContinue, btnIcon, btnRelative, btnText, formBtnLogin } from "@/Theme/commonStyle";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    borderRadius: "15px !important",
    boxShadow: 24,
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const Login = ({ open, handleClose }: { open: boolean; handleClose: any }) => {
    const theme = useTheme();
    const [personName, setPersonName] = useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === "string" ? value.split(",") : value
        );
    };
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
        >
            <Box sx={style}>
                <Paper>
                    <Typography
                        variant='h1'
                        sx={{
                            fontSize: "1rem",
                            fontWeight: "bold",
                            padding: "20px",
                        }}
                    >
                        Login or sign up
                    </Typography>
                    <Divider />
                    <Typography
                        sx={{
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                            padding: "20px",
                        }}
                    >
                        Welcome to Airbnb
                    </Typography>
                    <Box sx={{ padding: "0 20px" }}>
                        <FormControl
                            sx={{ marginBottom: "10px", width: "100%" }}
                        >
                            <Select
                                multiple
                                displayEmpty
                                value={personName}
                                onChange={handleChange}
                                input={<OutlinedInput />}
                                renderValue={(selected) => {
                                    if (selected.length === 0) {
                                        return <em>Country/Region</em>;
                                    }

                                    return selected.join(", ");
                                }}
                                MenuProps={MenuProps}
                                inputProps={{ "aria-label": "Without label" }}
                            >
                                <MenuItem disabled value=''>
                                    <em>Country/Region</em>
                                </MenuItem>
                                {names.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(
                                            name,
                                            personName,
                                            theme
                                        )}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                            <TextField
                                label={"Phone number"}
                                id='margin-none'
                                sx={{
                                    width: "100%",
                                    marginTop: "10px",
                                    borderTop: "none",
                                }}
                            />
                        </FormControl>
                    </Box>
                    <Typography sx={{ padding: "0 20px", fontSize: "0.7rem" }}>
                        We’ll call or text you to confirm your number. Standard
                        message and data rates apply.{" "}
                        <Typography
                            component='span'
                            sx={{ fontSize: "0.7rem", fontWeight: "bold" }}
                        >
                            Privacy Policy
                        </Typography>
                    </Typography>
                    <FormControl sx={formBtnLogin}>
                        <Button sx={btnContinue}>
                            Continue
                        </Button>
                    </FormControl>
                    <Divider sx={{ fontSize: "0.7rem" }}>Or</Divider>
                    <FormControl sx={formBtnLogin}>
                        <Button sx={btnRelative}>
                            <Box sx={btnIcon}>
                                <GrFacebook fill='#1877f2' size={25} />
                            </Box>
                            <Box sx={btnText}>Continue with Facebook</Box>
                        </Button>
                    </FormControl>
                    <FormControl sx={formBtnLogin}>
                        <Button sx={btnRelative}>
                            <Box sx={btnIcon}>
                                <FcGoogle fill='#1877f2' size={25} />
                            </Box>
                            <Box sx={btnText}>Continue with Google</Box>
                        </Button>
                    </FormControl>
                    <FormControl sx={formBtnLogin}>
                        <Button sx={btnRelative}>
                            <Box sx={btnIcon}>
                                <AiFillApple fill='black' size={25} />
                            </Box>
                            <Box sx={btnText}>Continue with Apple</Box>
                        </Button>
                    </FormControl>
                    <FormControl sx={formBtnLogin}>
                        <Button sx={btnRelative}>
                            <Box sx={btnIcon}>
                                <AiOutlineMail fill='black' size={25} />
                            </Box>
                            <Box sx={btnText}>Continue with Email</Box>
                        </Button>
                    </FormControl>
                </Paper>
            </Box>
        </Modal>
    );
};

export default Login;
