import Button from './Button'
import SocialLinks from './SocialLinks'

interface FooterProps {
  buttonText: string;
  buttonHref: string;
}

export default function Footer({ buttonText, buttonHref }: FooterProps) {
  return (
    <div className="flex flex-col gap-4 mt-8 sm:flex-row sm:items-center sm:justify-between">
      <SocialLinks />
      <Button href={buttonHref}>{buttonText}</Button>
    </div>
  )
} 