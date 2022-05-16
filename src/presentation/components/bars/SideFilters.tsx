import AppContext from '@application/app.context';
import {
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from '@mui/material';
import theme from '@presentation/theme/theme';
import React, { useContext, useEffect, useState } from 'react';

const categoryOptions = [
  'people',
  'food',
  'landmarks',
  'seasons',
  'holidays',
  'health',
  'cathedral',
  'friends',
  'lifestyle',
  'animals',
];

const priceRangeFilters = [
  {
    label: 'Lower than $20',
    value: 'price < 20',
  },
  {
    label: '$20 - $100',
    value: '20 < price && price < 100',
  },
  {
    label: '$100 - $200',
    value: '100 < price && price < 200',
  },
  {
    label: 'More than $200',
    value: '200 < price',
  },
];

const SideFilters: React.FC = () => {
  const { queryVariables, setQueryVariables } = useContext(AppContext);
  const [categories, setCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState('');

  useEffect(() => {
    if (categoryOptions.length > 0) {
      setQueryVariables({ ...queryVariables, category: categories });
    }
  }, [categories]);

  useEffect(() => {
    if (priceRange !== '') {
      setQueryVariables({ ...queryVariables, priceRange });
    }
  }, [priceRange]);

  const handleChangeCategories = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = target;
    const newCategories = checked
      ? [...categories, name]
      : categories.filter((item) => item !== name);
    setCategories(newCategories);
  };

  return (
    <Stack direction="column" gap={4}>
      <Typography component="h3" variant="h4">
        Category
      </Typography>
      <FormGroup>
        {categoryOptions.map((item) => (
          <FormControlLabel
            control={
              <Checkbox
                checked={categories.includes(item)}
                onChange={handleChangeCategories}
                name={item}
                sx={{
                  '&.Mui-checked': {
                    color: theme.palette.common.black,
                  },
                }}
              />
            }
            label={
              <Typography component="h3" variant="h4" sx={{ fontWeight: 400 }}>
                {item}
              </Typography>
            }
            key={`category_option_${item}`}
            sx={{ textTransform: 'capitalize', my: '11px' }}
          />
        ))}
      </FormGroup>
      <Divider variant="middle" sx={{ border: '1px solid #C2C2C2' }} />
      <Typography component="h3" variant="h4">
        Price range
      </Typography>
      <FormGroup>
        {priceRangeFilters.map(({ value, label }) => (
          <FormControlLabel
            control={
              <Checkbox
                checked={value === priceRange}
                onChange={({ target }) => setPriceRange(target.name)}
                name={value}
                sx={{
                  '&.Mui-checked': {
                    color: theme.palette.common.black,
                  },
                }}
              />
            }
            label={
              <Typography component="h3" variant="h4" sx={{ fontWeight: 400 }}>
                {label}
              </Typography>
            }
            key={`price_range_option_${value}`}
            sx={{ my: '11px' }}
          />
        ))}
      </FormGroup>
    </Stack>
  );
};

export default SideFilters;
