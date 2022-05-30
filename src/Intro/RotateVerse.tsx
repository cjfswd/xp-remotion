import { spring, useCurrentFrame, interpolate, staticFile } from 'remotion';

import { Img } from "remotion";

export const RotateVerse: React.FC<{ intermediateTransition: number }> = ({ intermediateTransition }) => {
  return (
    <div className='flex w-full h-full'>
      <div style={{
        position:'relative',
        top: `${interpolate(useCurrentFrame(), [0, 30], [1920, 707.11], { extrapolateRight: "clamp", extrapolateLeft: "clamp", })}px`,
        left: '340px',
        width: '400px',
        perspective: '1920px',
      }}
        className='text-white'
      >
        <div style={{ width: '100%', position: 'relative', transformStyle: 'preserve-3d', transform: `rotateY(${interpolate(useCurrentFrame(), [0, 30], [0, 180], { extrapolateRight: "clamp", extrapolateLeft: "clamp" })}deg)` }}>
          <div style={{ position: 'absolute', backfaceVisibility: 'hidden', backgroundColor: '#282729', fontSize: '75px', borderRadius: '80px', }} className="w-full text-center flex flex-col gap-8 p-10 leading-none shadow drop-shadow-xl font-bold">
            <Img src={staticFile('/database.png')} style={{ width: '100%' }} />
            <p>
              SQL
            </p>
          </div>
          <div style={{ position: 'absolute', backfaceVisibility: 'hidden', backgroundColor: '#282729', fontSize: '75px', borderRadius: '80px', transform: 'rotateY(180deg)' }} className="w-full text-center flex flex-col gap-8 p-10 leading-none shadow drop-shadow-xl font-bold">
            <Img src={staticFile('/document.png')} style={{ width: '100%' }} />
            <p>
              NoSQL
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
