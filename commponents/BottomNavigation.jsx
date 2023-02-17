import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Link from "next/link"
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000"
    }
  }
});

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%",position:"fixed",bottom:0 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          className="bottomNavigation"
        >
          <BottomNavigationAction LinkComponent={Link} href="/"   icon={<HomeIcon/>} />
          <BottomNavigationAction LinkComponent={Link} href="/favorite" icon={<FavoriteBorderIcon  />} />
          <BottomNavigationAction LinkComponent={Link} href="/mypage" icon={<MenuBookIcon />} />
        </BottomNavigation>
      </Box>
    </ThemeProvider>
  );
}