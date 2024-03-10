import { ButtonLink } from './styles'

type Props = {
  to: string
  children: string
}

const Button = ({ to, children }: Props) => (
  <ButtonLink to={to}>{children}</ButtonLink>
)

export default Button
