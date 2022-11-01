import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import TiposEquipos from '../tipos/TiposEquipos';
import Estados from '../estados/Estados';
import Marcas from '../marcas/Marcas';
import Usuarios from '../usuarios/Usuarios';
import Inventarios from '../inventarios/Inventarios';
import NotFound from './NotFound';
import InventarioEdit from '../inventarios/InventarioEdit';

const MyRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tiposequipos' element={<TiposEquipos />} />
        <Route path='/estados' element={<Estados />} />
        <Route path='/marcas' element={<Marcas />} />
        <Route path='/usuarios' element={<Usuarios />} />
        <Route path='/inventarios' element={<Inventarios />} />
        <Route path='/inventarios/:id' element={<InventarioEdit />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default MyRouter;