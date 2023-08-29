import { CssBaseline, Paper, ThemeProvider } from '@mui/material';
import theme from './lib/theme';
import { Carousel } from './components/Carousel';

function App() {
  const images = [
    {
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/design-pad-313617.appspot.com/o/projects%2FnOG6V7Bv6ck8JBhLwNNB%2FA1QBw5qDBT8yV6AqkxKh_pasted.png?alt=media&token=72d04494-83ad-4168-9098-e1b7245a29be',
      description:
        'Fast-track hardware development and testing by using our prebuilt configuration tooling and software.',
    },
    {
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/design-pad-313617.appspot.com/o/projects%2FnOG6V7Bv6ck8JBhLwNNB%2FPOq8396qLsUmlKCKD3jz_pasted.png?alt=media&token=c8adb79c-24e1-4dcb-9117-d3381d8389e8',
      description:
        'Let your testers deploy beta firmware directly from your Design Pad account anywhere they are.',
    },
    {
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/design-pad-313617.appspot.com/o/projects%2FnOG6V7Bv6ck8JBhLwNNB%2FJ7FhoYisbdC0fQXqNIQi_pasted.png?alt=media&token=4875e0fe-c4a2-4192-b440-7ba38d5fb6b2',
      description:
        'Rapidly create configuration apps with our low-code tooling',
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper elevation={0} square>
        <Carousel images={images} scrollIcon />
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
