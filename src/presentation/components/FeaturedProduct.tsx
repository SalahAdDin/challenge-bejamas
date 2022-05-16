import AppContext from '@application/app.context';
import { ActionTypes } from '@application/cart.reducer';
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  ImageList,
  ImageListItem,
  Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import theme from '@presentation/theme/theme';
import Image from 'next/image';
import React, { useContext } from 'react';

import CustomButton from './styled/CustomButton';
import ThemedChip from './styled/ThemedChip';

const FeaturedProduct: React.FC = () => {
  const { productsState, dispatch, setOpenCart } = useContext(AppContext);
  const { featured } = productsState;

  const handleOnAdd = () => {
    const { id, price, name, image } = featured!;
    const payload = { id, price, name, image, amount: 1 };
    dispatch({ type: ActionTypes.addProduct, payload });
    setOpenCart(true);
  };

  return (
    <Card component="section" elevation={0}>
      <CardHeader
        component="header"
        action={
          <CustomButton
            variant="contained"
            onClick={handleOnAdd}
            sx={{
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
        }
        title={
          <Typography component="h1" variant="h2">
            {featured!.name}
          </Typography>
        }
        sx={{
          mb: 3,
          mt: 7,
          [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            div: { my: 1 },
          },
        }}
      />
      <CardMedia
        title={featured?.image.alt}
        sx={{ height: 550, marginBottom: '46px' }}
      >
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image
            src={featured!.image.src}
            alt={featured!.image.alt}
            layout="fill"
            objectFit="cover"
          />
          <ThemedChip
            variant="outlined"
            label="Photo of the day"
            sx={{
              position: 'absolute',
              height: 'auto',
              bottom: 0,
              left: 0,
              '& .MuiChip-label': { zIndex: 100, m: '21px 56px' },
            }}
          />
        </div>
      </CardMedia>
      <CardContent component="main">
        <Grid
          container
          gap={14}
          component="section"
          sx={{
            justifyContent: 'space-between',
            [theme.breakpoints.down('sm')]: { flexDirection: 'column' },
          }}
        >
          <Grid
            item
            sm={6}
            component="article"
            sx={{ '.MuiTypography-h3': { marginBottom: '9px' } }}
          >
            <Typography component="h2" variant="h4" sx={{ mb: 1 }}>
              About {featured!.name}
            </Typography>
            <Typography
              component="h3"
              variant="h4"
              sx={{ textTransform: 'capitalize', color: grey[700], mb: 1.5 }}
            >
              {featured!.category}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                fontWeight: 400,
                fontSize: 18,
                lineHeight: '150%',
                color: grey[700],
              }}
            >
              {featured!.details!.description}
            </Typography>
          </Grid>
          <Grid
            item
            sm={4}
            component="aside"
            sx={{
              textAlign: 'right',
              [theme.breakpoints.down('sm')]: {
                textAlign: 'left',
                ul: {
                  pl: 0,
                  li: { ...theme.typography.h4, fontWeight: 400 },
                },
              },
            }}
          >
            <Typography component="h3" variant="h4">
              People also buy
            </Typography>
            <ImageList cols={3} rowHeight={150} gap={30}>
              {featured!.details!.recommendations.map((recommendation) => (
                <ImageListItem
                  key={`recommendation_${recommendation.alt}`}
                  sx={{ width: '100%', height: '100%' }}
                >
                  <Image
                    src={recommendation.src}
                    alt={recommendation.alt}
                    layout="fill"
                    objectFit="cover"
                  />
                </ImageListItem>
              ))}
            </ImageList>
            <Typography component="h3" variant="h4">
              Details
            </Typography>
            <ul
              style={{
                listStyleType: 'none',
              }}
            >
              <Typography
                component="li"
                variant="body2"
                sx={{
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: '17px',
                  color: grey[700],
                  marginBottom: 1.5,
                }}
              >
                {`Size: ${featured!.details!.dimensions.width} x
                ${featured!.details!.dimensions.height} pixel`}
              </Typography>

              <Typography
                component="li"
                variant="body2"
                sx={{
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: '17px',
                  color: grey[700],
                  marginBottom: 1.5,
                }}
              >
                {`Size: ${(featured!.details!.size / 1024).toFixed(2)}Mb`}
              </Typography>
            </ul>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default FeaturedProduct;
