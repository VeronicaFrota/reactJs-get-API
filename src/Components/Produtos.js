import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../assets/css/Produtos.module.css';
import Head from './Head';

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
    .then(response => response.json())
    .then(json => setProdutos(json));
  }, []);

  if(produtos == null) return null;

  return (
    <section className={`${styles.produtos} animeLeft`}>
      <Head title="Route" description="Descrição do site"/>
      {produtos.map((produto) => 
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo}/>
          <h1 className={styles.nome}>{produto.nome}</h1>
        </Link>
      )}
    </section>
  )
}

export default Produtos;
