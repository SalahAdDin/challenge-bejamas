import AppContext from '@application/app.context';
import {
  dynamicSortArray,
  DynamicSortArrayInputType,
} from '@application/utils';
import { Grid } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import ProductsGrid from './ProductsGrid';
import SideFilters from './bars/SideFilters';
import TopBar from './bars/TopBar';

type OrderParamsProps = Partial<Omit<DynamicSortArrayInputType, 'array'>>;

const ProductsGallery: React.FC = () => {
  const { productsState, setProductsState } = useContext(AppContext);
  const [orderParams, setOrderParams] = useState<OrderParamsProps>({
    direction: undefined,
    mode: undefined,
  });

  useEffect(() => {
    const { direction, mode } = orderParams;

    if (direction !== undefined && mode !== undefined) {
      setProductsState({
        ...productsState,
        products: dynamicSortArray({
          array: productsState.products,
          direction,
          mode,
        }),
      });
    }
  }, [orderParams]);

  return (
    <Grid container component="section" sx={{ marginBottom: '60px' }}>
      <Grid item sm={12} component="header">
        <TopBar
          updateOrderParams={({ mode, direction }) =>
            setOrderParams({ mode, direction })
          }
        />
      </Grid>
      <Grid item sm={3} component="aside">
        <SideFilters />
      </Grid>
      <Grid item sm={9} component="section">
        <ProductsGrid />
      </Grid>
    </Grid>
  );
};

export default ProductsGallery;
