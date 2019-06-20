/**
 * Returns a controller object for requesting and cancelling an animation freame that is properly cleaned up
 * once the component unmounts. New requests cancel and replace existing ones.
 */
export default function useAnimationFrame(): {
    request(fn: FrameRequestCallback): void;
    cancel: () => void;
};
