import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Logo from '../../assets/Hsllogo.png';
import { Link } from 'react-router-dom'; // assuming you're using react-router-dom for routing

const pages = ['Home', 'Destinations'];
const pageRoutes = ['/', '/all-locations']; // routes corresponding to each page

function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ height: '70px', backgroundColor: 'rgba(0, 0, 0, 0.9)' }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Box sx={{ width: '40px' }}>
            <img src={Logo} style={{ width: '100%', height: '100%' }} alt='logo' />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, marginLeft: { lg: '50px', xs: '30px' } }}>
            {pages.map((page, index) => (
              <Link key={page} to={pageRoutes[index]} style={{ textDecoration: 'none' }}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Nav;
