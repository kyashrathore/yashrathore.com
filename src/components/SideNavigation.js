const links1 = [{ label: 'Projects' }, { label: 'Blog' }, { label: 'Snippets' }]
const links2 = [
  { label: <>Download Resume &rarr;</>, href: '/Yashvardhan-Singh.pdf', target: '_blank' },
]

const SideNavigation = () => {
  return (
    <div className="hidden xl:block">
      <div id="cursor"></div>
      <div className=" divide-y divide-white">
        <ul id="menu" className="w-fit">
          {links1.map((link, index) => {
            return (
              <li
                data-SpyLink={index}
                className="menu-item text-body mb-4 cursor-pointer hover:font-medium "
              >
                <a>{link.label}</a>
              </li>
            )
          })}
        </ul>
        <ul id="menu" className="w-44 mb-20 pt-4">
          {links2.map(({ label, ...rest }, index) => {
            return (
              <li
                data-SpyLink={index}
                className="menu-item text-body mb-4 cursor-pointer hover:font-medium w-fit"
              >
                <a {...rest}>{label}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
export default SideNavigation
