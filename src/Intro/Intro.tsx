import { Gif } from '@remotion/gif';
import { spring, useCurrentFrame, interpolate, Sequence } from 'remotion';
import { OpenSideCard } from './OpenSideCard';
import { RotateVerse } from './RotateVerse';
import { SearchBar } from './SeachBar';

export const Intro: React.FC<{ initialTransition: number; finalTransition: number }> = ({ initialTransition, finalTransition }) => {
  const frame = useCurrentFrame()

  return (
    <div className='w-full h-full flex flex-row items-center justify-center text-white'>
      <Sequence from={0} >
        <SearchBar initialTransition={0} finalTransition={90} />
      </Sequence>
      <Sequence from={150} durationInFrames={31}>
        <RotateVerse intermediateTransition={0} />
      </Sequence>
      <Sequence from={180} >
        <OpenSideCard initialTransition={0} finalTransition={100} />
      </Sequence>
      <Sequence from={220}>
        <div style={{ flex: 1 }} className="flex flex-col items-center drop-shadow-2xl drop-shadow-2xl">
          <div style={{
            width: '850px',
            marginTop: `290px`,
            transform: `scale(${interpolate(frame, [220, 250], [0, 1], { extrapolateLeft: "clamp", extrapolateRight:'clamp' })})`
          }} className="drop-shadow-2xl">
            <Gif src='https://media.giphy.com/media/sk6yL9EGVeAcE/giphy.gif' style={{ width: '100%', borderRadius: '80px' }} />
          </div>
        </div>
      </Sequence>
      <Sequence from={320}>
        <div style={{ flex: 1 }} className="flex flex-col items-center drop-shadow-2xl drop-shadow-2xl">
          <div style={{
            width: '850px',
            marginTop: `${interpolate(frame, [320, 350], [1920, 1275], { extrapolateRight: "clamp", })}px`,
          }} className="drop-shadow-2xl">
            <Gif src='https://media.giphy.com/media/26tn9Qrs7avBUskNi/giphy-downsized-large.gif' style={{ width: '100%', borderRadius: '80px' }} />
          </div>
        </div>
      </Sequence>
    </div>
  );
};
