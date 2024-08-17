import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from '../assets/logo.png';
import '../assets/fonts.css';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';

const pages = [
  { name: 'Home', href: '/home' },
  { name: 'Plan Your Trip', href: '/plan-your-trip' },
  { name: 'About', href: '/about', icon: <InfoIcon /> }, // Add icon property
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const theme = useTheme();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#142A91' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              mr: 0,
              ml: 2,
              width: 50,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src={logo} alt="Site Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              justifyContent: 'center',
              px: 2,
              height: '100%',
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/home"
              sx={{
                fontFamily: 'CoolFont',
                padding: 1,
                fontWeight: 900,
                letterSpacing: '.3rem',
                color: 'rgb(115,13,32)',
                textDecoration: 'none',
                textShadow: `1px 1px 0 rgb(188,149,71), -1px 1px 0 rgb(188,149,71), 1px -1px 0 rgb(188,149,71), -1px -1px 0 rgb(188,149,71)`,
                fontSize: '2rem',
              }}
            >
              NYAM DO
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: 'white' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu} component={Link} to={page.href}>
                  <Typography textAlign="center" sx={{ display: 'flex', alignItems: 'center' }}>
                    {page.name}
                    {page.icon && <Box sx={{ ml: 1 }}>{page.icon}</Box>} {/* Icon after text */}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo for mobile view */}
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              mr: 2,
              width: 50,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src={logo} alt="Site Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </Box>

          <Box sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                component={Link}
                to={page.href}
                sx={{ my: 2, color: 'white', display: 'flex', alignItems: 'center' }} // Added flex and alignItems
              >
                {page.name}
                {page.icon && <Box sx={{ ml: 1 }}>{page.icon}</Box>} {/* Icon after text */}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
    