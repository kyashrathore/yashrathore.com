function importAll(r) {
  return r.keys().map((fileName) => ({
    link: fileName.substr(1).replace(/\/index\.mdx$/, ''),
    module: r(fileName),
  }))
}

function dateSortDesc(a, b) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}
export function getAllOtherPostPreviews() {
  return importAll(require.context('./otherPlatformPosts/?preview', true, /\.mdx$/))
    .map(({ module }) => ({ link: module.meta.link, module }))
    .filter((p) => p.module.meta.private !== true)
    .sort((a, b) => dateSortDesc(a.module.meta.date, b.module.meta.date))
}
export default function getAllPostPreviews() {
  const blogPosts = importAll(require.context('./pages/?preview', true, /\.mdx$/))
    .filter((p) => p.module.meta.private !== true)
    .sort((a, b) => dateSortDesc(a.module.meta.date, b.module.meta.date))
  const otherPlatformPosts = getAllOtherPostPreviews()
  return blogPosts.concat(otherPlatformPosts)
}

export function getAllPosts() {
  return importAll(require.context('./pages/?rss', true, /\.mdx$/))
    .filter((p) => p.module.meta.private !== true)
    .sort((a, b) => dateSortDesc(a.module.meta.date, b.module.meta.date))
}
