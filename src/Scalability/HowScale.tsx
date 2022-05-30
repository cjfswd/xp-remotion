import { Gif } from '@remotion/gif';
import { spring, useCurrentFrame, interpolate, Sequence, Img, staticFile, Video } from 'remotion';

export const HowScale: React.FC<{ initialTransition: number; finalTransition: number }> = ({ initialTransition, finalTransition }) => {
  const frame = useCurrentFrame()

  return (
    <div className='w-full h-full flex flex-row items-center justify-center text-white'>
      <Sequence from={0} durationInFrames={91}>
        <div style={{
          opacity: interpolate(frame, [0, 15, 76, 91], [0, 1, 1, 0], { extrapolateRight: "clamp", }),
          transform: 'scale(1.78)'
        }} className='flex flex-col justify-center'>
          <Gif src="https://media.giphy.com/media/3og0IFrHkIglEOg8Ba/giphy.gif" style={{ width: '1080px' }} />
        </div>
      </Sequence>
      <Sequence from={90} durationInFrames={60}>
        <div style={{
          opacity: interpolate(frame, [91, 106, 135, 150], [0, 1, 1, 0], { extrapolateRight: "clamp", }),
          background: 'linear-gradient(0deg, rgba(248,204,117,1) 0%, rgba(253,227,139,1) 100%)'
        }} className='flex flex-col justify-center'>
          <Gif src="https://media.giphy.com/media/xT8qBit7YomT80d0M8/giphy.gif" style={{ width: '1080px' }} />
        </div>
      </Sequence>
      <Sequence from={149} durationInFrames={121}>
        <div style={{
          opacity: interpolate(frame, [149, 180, 239, 269], [0, 1, 1, 0], { extrapolateRight: "clamp", }), transform: 'scale(3.21)', marginLeft: '-260px'
        }} className='flex flex-col justify-center'>
          <Gif src="https://media.giphy.com/media/br8RcHKRc4dOjBqo7M/giphy.gif" style={{ width: '1080px' }} />
        </div>
      </Sequence>
      <Sequence from={269}>
        <div className="flex">
          <Video style={{transform:`scale(3.2) rotate(${interpolate(frame, [269, 679, 680], [0, 0, -90], { extrapolateRight: "clamp", })}deg)`}} startFrom={420} playbackRate={1} src={staticFile('/videoplayback.webm')} />
        </div>
        <div style={{
          fontSize:'100px',
          position: 'absolute',
          top:'152.57px',
          gap: '70px',
          transform: `scale(${interpolate(useCurrentFrame(), [269, 284], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp", })})`,
        }}
          className='flex flex-col items-center text-white w-full text-center'
        >
          <div style={{borderRadius: '50px', backgroundColor: '#282729', fontWeight:'bolder'}} className='px-10 pt-5 pb-10 leading-tight'>
            <p>ESCALABILIDADE</p>
            <p>VERTICAL</p>
            <p>HORIZONTAL</p>
          </div>
          <div style={{ width: '400px', backgroundColor: '#282729', fontSize: '75px', borderRadius: '80px', }} className="w-full text-center flex flex-col gap-8 p-10 leading-none shadow drop-shadow-xl font-bold">
            <Img src={staticFile('/database.png')} style={{ width: '100%' }} />
            <p>
              SQL
            </p>
          </div>
          <div style={{
            width: '800px',
            backgroundColor: '#282729',
            fontSize: '75px',
            transform: `scale(${interpolate(useCurrentFrame(), [269, 284], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp", })})`,
            borderRadius: '80px',
          }} className="text-center flex flex-col leading-none shadow drop-shadow-xl font-bold">
            <Video startFrom={420} playbackRate={0.8} src={staticFile('/megazord.mp4')} style={{ width: '100%', borderRadius: '50px' }} />
          </div>
        </div>

      </Sequence>
      {/* <Sequence from={558} durationInFrames={250}>
        <div style={{
          position: 'absolute',
          gap: '70px',
          top: `${interpolate(useCurrentFrame(), [496, 526], [1920, 365.385], { extrapolateRight: "clamp", extrapolateLeft: "clamp", })}px`,
          width: '100%'
        }}
          className='flex flex-col items-center text-white'
        > */}
          {/* <div style={{ width: '800px', backgroundColor: '#282729', fontSize: '75px', borderRadius: '80px', }} className="text-center flex flex-col leading-none shadow drop-shadow-xl font-bold">
							<Video startFrom={8400} src={staticFile('/naruto.webm')} style={{ width: '100%', borderRadius: '50px' }} />
						</div> */}
          {/* <div style={{ width: '400px', backgroundColor: '#282729', fontSize: '75px', borderRadius: '80px', }} className="w-full text-center flex flex-col gap-8 p-10 leading-none shadow drop-shadow-xl font-bold">
            <Img src={staticFile('/document.png')} style={{ width: '100%' }} />
            <p>
              NoSQL
            </p>
          </div>
        </div>
      </Sequence> */}
    </div>
  );
};
