import { ErrorOutlined } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';

const ErrorWidget: React.FC<{ message: string }> = ({ message }) => (
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="center"
    spacing={2}
    sx={{ color: grey[700] }}
  >
    <ErrorOutlined sx={{ fontSize: '4rem' }} />
    <Stack>
      <Typography variant="h3" component="h3" align="center">
        Error
      </Typography>
      <Typography variant="body1" component="p" align="center">
        {message}
      </Typography>
    </Stack>
  </Stack>
);

export default ErrorWidget;
