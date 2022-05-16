import AppContext from '@application/app.context';
import { ActionTypes } from '@application/cart.reducer';
import { Product } from '@domain/products.dto';
import { ImageListItem, ImageListItemBar, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import CustomButton from '@presentation/components/styled/CustomButton';
import theme from '@presentation/theme/theme';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import ThemedChip from '../styled/ThemedChip';

const ProductGridTile: React.FC<Product> = ({
  id,
  bestseller,
  image,
  name,
  category,
  price,
}) => {
  const { dispatch, setOpenCart } = useContext(AppContext);
  const [showAddButton, setShowAddButton] = useState(false);

  const handleOnAdd = () => {
    const payload = { id, price, name, image, amount: 1 };
    dispatch({ type: ActionTypes.addProduct, payload });
    setOpenCart(true);
  };

  return (
    <ImageListItem
      onMouseOver={() => setShowAddButton(true)}
      onMouseLeave={() => setShowAddButton(false)}
    >
      {bestseller && (
        <ThemedChip
          variant="outlined"
          label="Best Seller"
          sx={{
            position: 'absolute',
            height: 'auto',
            fontWeight: 400,
            top: 0,
            left: 0,
            zIndex: 100,
            '& .MuiChip-label': { m: '6px' },
          }}
        />
      )}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          marginBottom: '12px',
        }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <CustomButton
        variant="contained"
        onClick={handleOnAdd}
        fullWidth
        sx={{
          display: showAddButton ? 'flex' : 'none',
          position: 'absolute',
          top: 332,
          left: 0,
          background: theme.palette.background.black,
          color: grey[50],
          '&:hover': {
            background: theme.palette.background.black,
            color: grey[50],
          },
        }}
      >
        Add to Cart
      </CustomButton>
      <ImageListItemBar
        title={
          <>
            <Typography
              component="h2"
              variant="h4"
              sx={{
                textTransform: 'capitalize',
                color: grey[700],
                marinBottom: 0.5,
              }}
            >
              {category}
            </Typography>
            <Typography
              component="h3"
              variant="h1"
              sx={{
                marginBottom: 1.2,
              }}
            >
              {name}
            </Typography>
          </>
        }
        subtitle={
          <Typography
            component="h3"
            variant="h1"
            sx={{ fontWeight: 400, color: grey[700] }}
          >
            ${price}
          </Typography>
        }
        position="below"
      />
    </ImageListItem>
  );
};

export default ProductGridTile;
