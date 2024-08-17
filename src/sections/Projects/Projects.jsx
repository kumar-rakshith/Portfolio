import styles from './ProjectsStyles.module.css';
import Anganawadi_Administration from '../../assets/Anganawadi_Administration.png';
import Webuild from '../../assets/Webuild.png';
import Hospital from '../../assets/Hospital.png';
import snake from '../../assets/Snake-game.png';
import ProjectCard from '../../common/ProjectCard';
import Youtube from '../../assets/yt.jpg'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>


      <ProjectCard
          src={Youtube}
          link="https://rakshith-youtube-clone.netlify.app"
          h3="YouTube Clone"
          p="YouTube clone built with React JS and Material UI 5. Features include responsive design, video playback, and search functionality. Fetches video data via RapidAPI. Explore a sleek UI and dynamic content with this intuitive video streaming app."
        />

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
          src={Hospital}
          link="https://github.com/kumar-rakshith/Snake_Game.git"
          h3="Hospital Management System"
          p="Hospital Management System A console-based Java application for managing hospital data using MySQL. Key features include adding and viewing patients, viewing doctors, and booking appointments. The project utilizes JDBC for database connectivity. Future plans include enhancing features and adding a GUI."
        />
        <ProjectCard
          src={snake}
          link="https://github.com/kumar-rakshith/Hospital_Management_System.git"
          h3="Snake Game"
          p="A classic Snake game implemented in Java using Swing. Control the snake with arrow keys, eat apples to grow, and avoid collisions. Includes score tracking and a restart button. Ideal for learning game development and for fun."
        />
      </div>
    </section>
  );
}

export default Projects;
