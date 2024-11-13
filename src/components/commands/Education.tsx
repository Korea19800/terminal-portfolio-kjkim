import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "Brigham Young University | 2023 ~ 2025",
    desc: "B.S in Computer Science | GPA: 3.95 / 4.0",
  },
  {
    title: "DePauw University | 2022 - 2023",
    desc: "B.S in Computer Science | GPA: 4.0 / 4.0",
  },
  {
    title: "Korea University | 2018-2020",
    desc: "B.A in History | GPA: 4.2 / 4.5",
  },
];

export default Education;
