import { Box } from '@mui/material';

export const MuiLayout = () => {
  return (
    <>
      <Box
        // component="span"
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          height: '100px',
          width: '100px',
          padding: '16x',
          '&:hover': {
            backgroundColor: 'primary.light',
          },
        }}>
        This is a box
      </Box>
      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="success.light"
        p={2}>
        flex
      </Box>
    </>
  );
};
