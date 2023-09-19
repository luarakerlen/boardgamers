import { useState } from 'react';
import { db } from '../firebase/firebase';
import {
	addDoc,
	collection,
	getDocs,
	deleteDoc,
	doc,
} from 'firebase/firestore';
import { Participant } from '../interfaces';

export function useParticipantsManagement() {
	const [participants, setParticipants] = useState<Participant[]>([]);

	async function getParticipants() {
		try {
			const querySnapshot = await getDocs(collection(db, 'participants'));
			const recoveredData = querySnapshot.docs.map((doc) => {
				return {
					id: doc.id,
					...doc.data(),
				};
			}) as Participant[];
			setParticipants(recoveredData);
		} catch (error) {
			console.log('Error getting participants: ', error);
		}
	}

	async function addParticipant({ name, phone }: Participant) {
		try {
			await addDoc(collection(db, 'participants'), {
				name,
				phone,
			});
			getParticipants();
		} catch (error) {
			console.log('Error adding participant: ', error);
		}
	}

	async function removeParticipant(id: string) {
		try {
			await deleteDoc(doc(db, 'participants', id));
			getParticipants();
		} catch (error) {
			console.log('Error removing participant: ', error);
		}
	}

	return {
		participants,
		getParticipants,
		addParticipant,
		removeParticipant,
	};
}
