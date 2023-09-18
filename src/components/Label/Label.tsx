import { LabelContainer, LabelText } from "./Label.styles"

interface LabelProps {
  variant: 'confirmed' | 'pending' | 'canceled'
}

export function Label({ variant }: LabelProps) {
  const labelText = {
    confirmed: 'Confirmado',
    pending: 'Pendente',
    canceled: 'Cancelado'
  }

  return (
    <LabelContainer variant={variant}>
      <LabelText>{labelText[variant]}</LabelText>
    </LabelContainer>
  )
}