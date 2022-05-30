import { Audio, staticFile } from 'remotion';

export const SoundTrack: React.FC<{ initialTransition: number; finalTransition: number }> = ({ initialTransition, finalTransition }) => {

  return (
    <>
      <Audio src={staticFile('/audio.mp3')} />
    </>
  );
};
