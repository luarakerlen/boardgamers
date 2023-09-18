import styles from './Home.module.css';

export function Home() {
	return (
		<main className={styles.main}>
			<h2>Próxima jogatina:</h2>
			<div className={styles.information}>
				<p>Data: 24/09/2023</p>
				<p>Horário: 14:00</p>
				<p>Local: Casa da Luara - Cariacica</p>
			</div>

			<h4 className={styles.text}>
				Para confirmar presença, preencha o formulário abaixo:
			</h4>

			<form action='' className={styles.form}>
				<div className={styles.data}>
					<label htmlFor='name'>Nome:</label>
					<input type='text' name='name' id='name' />
				</div>

				<div className={styles.data}>
					<label htmlFor='phone'>Telefone:</label>
					<input type='text' name='phone' id='phone' />
				</div>

				<button type='submit'>Confirmar participação</button>
			</form>

			<div>
				<h3 className={styles.text}>Participantes confirmados:</h3>
				<ul className={styles.list}>
					<li>Luara</li>
					<li>Raira</li>
				</ul>
			</div>
		</main>
	);
}
