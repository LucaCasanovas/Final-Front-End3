import React from 'react'
import { useGlobalContext } from '../context/Context'

const Footer = () => {
  const { state } = useGlobalContext();
  return (
    <footer className={`${state.theme === 'dark' ? 'light-theme' : 'dark-theme'}`}>
        <img src="../public/images/DH.png" alt='DH-logo' />
        <nav>
          <img src="../public/images/ico-facebook.png" className='logo' alt="logo-facebook" />
          <img src="../public/images/ico-instagram.png" className='logo' alt="logo-instagram" />
          <img src="../public/images/ico-tiktok.png" className='logo' alt="logo-tiktok" />
          <img src="../public/images/ico-whatsapp.png" className='logo' alt="logo-whatsapp" />
        </nav>
    </footer>
  )
}

export default Footer