import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LockOpenIcon from '@mui/icons-material/LockOpen';

// create button with material UI
const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 14,
  padding: "20px 30px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#0C8CE9",
  borderColor: "#0C8CE9",
  color:"#000",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#fff",
    borderColor: "#0C8CE9",
    boxShadow: "none",
    
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0C8CE9",
    borderColor: "#fff",
    
  },
});

const CreateLoginButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 14,
  padding: "15px 25px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#fff",
  borderColor: "#0C8CE9",
  color:"#000",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#0C8CE9",
    borderColor: "#0C8CE9",
    boxShadow: "none",
    
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0C8CE9",
    borderColor: "#fff",
    
  },
});

export default function ButtonsHome() {
  return (
    <>
      <Stack spacing={2} direction="row">
        <CreateLoginButton variant="contained" startIcon={<LockOpenIcon />} href="loginSign/login" >Login</CreateLoginButton>
        <BootstrapButton variant="contained" disableRipple  startIcon={<PermIdentityIcon/>} href="loginSign/register">Criar Perfil</BootstrapButton>
      </Stack>
      
    </>
  );
}