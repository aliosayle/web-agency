import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import Layout from '../components/Layout'
import Process from './Process'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout>
      <Process />
    </Layout>
  </StrictMode>,
)
