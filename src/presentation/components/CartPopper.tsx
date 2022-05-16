import AppContext from '@application/app.context';
import { ActionTypes } from '@application/cart.reducer';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  Popper,
  Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { VirtualElement } from '@popperjs/core';
import CartProductTile from '@presentation/components/tiles/CartProductTile';
import theme from '@presentation/theme/theme';
import React, { useContext } from 'react';

import CustomButton from './styled/CustomButton';
import ThemedIconButton from './styled/ThemedIconButton';

const CartPopper: React.FC<{
  anchorEl: null | VirtualElement | (() => VirtualElement);
}> = ({ anchorEl }) => {
  const { state, dispatch, openCart, setOpenCart } = useContext(AppContext);
  const { products, price } = state;

  const handleOnClear = () =>
    dispatch({ type: ActionTypes.deleteProducts, payload: null });

  return (
    <Popper
      anchorEl={anchorEl}
      open={openCart}
      placement="bottom-end"
      disablePortal={false}
      modifiers={[
        {
          name: 'flip',
          enabled: true,
          options: {
            altBoundary: true,
            rootBoundary: 'document',
            padding: 8,
          },
        },
        {
          name: 'preventOverflow',
          enabled: true,
          options: {
            altAxis: true,
            altBoundary: true,
            tether: true,
            rootBoundary: 'document',
            padding: 8,
          },
        },
      ]}
    >
      <Card sx={{ borderRadius: 0, border: '4px solid #E4E4E4' }}>
        <CardHeader
          action={
            <ThemedIconButton
              aria-label="close-cart-popper"
              onClick={() => setOpenCart(false)}
            >
              <CloseOutlinedIcon />
            </ThemedIconButton>
          }
        />
        <CardContent sx={{ p: 1 }}>
          {products.length > 0 && (
            <List>
              {products.map((product) => (
                <CartProductTile
                  key={`cart_product_${product.id}`}
                  {...product}
                />
              ))}
              <ListItem sx={{ justifyContent: 'space-between' }}>
                <Typography component="p" variant="body1">
                  Total:
                </Typography>
                <Typography component="p" variant="h6">
                  ${price}
                </Typography>
              </ListItem>
            </List>
          )}
        </CardContent>
        <Divider variant="middle" sx={{ border: '1px solid #C2C2C2', my: 3 }} />
        <CardActions>
          <CustomButton
            variant="outlined"
            type="button"
            fullWidth
            onClick={handleOnClear}
            sx={{
              border: `3px solid ${theme.palette.background.black}`,
              color: grey[900],
              '&:hover': {
                border: `3px solid ${theme.palette.background.black}`,
                color: grey[900],
              },
            }}
          >
            Clear
          </CustomButton>
        </CardActions>
      </Card>
    </Popper>
  );
};

export default CartPopper;
