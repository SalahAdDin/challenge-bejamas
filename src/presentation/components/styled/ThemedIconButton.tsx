import { IconButton, styled } from '@mui/material';

const ThemedIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.black,
}));

export default ThemedIconButton;
