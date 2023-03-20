import { Box } from "@mui/material";
import { styled } from "@mui/system";

const WidgetWrapper = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: "0.67rem",
    padding: "1.5rem 1.5 rem 0.75 rem 1.5 rem",
}))

export default WidgetWrapper;