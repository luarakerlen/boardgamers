import styles from './Home.module.css';
import { useEffect, useState } from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Label } from '../../components/Label/Label';
import {
	Participant,
	useParticipantsManagement,
} from '../../hooks/useParticipantsManagement';

export function Home() {
	const [newParticipantName, setNewParticipantName] = useState('');
	const [newParticipantPhone, setNewParticipantPhone] = useState('');
	const { participants, getParticipants, addParticipant, removeParticipant } =
		useParticipantsManagement();

	const MySwal = withReactContent(Swal);

	function showAddConfirmDialog() {
		MySwal.fire({
			icon: 'success',
			title: 'Participação confirmada!',
			html: (
				<i>
					Em alguns minutos, você receberá o endereço completo via WhatsApp.
				</i>
			),
		});
	}

	function handleAddParticipant() {
		addParticipant({
			id: '',
			name: newParticipantName,
			phone: newParticipantPhone,
		});
		setNewParticipantName('');
		setNewParticipantPhone('');
		showAddConfirmDialog();
	}

	function handleRemoveParticipant(participant: Participant) {
		MySwal.fire({
			title: 'Digite seu telefone:',
			input: 'text',
			inputAttributes: {
				autocapitalize: 'off',
			},
			showCancelButton: true,
			confirmButtonText: 'Confirmar',
			cancelButtonText: 'Cancelar',
			preConfirm(inputValue) {
				if (inputValue === participant.phone) {
					MySwal.fire({
						title: 'Você tem certeza?',
						text: 'Você quer remover a sua confirmação de presença?',
						icon: 'warning',
						showCancelButton: true,
						confirmButtonText: 'Sim, quero remover!',
						cancelButtonText: 'Não',
					}).then((result) => {
						if (result.isConfirmed) {
							removeParticipant(participant.id);
							MySwal.fire(
								'Removido!',
								'Você foi removido desse evento',
								'success'
							);
						}
					});
				} else {
					MySwal.fire({
						title: 'Telefone incorreto!',
						text: 'Você digitou o telefone errado, tente novamente.',
						icon: 'error',
					});
				}
			},
		});
	}

	useEffect(() => {
		getParticipants();
	}, []);

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

				<button type='reset' onClick={handleAddParticipant}>
					Confirmar participação
				</button>
			</form>

			<div className={styles.listContainer}>
				<h3 className={styles.text}>Participantes confirmados:</h3>
				<ul className={styles.list}>
					{participants.map((participant) => (
						<li key={participant.id} className={styles.listElement}>
							<p>{participant.name}</p>
							<button
								className={styles.elementButton}
								onClick={() => handleRemoveParticipant(participant)}
							>
								<TiDeleteOutline size={20} />
							</button>
						</li>
					))}
				</ul>
			</div>

			<Label variant={participants.length >= 3 ? 'confirmed' : 'pending'} />
		</main>
	);
}
