import { ReactNode } from 'react'

interface HeaderProps {
  image: { src: string; alt: string }
  children: ReactNode
}

const Header = ({ image, children }: HeaderProps) => {
  return (
    <header>
      <img
        src={image.src && image.src}
        alt={image.alt}
        style={{ marginRight: '1rem' }}
      />
      {children}
    </header>
  )
}

export default Header
