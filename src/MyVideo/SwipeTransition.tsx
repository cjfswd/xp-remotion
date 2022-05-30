import { spring, useCurrentFrame, interpolate, Easing } from 'remotion';

export const SwipeTransition: React.FC<{ initialTransition: number; finalTransition: number }> = ({ initialTransition, finalTransition }) => {

  return (
    <div style={{ position: 'relative', flex: 1 }}>
      <div style={{
        marginLeft: `${interpolate(useCurrentFrame(), [0, 60], [1920, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })}px`, width: '1920px', height: '1080px', background: 'linear-gradient(0deg, rgba(6,6,6,1) 0%, rgba(18,17,18,1) 100%)'
      }}>
        &nbsp;
      </div>
    </div>
  );
};
