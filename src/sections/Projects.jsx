import { FaGithub } from "react-icons/fa";
import { projects } from '../constants/projects';
import { MdOutlineComputer } from "react-icons/md";

const Projects = () => {
  return (
    <section id='projects' className="c-space section-spacing">
      <h2 className="text-heading">Projects</h2>
      <div className="gap-4 mt-12 flex flex-col space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col md:flex-row md:items-center gap-4 rounded-2xl bg-[#0B0B0D]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full md:w-1/2 h-[14rem] sm:h-[18rem] md:h-[14rem] lg:h-[18rem] object-cover rounded-2xl"
            />
            <div className="flex-1 px-4 md:px-1 pb-4 md:pb-0 flex flex-col gap-3 md:pt-4 mb-auto">
              <p className="headtext font-bold">{project.title}</p>
              <p className="subtext">{project.description}</p>
              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag) => (
                  <div key={tag.id} className="flex items-center gap-2 bg-black-200 px-3 py-1.5 rounded-lg">
                    <img src={tag.path} alt={tag.name} className="w-5 h-5 object-contain" />
                    <span className="hidden lg:flex text-sm text-white-600">{tag.name}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 flex-wrap">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-600 px-6 py-2 w-[8rem] justify-center rounded-full font-semibold cursor-pointer hover-animation flex items-center gap-2"
                  >
                    <MdOutlineComputer size={18} />
                    Demo
                  </a>
                )}
                {project.repository && (
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-100 text-black px-6 py-2 w-[8rem] justify-center rounded-full font-semibold cursor-pointer hover-animation flex items-center gap-2"
                  >
                    <FaGithub size={18} />
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;