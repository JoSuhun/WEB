import { Container } from "../styles/animation"
import { useScrollAnimation } from "../hooks/useScrollAnimation";

type PropsType = {
  children: React.ReactNode;
};
// qwerqwer
export const ScrollAnimationContainer = ({ children }: PropsType) => {
  const { ref, isInViewport } = useScrollAnimation();
  return (
    <Container ref={ref} className={isInViewport ? "frame-in" : ""}>
      {children}
    </Container>
  );
};