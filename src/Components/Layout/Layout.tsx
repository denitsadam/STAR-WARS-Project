import React, { ReactNode, useState } from 'react';
import './assets/css/layout.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import backgroundMain from './assets/img/main-background.jpg';
import backgroundHome from './assets/img/welcome-screen-background.jpg';
import Films from '../Films/Films';
import Starships from '../Starships/Starships';
import Vehicles from '../Vehicles/Vehicles';
import Species from '../Species/Species';
import Planets from '../Planets/Planets';
import People from '../People/People';

export default function Layout() {
  const menuItems = [
    { value: 'Films', href: '/films' },
    { value: 'Starships', href: '/starships' },
    { value: 'Vehicles', href: '/vehicles' },
    { value: 'Species', href: '/species' },
    { value: 'Planets', href: '/planets' },
    { value: 'People', href: '/people' },
  ];

  const location = useLocation();

  return <>
    <div className='container'>
      <div className="content-container">
        <div className='top-bar'>
          <ul>
            {menuItems.map(itm => <li><Link
              className={location.pathname.includes(itm.href) ? 'active' : ''}
              to={itm.href}>{itm.value}
            </Link></li>)}
          </ul>
        </div>
        <div className='content-main'>
          <Content />
        </div>
      </div>
    </div>
  </>
}

const Background = (props: { background: string, children: ReactNode }) => {
  const { background, children } = props;
  return <>
    <div className="background-main" style={{ backgroundImage: `url(${background})` }} />
    <div className='content'>{children}</div>
  </>
}

const Content = () => {
  return (<Routes>
    <Route path='/' element={
      <Background background={backgroundHome} >
        <Home />
      </Background>} />
    <Route path='films' element={
      <Background background={backgroundMain}>
        <Films />
      </Background>}>
      <Route path=':id' element={
        <Background background={backgroundMain}>
          <Films />
        </Background>} />
    </Route>
    <Route path='starships' element={
      <Background background={backgroundMain}>
        <Starships />
      </Background>}>
      <Route path=':id' element={
        <Background background={backgroundMain}>
          <Starships />
        </Background>} />
    </Route>
    <Route path='vehicles' element={
      <Background background={backgroundMain}>
        <Vehicles />
      </Background>}>
      <Route path=':id' element={
        <Background background={backgroundMain}>
          <Vehicles />
        </Background>} />
    </Route>
    <Route path='species' element={
      <Background background={backgroundMain}>
        <Species />
      </Background>}>
      <Route path=':id' element={
        <Background background={backgroundMain}>
          <Species />
        </Background>} />
    </Route>
    <Route path='planets' element={
      <Background background={backgroundMain}>
        <Planets />
      </Background>}>
      <Route path=':id' element={
        <Background background={backgroundMain}>
          <Planets />
        </Background>} />
    </Route>
    <Route path='people' element={
      <Background background={backgroundMain}>
        <People />
      </Background>}>
      <Route path=':id' element={
        <Background background={backgroundMain}>
          <People />
        </Background>} />
    </Route>
  </Routes>)
}