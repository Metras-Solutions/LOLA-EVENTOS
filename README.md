# Lola - Experiencias Gastronómicas

Sitio web moderno y minimalista para Lola, que unifica tres líneas de negocio bajo una misma marca: **Lola Eventos**, **Lola Funcional** y **Studio Lola**.

## 🌿 Características

- **Next.js App Router** con React 19
- **Tailwind CSS v4** con diseño minimalista en tonos verdes
- **shadcn/ui** para componentes de interfaz
- **Formulario de contacto** con validación (react-hook-form + zod)
- **Galería con lightbox** interactivo
- **WhatsApp flotante** configurable
- **Responsive** y accesible (mobile-first)
- **SEO optimizado** con metadata completa, Open Graph, Twitter Cards y JSON-LD
- **Sitemap automático** con next-sitemap
- **Imágenes optimizadas** con next/image y lazy loading

## 🚀 Instalación

\`\`\`bash
# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Generar sitemap (se ejecuta automáticamente después del build)
npx next-sitemap
\`\`\`

## 📝 Configuración

### Variables de Entorno

Edita `.env.local` con tus datos:

\`\`\`env
# WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER="+56994182013"

# SEO - URL del sitio (IMPORTANTE: actualizar con dominio de producción)
NEXT_PUBLIC_SITE_URL="https://lola-eventos.vercel.app"

# Opcional
NEXT_PUBLIC_ADDRESS_MAP_IFRAME_URL="https://maps.google.com/..."
RESEND_API_KEY="re_..." # Para email (futuro)
\`\`\`

### SEO y Metadata

El sitio incluye optimización SEO completa:

- **Metadata dinámica** en cada página con Open Graph y Twitter Cards
- **JSON-LD structured data** para Organization en la home
- **Sitemap.xml** generado automáticamente con `next-sitemap`
- **Robots.txt** configurado para permitir indexación
- **Canonical URLs** en todas las páginas
- **Alt text descriptivo** en todas las imágenes
- **Semantic HTML** con jerarquía de headings correcta (un h1 por página)
- **ARIA labels** para accesibilidad

#### Generar Sitemap

El sitemap se genera automáticamente después de cada build. Para regenerarlo manualmente:

\`\`\`bash
npx next-sitemap
\`\`\`

Verifica los archivos generados:
- `public/sitemap.xml`
- `public/robots.txt`

En producción, accede a:
- https://tu-dominio.com/sitemap.xml
- https://tu-dominio.com/robots.txt

### Assets a Reemplazar

**TODO: Reemplazar los siguientes placeholders con assets reales:**

1. **Favicons** (en `/public/favicons/`)
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png`
   - `android-chrome-192x192.png`
   - `android-chrome-512x512.png`

2. **Logos** (referencia: Canva páginas 18 y 19)
   - `/public/brand/lola-eventos-logo.png`
   - `/public/brand/lola-funcional-logo.png`
   - Actualizar en `components/header.tsx`

3. **Imágenes**
   - `/public/images/og-default.jpg` - Open Graph image (1200x630px)
   - `/public/galeria/g1.jpg` a `g12.jpg` - Galería
   - `/public/images/team-*.jpg` - Equipo
   - `/public/images/event-*.jpg` - Casos de éxito

4. **Contacto**
   - Email: `lola.eventoschile@gmail.com` ✅
   - Teléfono: `+56 9 9418 2013 / +56 9 8807 1823` ✅
   - Instagram: https://www.instagram.com/lolaeventos.chile ✅

## 📧 Integración de Email

El formulario de contacto actualmente registra las consultas en consola. Para activar el envío de emails:

1. Instalar Resend: `npm install resend`
2. Agregar `RESEND_API_KEY` en `.env.local`
3. Descomentar el código en `app/api/contact/route.ts`

## 🎨 Estructura del Proyecto

\`\`\`
app/
├── page.tsx                    # Home con JSON-LD
├── layout.tsx                  # Layout raíz con metadata SEO
├── quienes-somos/             # Sobre nosotros
├── servicios/
│   ├── page.tsx              # Overview de servicios
│   ├── eventos/              # Lola Eventos
│   ├── funcional/            # Lola Funcional
│   └── studio/               # Studio Lola
├── tipos-servicios/          # Tipos de servicios
├── blog/                     # Blog
├── galeria/                  # Galería de fotos
├── contacto/                 # Formulario de contacto
└── api/contact/              # API route para formulario

components/
├── header.tsx                # Navegación principal
├── footer.tsx                # Footer con contacto
├── hero-carousel.tsx         # Carrusel hero con imágenes locales
├── whatsapp-chat-widget.tsx  # Widget flotante de WhatsApp
├── contact-form.tsx          # Formulario con validación
├── gallery-grid.tsx          # Galería con lightbox
├── service-card.tsx          # Tarjetas de servicios
├── testimonial-carousel.tsx  # Carrusel de testimonios
└── ...

public/
├── images/                   # Imágenes optimizadas locales
│   ├── hero-*.png           # Imágenes del carrusel
│   ├── og-default.jpg       # Open Graph image
│   └── ...
├── favicons/                # Favicons y manifest
│   ├── favicon-*.png
│   ├── apple-touch-icon.png
│   └── site.webmanifest
├── robots.txt               # Generado por next-sitemap
└── sitemap.xml              # Generado por next-sitemap

lib/
├── design.ts                 # Sistema de diseño
├── types.ts                  # TypeScript types
└── data/                     # Datos seed
    ├── testimonials.ts
    ├── gallery.ts
    └── services.ts

next-sitemap.config.js        # Configuración del sitemap
\`\`\`

## 🔍 SEO Checklist

- ✅ Metadata completa en layout.tsx (Open Graph, Twitter Cards)
- ✅ JSON-LD structured data en home
- ✅ Sitemap.xml configurado con next-sitemap
- ✅ Robots.txt permitiendo indexación
- ✅ Canonical URLs en todas las páginas
- ✅ Imágenes migradas a local con next/image
- ✅ Alt text descriptivo en todas las imágenes
- ✅ Priority loading en imagen LCP (primer slide del carousel)
- ✅ Lazy loading en imágenes secundarias
- ✅ Semantic HTML con jerarquía de headings correcta
- ✅ ARIA labels para accesibilidad
- ✅ Responsive design mobile-first
- ⚠️ Favicons (pendiente: reemplazar con assets reales)
- ⚠️ OG image (pendiente: reemplazar con imagen real)

## 📱 Responsive Design

El sitio está optimizado para:
- **Mobile**: 360px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

Todos los componentes usan diseño mobile-first con breakpoints de Tailwind (sm, md, lg, xl).

## 🎯 Próximos Pasos

1. ✅ Reemplazar logos oficiales
2. ✅ Agregar fotos reales del equipo y eventos
3. ✅ Configurar WhatsApp con número real
4. ⚠️ Integrar servicio de email (Resend)
5. ⚠️ Agregar Google Maps (opcional)
6. ✅ Conectar redes sociales en footer
7. ⚠️ Configurar dominio y deploy en Vercel
8. ⚠️ Generar favicons reales
9. ⚠️ Crear OG image personalizada (1200x630px)
10. ⚠️ Actualizar NEXT_PUBLIC_SITE_URL con dominio de producción

## 📱 Contacto

- **Email**: lola.eventoschile@gmail.com
- **WhatsApp**: +56 9 9418 2013 / +56 9 8807 1823
- **Instagram**: [@lolaeventos.chile](https://www.instagram.com/lolaeventos.chile)
- **Ubicación**: Chile

## 🚀 Deploy en Vercel

1. Conecta el repositorio a Vercel
2. Configura las variables de entorno en Vercel:
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
   - `NEXT_PUBLIC_SITE_URL` (usar el dominio de producción)
3. Deploy automático en cada push a main
4. El sitemap se genera automáticamente en cada build

---

Desarrollado con ❤️ y 🌿 por v0
