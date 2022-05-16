import { CartProduct } from '@domain/cart.dto';
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';

const CartProductTile: React.FC<CartProduct> = ({
  name,
  amount,
  image,
  price,
}) => (
  <ListItem alignItems="flex-start" sx={{ flexDirection: 'row-reverse' }}>
    <ListItemAvatar>
      <Avatar variant="square" sx={{ width: 150, height: 90 }}>
        <Image src={image.src} alt={image.alt} layout="fill" />
      </Avatar>
    </ListItemAvatar>
    <ListItemText
      sx={{
        '& .MuiListItemText-secondary': {
          display: 'flex',
          flexDirection: 'column',
        },
      }}
      primary={
        <Typography component="h6" variant="h6">
          {name}
        </Typography>
      }
      secondary={
        <>
          <Typography component="em" variant="subtitle1">
            ${price}
          </Typography>
          <Typography component="em" variant="body1">
            {amount}
          </Typography>
        </>
      }
    />
  </ListItem>
);

export default CartProductTile;
