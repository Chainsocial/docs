'use client'

import { Sandpack } from '@codesandbox/sandpack-react'
import { githubDark } from '@codesandbox/sandpack-themes'

export function LiveExample() {
  return (
    <Sandpack
      theme={githubDark}
      template="react"
      options={{
        showNavigator: false,
        showTabs: true,
        showLineNumbers: true,
        showInlineErrors: true,
        wrapContent: true,
        editorHeight: 420
      }}
      files={{
        '/App.tsx': `import './styles.css'

const response = {
  id: 'post_7h2k',
  author: '@mia',
  content: 'Hello ChainSocial',
  createdAt: '2026-02-02T12:00:00Z'
}

export default function App() {
  return (
    <main className="card">
      <h1>ChainSocial API</h1>
      <p><strong>{response.author}</strong> · {response.createdAt}</p>
      <p>{response.content}</p>
      <button onClick={() => alert('Use the API key from your dashboard')}>Create Post</button>
    </main>
  )
}
`,
        '/styles.css': `:root {
  color-scheme: dark;
  font-family: ui-sans-serif, system-ui, -apple-system, sans-serif;
}

body {
  margin: 0;
  padding: 2rem;
  background: #0b0f17;
  color: #e6edf3;
}

.card {
  max-width: 520px;
  padding: 1.5rem 1.75rem;
  background: linear-gradient(135deg, #111827, #0f172a 60%);
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 16px;
  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.35);
}

button {
  margin-top: 1rem;
  background: #22d3ee;
  color: #0f172a;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
}

button:hover {
  filter: brightness(0.95);
}
`
      }}
    />
  )
}
