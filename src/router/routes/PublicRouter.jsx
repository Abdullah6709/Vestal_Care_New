import React from "react";
import { Outlet } from "react-router-dom";
// import { Toolbar } from "@mui/material";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const PublicRouter = () => {
    return (
        <>
            <Navbar />
            {/* <Toolbar /> */}
            <Outlet />
            <Footer />
        </>
    );
};

export default PublicRouter;