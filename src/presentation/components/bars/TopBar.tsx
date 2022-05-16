import { DynamicSortArrayInputType } from '@application/utils';
import ImportExportOutlinedIcon from '@mui/icons-material/ImportExportOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  Breadcrumbs,
  ButtonGroup,
  Link,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from '@mui/material';
import theme from '@presentation/theme/theme';
import React, { useEffect, useReducer, useState } from 'react';

import ThemedIconButton from '../styled/ThemedIconButton';

// import Link from 'next/link';
type Mode = 'name' | 'price';

const modeOptions = [
  {
    value: 'name',
    label: 'Name',
  },
  {
    value: 'price',
    label: 'Price',
  },
];

interface TopBarProps {
  updateOrderParams: ({
    mode,
    direction,
  }: Omit<DynamicSortArrayInputType, 'array'>) => void;
}

const TopBar: React.FC<TopBarProps> = ({ updateOrderParams }) => {
  const [direction, toggleDirection] = useReducer((state) => !state, false);
  const [mode, setMode] = useState<Mode>('name');
  const anchorRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    updateOrderParams({
      mode,
      direction: direction ? 'asc' : 'desc',
    });
  }, [direction, mode]);

  const handleOnChangeMode = ({ target }: SelectChangeEvent<Mode>) => {
    const { value } = target;
    setMode(value as Mode);
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        marginTop: '68px',
        marginBottom: '63px',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
          alignItems: 'flex-start',
        },
      }}
    >
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{
          '& .MuiBreadcrumbs-li': { fontSize: 30, lineHeight: '33px' },
          '& .MuiBreadcrumbs-separator': {
            fontWeight: 600,
            fontSize: 34,
            lineHeight: '37px',
            color: theme.palette.common.black,
          },
        }}
      >
        <Link underline="hover" color="inherit" href="/">
          <Typography
            component="h1"
            variant="h2"
            sx={{ fontWeight: 700, color: theme.palette.common.black }}
          >
            Photography
          </Typography>
        </Link>
        <Link underline="hover" color="inherit" href="/">
          <Typography
            component="h1"
            variant="h2"
            sx={{ fontWeight: 400, color: '#757574' }}
          >
            Premium Photos
          </Typography>
        </Link>
      </Breadcrumbs>
      <ButtonGroup ref={anchorRef} aria-label="split button">
        <ThemedIconButton aria-label="delete" onClick={toggleDirection}>
          <ImportExportOutlinedIcon />
        </ThemedIconButton>
        <Typography
          component="h2"
          variant="h4"
          sx={{
            fontWeight: 400,
            color: '#757574',
            margin: 'auto',
            marginRight: '15px',
          }}
        >
          Sort By
        </Typography>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={mode}
          label="Sort By"
          onChange={(e) => handleOnChangeMode(e)}
          disableUnderline
          variant="standard"
          IconComponent={KeyboardArrowDownIcon}
          sx={{
            '.MuiInputBase-input': {
              ...theme.typography.h4,
              fontWeight: 400,
              minHeight: 'auto !important',
            },
            '.MuiSelect-icon': { color: theme.palette.common.black },
          }}
        >
          {modeOptions.map(({ label, value }) => (
            <MenuItem key={`mode_${value}`} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </ButtonGroup>
    </Stack>
  );
};

export default TopBar;
