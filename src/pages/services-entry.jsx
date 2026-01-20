import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import Layout from '../components/Layout'
import Services from './Services'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout>
      <Services />
    </Layout>
  </StrictMode>,
)
