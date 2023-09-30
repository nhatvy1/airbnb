/** Flex box styles */

export const flexBetween = {
    display: "flex",
    justifyContent: "space-between",
};

export const flexBetweenCenter = {
    display: "flex",
    justifyContent: { xs: "center", md: "space-between" },
    alignItems: "center",
};

export const footerLayout = {
    display: "flex",
    flexDirection: { sx: "column" },
    justifyContent: { xs: "center", md: "space-between" },
    alignItems: "center",
};

export const flexCenter = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

export const fullWidthFlex = {
    display: "flex",
    width: "100%",
};

export const justifyCenter = { display: "flex", justifyCenter: "center" };

export const dFlex = {
    display: "flex",
    flexDirection: "row",
};

export const fixedBottom = {
    position: "absolute",
    bottom: 100,
    width: "100%",
};

export const displayOnDesktop = { display: { xs: "none", md: "block" } };

/** Custom button login facebook, google */
export const formBtnLogin = {
    width: "100%",
    padding: "0 20px",
    margin: "10px 0",
};

export const btnRelative = {
    position: "relative",
    width: "100%",
    border: "1px solid black",
    padding: '10px 0'
};

export const btnIcon = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
    width: "50px",
    height: "100%",
};

export const btnText = {
    fontWeight: "bold",
    color: "black",
    textTransform: "none",
};

export const btnContinue = {
    background: '#e51d54',
    padding: '10px 0',
    color: 'white',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    textTransform: 'none'
}

/** Custom carousel styles */

export const carouselDot = {
    color: "#fff",
    backgroundColor: "#000",
    opacity: 0.5,
    borderRadius: 10,
    p: 1,
    minWidth: "auto",
};

export const fixedIcon = {
    position: "absolute",
    right: 10,
    top: 10,
    zIndex: 10,
};

export const carouselImage = {
    height: 275,
    display: "block",
    overflow: "hidden",
    width: "100%",
    borderRadius: 3,
};
