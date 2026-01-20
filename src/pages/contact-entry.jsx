import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import Layout from '../components/Layout'
import Contact from './Contact'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout>
      <Contact />
    </Layout>
  </StrictMode>,
)
