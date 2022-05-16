import { Chip, styled } from '@mui/material';

const ThemedChip = styled(Chip)(({ theme }) => ({
  ...theme.typography.h6,
  background: theme.palette.background.white,
  borderRadius: 0,
  border: 0,
}));

export default ThemedChip;
