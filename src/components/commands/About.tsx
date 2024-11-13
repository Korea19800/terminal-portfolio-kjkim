import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>KangJin Kim</HighlightSpan>!
      </p>
      <p>
        I am <HighlightAlt>a backend developer</HighlightAlt> passionate about learning new skills
      </p>
      <p>
        Also, I really like to solve various real-life problems using algorithms.<br />
      </p>
    </AboutWrapper>
  );
};

export default About;
