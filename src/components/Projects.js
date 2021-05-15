const projects = [
  {
    tags: ['Javascript', 'ReactJS'],
    title: 'React Notifi',
    desc: `Tiny (1.1kb) toast library for react notifications with animations and stackable toast's feature.`,
    link: 'https://react-notifi.netlify.app/',
  },
  {
    tags: ['Javascript'],
    title: 'TypeEasy',
    desc: `Minimal Typing game to master typing with top 3000 English words.`,
    link: 'https://typeeasy.netlify.app',
  },
  {
    tags: ['NextJS'],
    title: 'Frontend Folks',
    desc: 'A platform for frontend developers to share their interview experiences',
    link: 'https://frontendfolks.vercel.app/',
  },
  {
    tags: ['GatsbyJs'],
    title: 'Mandawa Heritage Tours',
    desc: 'Explore Mandawa - a city known for its fort and havelis',
    link: 'https://mandawaheritagetours.netlify.app',
  },
]
const ProjectCard = ({ tags, title, desc, link }) => {
  return (
    <a
      href={link}
      className="project block relative rounded overflow-hidden ring-1 ring-opacity-25 hover:ring-opacity-70 hover:ring-1 cursor-pointer ring-white max-w-xl mb-8"
    >
      <div className="p-4">
        {tags.map((tag) => {
          return <span className="mb-2 mt-4 mr-2 inline-block text-xs text-body">{tag}</span>
        })}

        <h3 className="text-heading mb-2 text-xl font-semibold">{title}</h3>

        <p className="text-body mb-2 inline-block">{desc}</p>
      </div>
    </a>
  )
}

const Projects = () => {
  return (
    <ul className="pt-8 md:pt-0">
      {projects.map((project) => {
        return <ProjectCard {...project} />
      })}
    </ul>
  )
}
export default Projects
