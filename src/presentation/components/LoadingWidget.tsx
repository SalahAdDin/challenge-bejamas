import { CircularProgress, Stack } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';

const LoadingWidget: React.FC = () => (
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="center"
    sx={{ color: grey[700] }}
  >
    <CircularProgress sx={{ color: grey[500] }} />
  </Stack>
);

export default LoadingWidget;
