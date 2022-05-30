import { spring, useCurrentFrame, interpolate, staticFile } from 'remotion';

import { Img } from "remotion";

export const OpenSideCard: React.FC<{ initialTransition: number; finalTransition: number }> = ({ initialTransition, finalTransition }) => {
  const frame = useCurrentFrame()

  return (
    <div className='w-full h-full flex flex-row items-center justify-center text-white'>
      <div style={{
        top: '707.11px',
        left: '340px',
        width: '400px',
        position: 'absolute',
      }}>
        <div style={{ width: '100%', marginLeft: `-${interpolate(frame, [0, 30, 380, 410], [0, 230, 230, 740], { extrapolateRight: "clamp" })}px`, position: 'absolute', backfaceVisibility: 'hidden', backgroundColor: '#282729', fontSize: '75px', borderRadius: '80px' }} className="text-center flex flex-col gap-8 p-10 leading-none shadow drop-shadow-xl font-bold">
          <Img src={staticFile('/database.png')} style={{ width: '100%' }} />
          <p>
            SQL
          </p>
        </div>
        <div style={{ width: '100%', marginLeft: `${interpolate(frame, [0, 30, 380, 410], [0, 230, 230, 740], { extrapolateRight: "clamp" })}px`, position: 'absolute', backfaceVisibility: 'hidden', backgroundColor: '#282729', fontSize: '75px', borderRadius: '80px', }} className="text-center flex flex-col gap-8 p-10 leading-none shadow drop-shadow-xl font-bold">

          <Img src={staticFile('/document.png')} style={{ width: '100%' }} />
          <p>
            NoSQL
          </p>
        </div>

      </div>
    </div>
  );
};
