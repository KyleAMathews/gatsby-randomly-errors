let isInitialBuild = true
/*
 * @type {import('gatsby').GatsbyConfig['sourceNodes']}
 */
exports.sourceNodes = () => {
  if (!isInitialBuild && Math.random() > 0.5) {
    throw new Error(`Argh, it gots me again!`)
  }

  isInitialBuild = false
}
