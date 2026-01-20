import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import Layout from '../components/Layout'
import About from './About'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout>
      <About />
    </Layout>
  </StrictMode>,
)
