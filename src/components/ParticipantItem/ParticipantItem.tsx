import { TiDeleteOutline } from 'react-icons/ti';
import { Participant } from '../../interfaces';
import {
	ParticipantItemContainer,
	ParticipantName,
	RemoveButton,
} from './ParticipantItem.styles';

interface ParticipantItemProps {
	participant: Participant;
	handleRemoveParticipant: (participant: Participant) => void;
}

export function ParticipantItem({
	participant,
	handleRemoveParticipant,
}: ParticipantItemProps) {
	return (
		<ParticipantItemContainer>
			<ParticipantName>{participant.name}</ParticipantName>
			<RemoveButton onClick={() => handleRemoveParticipant(participant)}>
				<TiDeleteOutline size={24} color="white" />
			</RemoveButton>
		</ParticipantItemContainer>
	);
}
