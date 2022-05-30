import { Gif } from '@remotion/gif';
import { spring, useCurrentFrame, interpolate, Sequence, Img, staticFile, Video } from 'remotion';

export const Conclusion: React.FC<{ initialTransition: number; finalTransition: number }> = ({ initialTransition, finalTransition }) => {
  const frame = useCurrentFrame()

  return (
    <div className='w-full h-full flex flex-row items-center justify-center text-white'>
      <Sequence from={0} durationInFrames={60} >
        a
      </Sequence>
    </div>
  );
};
