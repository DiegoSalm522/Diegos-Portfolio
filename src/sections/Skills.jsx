import Marquee from "../components/Marquee";
import { others, programmingLanguages, technologies } from "../constants/skills";
import SkillCard from "../components/SkillCard";

const firstRow = programmingLanguages;
const secondRow = technologies;
const thirdRow = others;

const Skills = () => {
  return (
    <section id="skills" className="c-space section-spacing">
      <div className="items-start mt-18 md:mt-18">
        <h2 className="text-heading">Skills</h2>
        <br></br>
        {/*Programming Languages*/}
        <p className="subtext-heading">Programming Languages</p>
        <div className="relative flex flex-col items-center justify-center w-full mt-8 overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((skill) => (
              <SkillCard key={skill.username || skill.name} {...skill} />
            ))}
          </Marquee>
          <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
          <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
        </div>
        <br></br>
        {/*Technologies / Frameworks / Libraries*/}
        <p className="subtext-heading">Technologies / Frameworks / Libraries</p>
        <div className="relative flex flex-col items-center justify-center w-full mt-8 overflow-hidden">
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((skill) => (
              <SkillCard key={skill.username || skill.name} {...skill} />
            ))}
          </Marquee>
          <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
          <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
        </div>
        <br></br>
        {/*Others*/}
        <p className="subtext-heading">Others</p>
        <div className="relative flex flex-col items-center justify-center w-full mt-8 overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {thirdRow.map((skill) => (
              <SkillCard key={skill.username || skill.name} {...skill} />
            ))}
          </Marquee>
          <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
          <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
        </div>
      </div>
    </section>
  );
}

export default Skills;