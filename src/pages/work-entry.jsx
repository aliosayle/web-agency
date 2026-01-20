import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import Layout from '../components/Layout'
import Work from './Work'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout>
      <Work />
    </Layout>
  </StrictMode>,
)
