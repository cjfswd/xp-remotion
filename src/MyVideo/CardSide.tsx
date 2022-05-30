import { spring, useCurrentFrame, staticFile } from 'remotion';

import { Img } from "remotion";

export const CardSide: React.FC<{ card: 'left' | 'right' }> = ({ card }) => {
  const frame = useCurrentFrame()

  return (
    <div className='w-full h-full flex items-center justify-center text-white'>
      <div style={{
        top: '287px',
        left: '760px',
        width: '400px',
        position: 'absolute',
      }}>
        <div style={{ width: '100%', marginLeft: `-230px`, position: 'absolute', backfaceVisibility: 'hidden', backgroundColor: '#282729', fontSize: '75px', borderRadius: '80px', }} className="text-center flex flex-col gap-8 p-10 leading-none shadow drop-shadow-xl font-bold">
          <Img src={staticFile('/database.png')} style={{ width: '100%' }} />
          <p>
            SQL
          </p>
        </div>
        <div style={{ width: '100%', marginLeft: `230px`, position: 'absolute', backfaceVisibility: 'hidden', backgroundColor: '#282729', fontSize: '75px', borderRadius: '80px' }} className="text-center flex flex-col gap-8 p-10 leading-none shadow drop-shadow-xl font-bold">
          <Img src={staticFile('/document.png')} style={{ width: '100%' }} />
          <p>
            NoSQL
          </p>
        </div>
      </div>
    </div >
  );
};
