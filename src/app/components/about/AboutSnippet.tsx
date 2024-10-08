import '../../../app/globals.css';

export default function AboutSnippet() {
  const scrollToProjectsSection = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col bg-gradient-to-r from-slate-300 via-slate-100 to-slate-300 pb-10 items-center w-screen p-5 font-barlow">
      <div className="text-slate-800">
        <main className="max-w-2xl">
          <div className="text-left">
            <h2 className="text-2xl font-bold text-slate-800 pt-6 pb-4">
              About Me
            </h2>
            <p className="leading-relaxed text-slate-600 mb-6 max-w-5xl">
              With over 10 years of experience as an account manager, I have
              worked with and supported people from all walks of life. During
              this time, I built a reputation for having a solid work ethic and
              a curiosity that drives me to delve into the details of problems
              to find creative solutions.
            </p>
            <p className="leading-relaxed text-slate-600 mb-6 max-w-5xl">
              This year, I decided to follow my passion for technology and
              transition into a new career, enrolling in Dev Academy&apos;s
              Software Development Bootcamp, a rigorous and immersive programme
              which I graduated from in May. Now, I&apos;m excited to combine my
              account management experience with my new technical skills in a
              fresh role.
            </p>
            <p className="leading-relaxed text-slate-600 max-w-5xl">
              I&apos;m currently developing a full stack hiking app. This
              project allows me to apply and expand my skills in web
              development, while creating a useful tool that provides detailed
              trail information, event coordination, and community engagement
              features. It&apos;s a practical application of my technical
              abilities, showcasing my problem-solving skills and commitment to
              continuous learning. And a good excuse to spend time planning
              future hikes!
            </p>
          </div>

          <a
            href="#projects-section"
            onClick={scrollToProjectsSection}
            className=" m-3 ml-20"
          >
            <button className="px-8 py-3 mt-10 bg-pink-600 text-white font-bold p-2 rounded-lg text-sm  transform hover:scale-110 duration-200 ease-in-out">
              See Some Of My Projects
            </button>
          </a>
        </main>
      </div>
    </div>
  );
}
