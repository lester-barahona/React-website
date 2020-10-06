import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import Button from './../button/Button';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Únete al boletín de Aventuras para recibir nuestras mejores ofertas de vacaciones
        </p>
        <p className='footer-subscription-text'>
          Puede darse de baja en cualquier momento.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Tu E-Mail'
            />
            <Button buttonStyle='btn--outline'>Suscribirse</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Acerca de</h2>
            <Link to='/sign-up'>Como Funciona</Link>
            <Link to='/'>Testimonios</Link>
            <Link to='/'>Careras</Link>
            <Link to='/'>Investigaciones</Link>
            <Link to='/'>Terminos de Servicio</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contactanos</h2>
            <Link to='/'>Contacto</Link>
            <Link to='/'>Soporte</Link>
            <Link to='/'>Destinos</Link>
            <Link to='/'>Patrocinadores</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Principal</Link>
            <Link to='/'>Camapaña</Link>
            <Link to='/'>Agencia</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Redes Sociales</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            L'TRA <i className="fas fa-umbrella-beach"></i>
            </Link>
          </div>
          <small className='website-rights'>L'TRA © 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;