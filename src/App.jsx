import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'
import Produtos from './pages/Produtos/Produtos'
import Contato from './pages/Contato/Contato'
import Extra from './pages/Extra/Extra'
import NotFound from './pages/NotFound/NotFound'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/produtos' element={<Produtos />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/extra' element={<Extra />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>

      <Footer />

    </BrowserRouter>
  )
}

export default App