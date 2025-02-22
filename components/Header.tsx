import Button from './Button'

interface HeaderProps {
  buttonText: string;
  buttonHref: string;
}

export default function Header({ buttonText, buttonHref }: HeaderProps) {
  return (
    <div className="mb-8">
      <Button href={buttonHref}>{buttonText}</Button>
    </div>
  )
} 