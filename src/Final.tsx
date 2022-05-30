import { Img, spring, interpolate, Sequence, useCurrentFrame, useVideoConfig, Video, staticFile } from 'remotion';
import { Conclusion } from './Conclusion/Conclusion';
import { Intro } from './Intro/Intro';
import { HowScale } from './Scalability/HowScale';
import { ScaleBetter } from './Scalability/ScaleBetter';
import { SoundTrack } from './SoundTrack/SoundTrack';
import { NoSqlSchema } from './Schema/NoSqlSchema';
import { SqlSchema } from './Schema/SqlSchema';


export const Final: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({ titleText, titleColor }) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const opacity = interpolate(
		frame,
		[videoConfig.durationInFrames - 25, videoConfig.durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	// MarginTop: `${card === 'left' ? interpolate(frame, frames, values, { extrapolateRight: "clamp", extrapolateLeft: "clamp" }) : 0}px`, 

	return (
		<div style={{ flex: 1, background: 'linear-gradient(0deg, rgba(6,6,6,1) 0%, rgba(18,17,18,1) 100%)' }}>
			<div style={{ opacity }}>
				<Sequence from={0} durationInFrames={580}>
					<Intro initialTransition={0} finalTransition={460} />
				</Sequence>
				{/* <Sequence from={580} durationInFrames={900}>
					<HowScale initialTransition={460} finalTransition={729} />
				</Sequence>
				<Sequence from={1480} durationInFrames={562}>
					<ScaleBetter initialTransition={460} finalTransition={740} />
				</Sequence>
				<Sequence from={2041} durationInFrames={501}>
					<SqlSchema initialTransition={460} finalTransition={740} />
				</Sequence>
				<Sequence from={2542} durationInFrames={421}>
					<NoSqlSchema initialTransition={460} finalTransition={740} />
				</Sequence>
				<Sequence from={2962}>
					<Conclusion initialTransition={0} finalTransition={0} />
				</Sequence> */}
				<Sequence from={0} durationInFrames={580}>
					<SoundTrack initialTransition={0} finalTransition={0} />
				</Sequence> 
			</div>
		</div>
	);
};
