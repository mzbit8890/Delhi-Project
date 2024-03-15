import { Button, styled } from "@mui/material";

export const AnimatedBorderButton = styled(Button)(({ theme }) => ({
  position: "relative",
  marginLeft: "1rem",
  color: "green",
  "&::after": {
    content: '""',
    position: "absolute",
    top: -1,
    left: -1,
    right: -1,
    bottom: -1,
    border: `2px solid transparent`,
    borderRadius: theme.shape.borderRadius,
    animation: `borderAnimation 2s infinite`,
  },
  "@keyframes borderAnimation": {
    "0%": {
      borderLeftColor: "#FFA756",
      borderTopColor: "#FF5F1F",
      borderRightColor: "#FFA756",
      borderBottomColor: "#FFA756",
    },
    "10%": {
      borderLeftColor: "#FFA756",
      borderTopColor: "#FFA756",
      borderRightColor: "#FF5F1F",
      borderBottomColor: "#FFA756",
    },
    "20%": {
      borderLeftColor: "#FFA756",
      borderTopColor: "#FFA756",
      borderRightColor: "#FFA756",
      borderBottomColor: "#FF5F1F",
    },
    "30%": {
      borderLeftColor: "#FF5F1F",
      borderTopColor: "#FFA756",
      borderRightColor: "#FFA756",
      borderBottomColor: "#FFA756",
    },
    "40%": {
      borderLeftColor: "#FFA756",
      borderTopColor: "#FF5F1F",
      borderRightColor: "#FFA756",
      borderBottomColor: "#FFA756",
    },
    "50%": {
      borderLeftColor: "#FFA756",
      borderTopColor: "#FFA756",
      borderRightColor: "#FF5F1F",
      borderBottomColor: "#FFA756",
    },
    "60%": {
      borderLeftColor: "#FFA756",
      borderTopColor: "#FFA756",
      borderRightColor: "#FFA756",
      borderBottomColor: "#FF5F1F",
    },
    "70%": {
      borderLeftColor: "#FF5F1F",
      borderTopColor: "#FFA756",
      borderRightColor: "#FFA756",
      borderBottomColor: "#FFA756",
    },
    "80%": {
      borderLeftColor: "#FFA756",
      borderTopColor: "#FF5F1F",
      borderRightColor: "#FFA756",
      borderBottomColor: "#FFA756",
    },
    "90%": {
      borderLeftColor: "#FFA756",
      borderTopColor: "#FFA756",
      borderRightColor: "#FF5F1F",
      borderBottomColor: "#FFA756",
    },
    "100%": {
      borderLeftColor: "#FFA756",
      borderTopColor: "#FFA756",
      borderRightColor: "#FFA756",
      borderBottomColor: "#FF5F1F",
    },
  },
}));
