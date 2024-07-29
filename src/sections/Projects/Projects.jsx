import styles from './ProjectsStyles.module.css';
import Anganawadi_Administration from '../../assets/Anganawadi_Administration.png';
import Webuild from '../../assets/Webuild.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Anganawadi_Administration}
          link="https://github.com/kumar-rakshith/Anganawadi_Administration.git"
          h3="Anganawadi Administration"
          p="Anganawadi Administration is a web application designed to streamline the operations of Anganwadi centers. Built using HTML, CSS, JavaScript for the frontend, and PHP for the backend, with MySQL as the database management system."
        />
        <ProjectCard
          src={Webuild}
          link="https://github.com/kumar-rakshith/WeBuild.git"
          h3="WeBuild"
          p="WeBuild is an innovative web-based platform designed to transform the construction industry by enhancing communication, transparency, and project management. It offers a user-friendly interface for clients and robust tools for administrators, ensuring efficient and high-quality construction project execution"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/kumar-rakshith/Snake_Game.git"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/kumar-rakshith/Hospital_Management_System.git"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
