import { spring, useCurrentFrame, interpolate, staticFile } from 'remotion';

import { Video } from "remotion";

export const BackTransition: React.FC<{ initialTransition: number; finalTransition: number }> = ({ initialTransition, finalTransition }) => {
  const getIn = spring({
    fps: 60,
    frame: useCurrentFrame() - initialTransition,
    config: {
      mass: 0.25,
      stiffness: 50
    }
  });

  const getOut = spring({
    fps: 60,
    frame: useCurrentFrame() - finalTransition,
    config: {
      mass: 0.25,
      stiffness: 50
    }
  });

  return (
    <div className='w-full h-full flex items-center justify-center text-white'>
      <div style={{ position: 'absolute', backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>
        <Video src={staticFile('/videoplayback.webm')} startFrom={61} style={{ width: '100%', height: '100%', mixBlendMode: 'overlay' }} />
      </div>
    </div>
  );
};
