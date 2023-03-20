import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import Navbar from 'scenes/navbar/Navbar';
import UserWidget from "../widgets/UserWidgets"
import { useSelector } from 'react-redux';




const Home = () => {
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    // const { _id, picturePath } = useSelector((state) => state.user);

    return (
        <Box>
            <Navbar />
            <Box
                width="100%"
                padding="2rem 6%"
                display="flex"
                gap="0.5rem"
                justifyContent="space-between"
            >
                <Box
                    flexBasis={isNonMobileScreens ? "26%" : "100%"}>
                    <UserWidget userId={null} picturePath={null} />
                </Box>
            </Box>
        </Box>
    );
}

export default Home;
