import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";

function Header() {
  const navItems = ["HOME", "STORY", "GALLERY", "CHARACTERS"];

  return (
    <AppBar position="fixed">
      <Toolbar>
        <img src="src\assets\logo.png" alt="" width={"70px"} style={{padding: '10px'}}/>
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          The Hunger Games
        </Typography>
        <Box>
          {navItems.map((item) => (
            <Button key={item} sx={{ color: "#fff" }}>
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
