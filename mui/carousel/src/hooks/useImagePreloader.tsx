import { useEffect, useState } from 'react';
import { ImageProps } from '../components/types/Carousel.types';

function preloadImage(src: string) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function () {
      resolve(img);
    };
    img.onerror = img.onabort = function () {
      reject(src);
    };
    img.src = src;
  });
}

export default function useImagePreloader(images: ImageProps[]) {
  const [imagesPreloaded, setImagesPreloaded] = useState<boolean>(false);

  useEffect(() => {
    let isCancelled = false;

    async function effect() {
      console.log('PRELOAD');

      if (isCancelled) {
        return;
      }

      const imagesPromiseList: Promise<any>[] = [];
      for (const image of images) {
        imagesPromiseList.push(preloadImage(image.imageUrl));
        console.log(imagesPromiseList);
      }

      await Promise.all(imagesPromiseList);

      if (isCancelled) {
        return;
      }

      setTimeout(() => {
        setImagesPreloaded(true);
      }, 2000);
    }

    effect();

    return () => {
      isCancelled = true;
    };
  }, [images]);

  return { imagesPreloaded };
}
