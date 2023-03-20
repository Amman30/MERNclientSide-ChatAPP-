import { Box, useTypography, useMediaQuery, Typography } from '@mui/material';
import { themeSettings } from '../../theme.js';
import Form from './Form.jsx';
const Login = () => {
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const theme = themeSettings();
    return (
        <Box>
            <Box width="100%" backgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign="center">
                <Typography fontWeight="bold" fontSize="32px" color="primary">
                    SocoPedia
                </Typography>
            </Box>
            <Box width={isNonMobileScreens ? "50%" : "100%"} p="2rem" m="2rem auto" borderRadius="1.5rem" backgroundColor={theme.palette.background.alt}>
                <Typography fontWeight="500" variant='h5' sx={{ mb: "1.5rem" }}>
                    Login To Continue
                </Typography>
                <Form />
            </Box>
        </Box>
    );
}

export default Login;
