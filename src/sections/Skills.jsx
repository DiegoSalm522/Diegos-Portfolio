import Marquee from "../components/Marquee";
import { programmingLanguages, frontend, backend, others } from "../constants/skills";
import SkillCard from "../components/SkillCard";

const Skills = () => {
  return (
    <section id="skills" className="c-space section-spacing">
      <div className="items-start mt-18 md:mt-18">
        <h2 className="text-heading">Skills</h2>
        <br></br>
        {/*Programming Languages*/}
        <p className="subtext-heading">Programming Languages</p>
        <div className="relative flex flex-col items-center justify-center w-full mt-8 overflow-hidden">
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {programmingLanguages.map((skill) => (
              <SkillCard key={`${skill.name}-${skill.id}`} {...skill} />
            ))}
          </Marquee>
        </div>
        <br></br>
        {/*Frontend*/}
        <p className="subtext-heading">Frontend</p>
        <div className="relative flex flex-col items-center justify-center w-full mt-8 overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {frontend.map((skill) => (
              <SkillCard key={`${skill.name}-${skill.id}`} {...skill} />
            ))}
          </Marquee>
        </div>
        <br></br>
        {/*Backend*/}
        <p className="subtext-heading">Backend</p>
        <div className="relative flex flex-col items-center justify-center w-full mt-8 overflow-hidden">
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {backend.map((skill) => (
              <SkillCard key={`${skill.name}-${skill.id}`} {...skill} />
            ))}
          </Marquee>
        </div>
        <br></br>
        {/*Others*/}
        <p className="subtext-heading">Others</p>
        <div className="relative flex flex-col items-center justify-center w-full mt-8 overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {others.map((skill) => (
              <SkillCard key={`${skill.name}-${skill.id}`} {...skill} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default Skills;