/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

interface TakePhoto {
  cameraMode: string;
  filter: string;
  burstNumber: number;
}

interface Story {
  createStory(): void;
}

class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burstNumber: number
  ) {}
}

class Youtube implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burstNumber: number,
    public short: string
  ) {}

  createStory(): void {
    console.log('Story was created');
  }
}

export {};
