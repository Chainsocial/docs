import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs'
})

export default withNextra({
  pageExtensions: ['ts', 'tsx', 'md', 'mdx']
})
