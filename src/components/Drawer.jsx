import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LanguageIcon from '@mui/icons-material/Language';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 300,
        padding: '16px', // Add padding all over
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      {/* EN/INR and Cart section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '8px 6px' }}>
        <ListItem disablePadding sx={{ width: 'auto' }}>
          <LanguageIcon sx={{ mr: 1 }} />  {/* Adds right margin (mr: 1) to the icon */}
          <ListItemText primary="EN/INR" sx={{ fontWeight: 'bold' }} />
        </ListItem>
        <ListItem disablePadding sx={{ width: 'auto' }}>
          <ShoppingCartIcon sx={{ mr: 1 }} />  {/* Adds right margin (mr: 1) to the icon */}
          <ListItemText primary="Cart" sx={{ fontWeight: 'bold' }} />
        </ListItem>
      </Box>

      <Divider />

      {/* SignUp and SignIn section with flex and button styling */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 0',
        }}
      >
        <Button

          variant="contained"
          sx={{
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '20px', // Rounded buttons
            padding: '8px 16px',
            textTransform: 'none',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#333', // Darker on hover
            },
          }}
        >
          Sign up for free
        </Button>

        <ListItem disablePadding sx={{ width: 'auto' }}>
          <PersonIcon sx={{ mr: 1 }} />  {/* Adds right margin (mr: 1) to the icon */}
          <ListItemText primary="Sign in" sx={{ fontWeight: 'bold' }} />
        </ListItem>
      </Box>

      <Divider />

      {/* Products and other items section */}
      <List>
        {[
          'Products',
          'Start selling',
          'Tools and apps',
          'Pricing',
          'Resources',
          'Pro sellers',
          'DiployConnect',
        ].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemText primary={text} sx={{ fontWeight: 'bold' }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><MenuRoundedIcon className='text-black' /></Button>
      <Drawer open={open} anchor='left' onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
