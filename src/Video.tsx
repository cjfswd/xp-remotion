import './style.css'

import { Composition } from 'remotion';
import { Final } from './Final';
import { Intro } from './Intro/Intro';
import { HowScale } from './Scalability/HowScale';
import { ScaleBetter } from './Scalability/ScaleBetter';
import { SoundTrack } from './SoundTrack/SoundTrack';
import { NoSqlSchema } from './Schema/NoSqlSchema';
import { SqlSchema } from './Schema/SqlSchema';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Final"
				component={Final}
				durationInFrames={3600}
				fps={60}
				width={1080}
				height={1920}
				defaultProps={{
					titleText: 'Test',
					titleColor: 'black',
				}}
			/>
			<Composition
				id="Intro"
				component={Intro}
				durationInFrames={461}
				fps={60}
				width={1080}
				height={1920}
			/>
			<Composition
				id="HowScale"
				component={HowScale}
				durationInFrames={746}
				fps={60}
				width={1080}
				height={1920}
			/>
			<Composition
				id="ScaleBetter"
				component={ScaleBetter}
				durationInFrames={746}
				fps={60}
				width={1080}
				height={1920}
			/>
			<Composition
				id="SqlSchema"
				component={SqlSchema}
				durationInFrames={746}
				fps={60}
				width={1080}
				height={1920}
			/>
			<Composition
				id="NoSqlSchema"
				component={NoSqlSchema}
				durationInFrames={746}
				fps={60}
				width={1080}
				height={1920}
			/>
			<Composition
				id='SoundTrack'
				component={SoundTrack}
				durationInFrames={3600}
				fps={60}
				width={1080}
				height={1920}
			/>
		</>
	);
};
