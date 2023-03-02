import * as React from "react";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import styles from "@/styles/Forms.module.css";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const submitContact = async (event) => {
  event.preventDefault();
  const firstName = event.target.firstName.value;
  const lastName = event.target.lastName.value;
  const email = event.target.email.value;
  const password = event.target.password.value;

  const res = await fetch("/api/form", {
    body: JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
};
export default function Register() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <form onSubmit={submitContact} className={styles.container}>
        <div className={styles.form}>

        
        <TextField
        className={styles.TextField}
          placeholder="Placeholder"
          id="name"
          name="firstName"
          type="text"
          autocomplete="name"
          required
          label="First Name"
        />
        <TextField
        className={styles.TextField}
          id="lastName"
          name="last name"
          type="text"
          autocomplete="name"
          required
          label="Last Name"
        />
        <TextField
        className={styles.TextField}
          id="email"
          name="E-mail"
          type="email"
          autocomplete="name"
          required
          label="exemple@hotmail.com"
        />
        
        <FormControl sx={{ m: 1, width: '28ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="password"
          name="text"
          placeholder="Password"
          label="Password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        </FormControl>
        <button type="submit">Submit</button>
        </div>
      </form>
      
    </>
  );
}
