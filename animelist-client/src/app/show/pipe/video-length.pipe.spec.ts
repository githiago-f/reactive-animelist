import { VideoLengthPipe } from './video-length.pipe';

describe('VideoLengthPipe', () => {
  it('create an instance', () => {
    const pipe = new VideoLengthPipe();
    expect(pipe).toBeTruthy();
  });
});
