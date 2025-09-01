import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Instagram, Globe, MapPin, Phone, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const links = [
  {
    href: 'https://www.instagram.com/juniorgualbertto_',
    label: 'Instagram',
    icon: <Instagram className="h-6 w-6 text-muted-foreground" />,
  },
  {
    href: '#',
    label: 'Website',
    icon: <Globe className="h-6 w-6 text-muted-foreground" />,
  },
  {
    href: 'https://www.google.com/maps/search/?api=1&query=Conect+Towers+QS+01%2C+sala+639+%C3%81guas+Claras+-+Bras%C3%ADlia%2FDF',
    label: 'Nosso escritório',
    description: 'Conect Towers QS 01, sala 639 - Águas Claras',
    icon: <MapPin className="h-6 w-6 text-muted-foreground" />,
  },
]

export default function Home() {
  return (
    <div className="flex min-h-dvh w-full flex-col items-center justify-center bg-background font-body">
      <main className="flex w-full max-w-lg flex-col items-center justify-center p-4">
        <div className="flex w-full flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <Avatar className="h-32 w-32 border-4 border-card shadow-lg">
              <AvatarImage
                src="https://picsum.photos/128"
                alt="Junior Gualbertto"
                data-ai-hint="professional man portrait"
                width={128}
                height={128}
              />
              <AvatarFallback>JG</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-bold tracking-tight text-foreground">
                Junior Gualbertto
              </h1>
              <p className="text-md text-muted-foreground">
                Consultor especializado em financiamento e consórcio de imóveis
              </p>
            </div>
            <p className="max-w-sm text-sm text-foreground/80">
              Encontre o financiamento e consórcio ideal para seu imóvel. São
              mais de 40 bancos com alternativas exclusivas. Simule já pelo
              WhatsApp 📲
            </p>
          </div>

          <div className="flex w-full flex-col gap-4">
            <Button
              asChild
              size="lg"
              className="h-14 w-full bg-primary text-base font-semibold text-primary-foreground shadow-md transition-transform duration-200 ease-in-out hover:scale-[1.02]"
            >
              <Link
                href="https://wa.me/5561998166292"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <Phone className="h-6 w-6" />
                Entre em contato via WhatsApp
              </Link>
            </Button>

            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.label !== 'Website' ? '_blank' : '_self'}
                rel={link.label !== 'Website' ? 'noopener noreferrer' : ''}
                className="group flex w-full items-center rounded-xl border bg-card p-4 text-card-foreground shadow-sm transition-transform duration-200 ease-in-out hover:scale-[1.02] hover:bg-card/95"
              >
                {link.icon}
                <div className="ml-4 flex flex-1 flex-col justify-center">
                  <p className="font-semibold">{link.label}</p>
                  {link.description && (
                    <p className="text-sm text-muted-foreground">
                      {link.description}
                    </p>
                  )}
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
