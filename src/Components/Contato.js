import React from 'react';
import styles from '../assets/css/Contato.module.css';
import foto from '../assets/img/contato.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Route | Contato" description="Entre em contato"/>
      <img src={foto} alt="Máquina de escrever"/>
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>contato@contato.com</li>
          <li>9999-99999</li>
          <li>Rua Ali perto, 999</li>
        </ul>
      </div>
    </section>
  )
}

export default Contato;
