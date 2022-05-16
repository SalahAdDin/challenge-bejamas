import AppContext from '@application/app.context';
import { ImageList, Pagination, Stack } from '@mui/material';
import theme from '@presentation/theme/theme';
import React, { useContext, useEffect, useState } from 'react';

import ProductGridTile from './tiles/ProductGridTile';

const ProductsGrid: React.FC = () => {
  const { productsState, queryVariables, setQueryVariables } =
    useContext(AppContext);
  const [page, setPage] = useState(1);
  const { totalCount, products } = productsState;
  const { limit, start } = queryVariables;

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    const likelyStart = (page - 1) * limit;

    if (likelyStart !== start) {
      setQueryVariables({ ...queryVariables, start: likelyStart });
    }
  }, [page]);

  return (
    <Stack direction="column" justifyContent="center" alignContent="center">
      <ImageList
        cols={3}
        rowHeight={520}
        gap={40}
        sx={{
          mb: 10,
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr)) !important',
          [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: '1fr !important',
          },
        }}
      >
        {products.map((item) => (
          <ProductGridTile key={item.id} {...item} />
        ))}
      </ImageList>
      <Pagination
        count={Math.ceil(totalCount / limit)}
        page={page}
        onChange={handleChange}
        sx={{
          ul: {
            maxWidth: 'max-content',
            margin: 'auto',
          },
          '.MuiButtonBase-root': {
            ...theme.typography.h3,
            fontWeight: 400,
            color: '#B4B4B4',
            height: 48,
            width: 48,
            borderRadius: '50%',
          },
          '.Mui-selected': { color: theme.palette.common.black },
          '.MuiPaginationItem-previousNext': {
            color: theme.palette.common.black,
          },
        }}
      />
    </Stack>
  );
};

export default ProductsGrid;
