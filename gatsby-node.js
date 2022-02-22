let isInitialBuild = true
/*
 * @type {import('gatsby').GatsbyConfig['sourceNodes']}
 */
exports.sourceNodes = ({ reporter }) => {
  reporter.warn(`me a warning but nots an error`)
  if (!isInitialBuild && Math.random() > 0.5) {
    throw new Error(`Argh, it gots me again!`)
  }

  isInitialBuild = false
}
