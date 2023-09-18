import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Label } from './Label';

describe('Label component', () => {
	it('should render a label with the confirmed text', () => {
		const { queryByText } = render(<Label variant='confirmed' />);

		expect(queryByText('Confirmado')).toBeTruthy();
		expect(queryByText('Pendente')).toBeNull();
		expect(queryByText('Cancelado')).toBeNull();
	});

	it('should render a label with the pending text', () => {
		const { queryByText } = render(<Label variant='pending' />);

		expect(queryByText('Confirmado')).toBeNull();
		expect(queryByText('Pendente')).toBeTruthy();
		expect(queryByText('Cancelado')).toBeNull();
	});

	it('should render a label with the canceled text', () => {
		const { queryByText } = render(<Label variant='canceled' />);

		expect(queryByText('Confirmado')).toBeNull();
		expect(queryByText('Pendente')).toBeNull();
		expect(queryByText('Cancelado')).toBeTruthy();
	});
});
