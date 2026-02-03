import './globals.css'
import 'nextra-theme-docs/style.css'
import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import { Layout, Navbar, Footer } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: {
    default: 'ChainSocial Docs',
    template: '%s | ChainSocial Docs'
  },
  description: 'Build social apps with ChainSocial APIs, SDKs, and smart contracts.'
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={sora.className}>
      <body>
        <Layout
          navbar={
            <Navbar
              logo={<span className="text-lg font-semibold">ChainSocial Docs</span>}
              projectLink="https://github.com/Chainsocial"
            />
          }
          footer={
            <Footer>
              <span>ChainSocial © {new Date().getFullYear()}</span>
            </Footer>
          }
          docsRepositoryBase="https://github.com/Chainsocial/docs/tree/main"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          toc={{ float: true }}
          pageMap={await getPageMap()}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
