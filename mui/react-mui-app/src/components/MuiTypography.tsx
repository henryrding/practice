import { Typography } from '@mui/material';

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">subtitle 1</Typography>
      <Typography variant="subtitle2">subtitle 2</Typography>

      {/* body1 is default variant attribute value */}
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
        nobis saepe, quis molestias necessitatibus obcaecati, dolor animi
        dignissimos iusto perspiciatis facere commodi. Corporis voluptate ipsam
        atque, recusandae quibusdam earum nemo.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse maiores,
        reiciendis sed minus modi error accusantium quisquam sint eius rem ipsam
        aperiam, impedit alias et eaque. Beatae nesciunt debitis facere?
      </Typography>
    </div>
  );
};
