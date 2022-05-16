import AppContext from '@application/app.context';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { AppBar, Divider, Toolbar } from '@mui/material';
import Badge from '@mui/material/Badge';
import React, { useContext, useRef } from 'react';

import CartPopper from '../CartPopper';
import BejamasLogo from '../icons/BejamasLogo';
import Icon from '../icons/Icon';
import ThemedIconButton from '../styled/ThemedIconButton';

const Header: React.FC = () => {
  const anchorRef = useRef(null);
  const { state, setOpenCart } = useContext(AppContext);

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          marginTop: '62px',
          marginBottom: '31px',
        }}
      >
        <Icon height={26} width={160} icon={BejamasLogo} viewBox="0 0 159 26" />
        <ThemedIconButton
          ref={anchorRef}
          aria-label="cart"
          onClick={() => setOpenCart(true)}
        >
          <Badge
            badgeContent={state.products.length}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
            <ShoppingCartOutlinedIcon />
          </Badge>
        </ThemedIconButton>
        <CartPopper anchorEl={anchorRef.current} />
      </Toolbar>
      <Divider variant="middle" sx={{ border: '4px solid #E4E4E4' }} />
    </AppBar>
  );
};

export default Header;
