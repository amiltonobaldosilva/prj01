import styles from './pessoa.module.css'
function Pessoa({nome, telefone, idade, foto}) {
return(
<div className={styles.pessoaContainer}>
<img src={foto} alt={nome} />
<h2 className={styles.pessoaContent}>Nome: {nome}</h2>
<p className={styles.pessoaContent}>Telefone: {telefone}</p>
<p className={styles.pessoaDescription}>Idade: {idade}</p>
</div>
    )
}
export default Pessoa