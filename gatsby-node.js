let isInitialBuild = true
/*
 * @type {import('gatsby').GatsbyConfig['sourceNodes']}
 */
exports.sourceNodes = ({ reporter }) => {
  if (!isInitialBuild && Math.random() > 0.5) {
    reporter.warn(`me a warning but nots an error`)
    throw new Error(`Argh, it gots me again!`)
  }

  isInitialBuild = false
}
