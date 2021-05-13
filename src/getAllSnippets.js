function importAll(r) {
  return r.keys().map((fileName) => ({
    module: r(fileName),
  }))
}

function dateSortDesc(a, b) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

export default function getAllSnippets() {
  return importAll(require.context('./snippets/?preview', true, /\.mdx$/))
    .filter((p) => p.module.meta.private !== true)
    .sort((a, b) => dateSortDesc(a.module.meta.date, b.module.meta.date))
}
