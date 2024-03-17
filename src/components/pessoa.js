import styles from './pessoa.module.css'
function Pessoa({logomi, aluno, professor, escola, trabalho, foto}) {
return(
<div className={styles.pessoaContainer}>
<img src={logomi} alt="Mercado Imenso" />
<h2 className={styles.pessoaContent}>ALUNO: {aluno}</h2>
<p className={styles.pessoaContent}>PROFESSOR: {professor}</p>
<p className={styles.pessoaDescription}>ESCOLA: {escola}</p>
<p className={styles.pessoaDescription}>TRABALHO: {trabalho}</p>
<p className={styles.botaoEnviar}>CLICK NO BOTÃO ABAIXO PARA IR ATÉ A LOJA</p>
<button className={styles.botao}
    type="button"
    onClick={(e) => {
      e.preventDefault();
      window.open('https://www.mercadoimenso.com.br', '_blank');
      EventTarget="_blank";
      }}
> Mercado Imenso</button>
</div>
    )
}
export default Pessoa