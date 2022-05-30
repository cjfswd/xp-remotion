import { spring, useCurrentFrame, interpolate, Easing } from 'remotion';

import Typewriter from 'typewriter-effect';

export const SearchBar: React.FC<{ initialTransition: number; finalTransition: number }> = ({ initialTransition, finalTransition }) => {
  const scale = spring({
    fps: 60,
    from: 0,
    to: 1,
    frame: useCurrentFrame() - initialTransition,
    config: {
      mass: 0.25,
      stiffness: 50
    }
  });

  // 885,75

  return (
    <div className='w-full h-full flex justify-center'>
      <div
        style={{
          color:'black',
          height: '150px',
          borderRadius: '100px', 
          transform: `scale(${interpolate(useCurrentFrame(),[0,30],[0,1],{ extrapolateRight: "clamp", })})`, 
          marginTop:`${interpolate(useCurrentFrame(),[150, 180, 220, 250],[885.75, 480, 480, 70 ],{ extrapolateRight:'clamp', extrapolateLeft:'clamp'})}px`,
          // A marginTop: `-${interpolate(useCurrentFrame(), [finalTransition - 30, finalTransition], [0, 1300], { extrapolateRight: "clamp", })}px`
        }}
        className='flex flex-row items-center bg-white px-10 gap-10'
      >
        <i className='mdi mdi-magnify' style={{ fontSize: '100px' }} />
        <div
          style={{
            fontFamily: 'Helvetica, Arial',
            border: '0',
            fontSize: '55px',
            textAlign: 'left',
            width: '600px',
            height: '150px',
          }}
          className="flex items-center"
        >
          SQL ou NoSQL ?
          <div/>
        </div >
        <div>&nbsp;</div>
      </div>
    </div>
  );
};
