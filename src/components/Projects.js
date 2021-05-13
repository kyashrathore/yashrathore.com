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
    link: 'https://yashrathore.netlify.app/typing/typing.html',
  },
  {
    tags: ['NextJS'],
    title: 'Frontend Folks',
    desc: 'About An immutable JavaScript library to create, calculate and format money.',
    link: 'https://frontendfolks.vercel.app/',
  },
]
const ProjectCard = ({ tags, title, desc, link }) => {
  return (
    <a
      href={link}
      className="project block relative rounded overflow-hidden ring-1 ring-opacity-25 hover:ring-opacity-70 hover:ring-1 cursor-pointer ring-white max-w-xl mb-8"
    >
      <div className="px-4 py-8">
        {tags.map((tag) => {
          return <span className="mb-2 mt-4 mr-2 inline-block text-xs text-gray-100">{tag}</span>
        })}

        <h3 className="text-white mb-2 text-xl font-semibold">{title}</h3>

        <p className="text-white mb-2 inline-block">{desc}</p>
      </div>
    </a>
  )
}

const Projects = () => {
  return projects.map((project) => {
    return <ProjectCard {...project} />
  })
}
export default Projects
