import { CarouselProps } from './types/Carousel.types';
import { useState, useEffect } from 'react';
import { Slide, Box, Paper, Typography, Card, CardMedia } from '@mui/material';
import ScrollIcon from './ScrollIcon';
import useImagePreloader from '../hooks/useImagePreloader';

export const Carousel: React.FC<CarouselProps> = ({ images, scrollIcon }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideVisible, setSlideVisible] = useState(true);
  const { imagesPreloaded } = useImagePreloader(images);

  useEffect(() => {
    if (imagesPreloaded) {
      setTimeout(() => {
        setSlideVisible(false);
      }, 5000);

      // improve readability
      const interval = setInterval(() => {
        setTimeout(() => {
          setSlideVisible(false);
        }, 5000);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setSlideVisible(true);
      }, 6000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [images.length, currentIndex, images, imagesPreloaded]);

  const nextIndex = (currentIndex + 1) % images.length;

  if (!imagesPreloaded) {
    return (
      <Paper
        // find difference between sx prop and style prop
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {/* pass text as prop */}
        <Typography variant="h1">Welcome to DesignPad</Typography>
      </Paper>
    );
  }

  return (
    <Paper elevation={0} square sx={{ minHeight: '100vh' }}>
      <Box
        sx={{
          position: 'relative',
          maxWidth: '100%',
          background: 'black',
          minHeight: '100vh',
          overflowX: 'hidden',
          aspectRatio: '16/9',
        }}>
        <Slide direction="left" in={slideVisible} timeout={{ exit: 1000 }}>
          <Card
            square
            sx={{
              zIndex: 1,
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}>
            <CardMedia
              image={`${images[currentIndex].imageUrl}`}
              sx={{
                width: '100%',
                height: '100%',
                backgroundSize: 'cover',
              }}
            />
            <Box
              sx={{
                width: '100%',
                bottom: 0,
                p: '40px',
                position: 'absolute',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
                borderRadius: '10px 10px 0 0',
                bgcolor: 'rgba(255, 255, 255, 0.4)',
              }}>
              <Box
                sx={{
                  wordWrap: 'break-word',
                  textAlign: 'center',
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  lineHeight: 1.43,
                  textShadow: `0.05em 0 white,
                    0 0.05em white,
                    -0.05em 0 white,
                    0 -0.05em white,
                    -0.05em -0.05em white,
                    -0.05em 0.05em white,
                    0.05em -0.05em white,
                    0.05em 0.05em white`,
                }}>
                {images[currentIndex].description}
              </Box>
            </Box>
          </Card>
        </Slide>
        <Paper
          elevation={0}
          square
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: `url(${images[nextIndex].imageUrl}) center center / cover no-repeat`,
          }}
        />
        {scrollIcon && <ScrollIcon />}
      </Box>
    </Paper>
  );
};
