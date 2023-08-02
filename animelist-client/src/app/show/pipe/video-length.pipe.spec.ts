import { VideoLengthPipe } from './video-length.pipe';

describe('VideoLengthPipe', () => {
  it('create an instance', () => {
    const pipe = new VideoLengthPipe();
    expect(pipe).toBeTruthy();
  });
  it('show only minutes if lower than one hour', () => {
    const pipe = new VideoLengthPipe();
    expect(pipe.transform(1440)).toEqual('24:00');
  });
  it('show hours if greater than one hour', () => {
    const pipe = new VideoLengthPipe();
    expect(pipe.transform(3600)).toEqual('01:00:00');
    expect(pipe.transform(3601)).toEqual('01:00:01');
    expect(pipe.transform(5040)).toEqual('01:24:00');
  });
});
