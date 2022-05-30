import { Gif } from '@remotion/gif';
import { spring, useCurrentFrame, interpolate, Sequence, Img, staticFile, Video } from 'remotion';

export const ScaleBetter: React.FC<{ initialTransition: number; finalTransition: number }> = ({ initialTransition, finalTransition }) => {
  const frame = useCurrentFrame()

  return (
    <div className='w-full h-full flex flex-row items-center justify-center text-white'>
      <Sequence from={1445} durationInFrames={250}>
					<div style={{
						gap: '70px',
						top: `${interpolate(useCurrentFrame(), [700, 730], [1920, 365.385], { extrapolateRight: "clamp", extrapolateLeft: "clamp", })}px`,
						width: '100%'
					}}
						className='flex flex-col items-center text-white'
					>
						<div style={{ transform: 'scale(1)', width: '1080px', backgroundColor: '#282729', fontSize: '75px', borderRadius: '80px' }} className="text-center flex flex-col leading-none shadow drop-shadow-xl font-bold">
							<Img src={staticFile('/dollar.jpg')} style={{ width: '100%' }} />
						</div>
						<div style={{ width: '400px', backgroundColor: '#282729', fontSize: '75px', borderRadius: '80px', marginTop: '20px' }} className="w-full text-center flex flex-col gap-8 p-10 leading-none shadow drop-shadow-xl font-bold">
							<Img src={staticFile('/document.png')} style={{ width: '100%' }} />
							<p>
								NoSQL
							</p>
						</div>
					</div>
				</Sequence>

    </div>
  );
};
