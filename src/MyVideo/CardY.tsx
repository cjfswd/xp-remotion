import { spring, useCurrentFrame, interpolate } from 'remotion';

import { Img } from "remotion";
import { Gif } from '@remotion/gif';

export const CardDown: React.FC<{
  left: string,
  right: string,
  sources: [string, string],
  labels: [string, string]
}> = ({ left, right, sources, labels }) => {

  return (
    <div className='w-full h-full flex items-center justify-center text-white'>
      <div style={{
        top: '287px',
        left: '760px',
        width: '400px',
        position: 'absolute',
      }}>
        <div style={{
          width: '100%',
          marginLeft: `-230px`,
          marginTop: left,
          position: 'absolute', backfaceVisibility: 'hidden', backgroundColor: '#282729', fontSize: '75px', borderRadius: '80px',
        }}
          className="text-center flex flex-col p-10 leading-none shadow drop-shadow-xl font-bold">
          {(() => {
            if (sources[0].includes('.gif')) {
              return <Gif src={sources[0]} style={{ width: '100%', borderRadius: '50px' }} />
            }
            return <Img src={sources[0]} style={{ width: '100%' }} />
          })()}
          {(() => {
            if (labels[0]) {
              return <p className='mt-10'>{labels[0]}</p>
            }
            return ''
          })()}
        </div>
        <div style={{
          width: '100%', marginLeft: `230px`,
          marginTop: right,
          position: 'absolute', backfaceVisibility: 'hidden', backgroundColor: '#282729', fontSize: '75px', borderRadius: '80px'
        }}
          className="text-center flex flex-col p-10 leading-none shadow drop-shadow-xl font-bold">
          {(() => {
            if (sources[1].includes('.gif')) {
              return <Gif src={sources[1]} style={{ width: '100%', borderRadius: '50px' }} />
            }
            return <Img src={sources[1]} style={{ width: '100%' }} />
          })()}
          {(() => {
            if (labels[1]) {
              return <p className='mt-10'>{labels[1]}</p>
            }
            return ''
          })()}
        </div>
      </div>
    </div>
  );
};
