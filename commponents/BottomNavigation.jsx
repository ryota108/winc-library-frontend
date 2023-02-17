import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Link from "next/link"

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: "100%",position:"fixed",bottom:0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        
      >
        <BottomNavigationAction LinkComponent={Link} href="/"   icon={<HomeIcon  />} />
        <BottomNavigationAction  icon={<FavoriteBorderIcon  />} />
        <BottomNavigationAction LinkComponent={Link} href="/mypage" icon={<MenuBookIcon />} />
      </BottomNavigation>
    </Box>
  );
}