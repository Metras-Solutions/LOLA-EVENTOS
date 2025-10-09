import Link from "next/link"
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[oklch(30%_0.04_120)] text-secondary/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="font-serif text-2xl font-bold text-secondary mb-4">Studio Lola</div>
            <p className="text-sm leading-relaxed">Experiencias gastronómicas que marcan la diferencia.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-secondary mb-4">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/quienes-somos" className="hover:text-secondary transition-colors">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link href="/tipos-servicios" className="hover:text-secondary transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="hover:text-secondary transition-colors">
                  Galería
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-secondary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-secondary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-secondary mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:contacto@lola.cl" className="hover:text-secondary transition-colors">
                  contacto@lola.cl
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+56900000000" className="hover:text-secondary transition-colors">
                  +56 9 0000 0000
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Santiago, Chile</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-secondary mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary/20 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Studio Lola. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
