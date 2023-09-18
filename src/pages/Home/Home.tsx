import styles from './Home.module.css';
import { useEffect, useState } from 'react';
import { db } from '../../firebase/firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Label } from '../../components/Label/Label';

interface Participant {
	name: string;
	phone: string;
}

export function Home() {
	const [participants, setParticipants] = useState<Participant[]>([]);
	const [newParticipantName, setNewParticipantName] = useState('');
	const [newParticipantPhone, setNewParticipantPhone] = useState('');

	const MySwal = withReactContent(Swal);

	function showDialog() {
		MySwal.fire({
			icon: 'success',
			title: "Participação confirmada!",
      html: <i>Em alguns minutos, você receberá o endereço completo via WhatsApp.</i>
		});
	}

	async function getParticipants() {
		try {
			const querySnapshot = await getDocs(collection(db, 'participants'));
			const recoveredData = querySnapshot.docs.map((doc) =>
				doc.data()
			) as Participant[];
			setParticipants(recoveredData);
		} catch (error) {
			console.log('Error getting participants: ', error);
		}
	}

	async function addParticipant() {
		try {
			await addDoc(collection(db, 'participants'), {
				name: newParticipantName,
				phone: newParticipantPhone,
			});
			setNewParticipantName('');
			setNewParticipantPhone('');
			showDialog();
		} catch (error) {
			console.log('Error adding participant: ', error);
		}
	}

	useEffect(() => {
		getParticipants();
	}, [participants]);

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
					<input
						type='text'
						name='name'
						id='name'
						placeholder='Insira seu nome...'
						value={newParticipantName}
						onChange={(e) => setNewParticipantName(e.target.value)}
					/>
				</div>

				<div className={styles.data}>
					<label htmlFor='phone'>Telefone:</label>
					<input
						type='text'
						name='phone'
						id='phone'
						placeholder='DDD9XXXXXXXX'
						value={newParticipantPhone}
						onChange={(e) => setNewParticipantPhone(e.target.value)}
					/>
				</div>

				<button type='reset' onClick={addParticipant}>
					Confirmar participação
				</button>
			</form>

			<div className={styles.list}>
				<h3 className={styles.text}>Participantes confirmados:</h3>
				<ul className={styles.element}>
					{participants.map((participant) => (
						<li key={participant.phone}>{participant.name}</li>
					))}
				</ul>
			</div>

			<Label variant={participants.length >= 3 ? 'confirmed': 'pending'}/>
		</main>
	);
}
