// reset css
import { ResetCss } from "./style.global";
import { Wrapper } from "./style.global";
import { Contact } from "./components/Contact";
export const App = () => {
  return (
    <Wrapper>
      <ResetCss />
      <Contact />
    </Wrapper>
  );
};
