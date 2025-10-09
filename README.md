# Lola - Experiencias Gastronómicas

Sitio web moderno y minimalista para Lola, que unifica tres líneas de negocio bajo una misma marca: **Lola Eventos**, **Lola Funcional** y **Studio Lola**.

## 🌿 Características

- **Next.js App Router** con React 18
- **Tailwind CSS** con diseño minimalista en tonos verdes
- **shadcn/ui** para componentes de interfaz
- **Formulario de contacto** con validación (react-hook-form + zod)
- **Galería con lightbox** interactivo
- **WhatsApp flotante** configurable
- **Responsive** y accesible
- **SEO optimizado** con metadata dinámica

## 🚀 Instalación

\`\`\`bash
# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local

# Ejecutar en desarrollo
npm run dev
\`\`\`

## 📝 Configuración

### Variables de Entorno

Edita `.env.local` con tus datos:

\`\`\`env
NEXT_PUBLIC_WHATSAPP_NUMBER="+56912345678"
NEXT_PUBLIC_ADDRESS_MAP_IFRAME_URL="https://maps.google.com/..."
RESEND_API_KEY="re_..." # Para email (futuro)
\`\`\`

### Assets a Reemplazar

**TODO: Reemplazar los siguientes placeholders con assets reales:**

1. **Logos** (referencia: Canva páginas 18 y 19)
   - `/public/logos/lola-funcional.svg`
   - Actualizar en `components/header.tsx`

2. **Imágenes**
   - `/public/hero/hero-1.jpg` - Hero principal
   - `/public/galeria/g1.jpg` a `g12.jpg` - Galería
   - `/public/images/team-1.jpg`, `team-2.jpg` - Equipo
   - `/public/images/event-*.jpg` - Casos de éxito

3. **Contacto**
   - Email: `contacto@lola.cl`
   - Teléfono: actualizar en footer y página de contacto
   - Redes sociales: actualizar URLs en footer

## 📧 Integración de Email

El formulario de contacto actualmente registra las consultas en consola. Para activar el envío de emails:

1. Instalar Resend: `npm install resend`
2. Agregar `RESEND_API_KEY` en `.env.local`
3. Descomentar el código en `app/api/contact/route.ts`

## 🎨 Estructura del Proyecto

\`\`\`
app/
├── page.tsx                    # Home
├── quienes-somos/             # Sobre nosotros
├── propuesta/                 # Propuesta gastronómica
├── servicios/
│   ├── page.tsx              # Overview de servicios
│   ├── eventos/              # Lola Eventos
│   ├── funcional/            # Lola Funcional
│   └── studio/               # Studio Lola
├── tipos-de-eventos/         # Tipos de eventos
├── galeria/                  # Galería de fotos
├── contacto/                 # Formulario de contacto
└── api/contact/              # API route para formulario

components/
├── header.tsx                # Navegación principal
├── footer.tsx                # Footer con contacto
├── whatsapp-float.tsx        # Botón flotante de WhatsApp
├── contact-form.tsx          # Formulario con validación
├── gallery-grid.tsx          # Galería con lightbox
├── service-card.tsx          # Tarjetas de servicios
├── testimonial-carousel.tsx  # Carrusel de testimonios
└── ...

lib/
├── design.ts                 # Sistema de diseño
├── types.ts                  # TypeScript types
└── data/                     # Datos seed
    ├── testimonials.ts
    ├── gallery.ts
    └── services.ts
\`\`\`

## 🎯 Próximos Pasos

1. ✅ Reemplazar logos oficiales
2. ✅ Agregar fotos reales del equipo y eventos
3. ✅ Configurar WhatsApp con número real
4. ✅ Integrar servicio de email (Resend)
5. ✅ Agregar Google Maps (opcional)
6. ✅ Conectar redes sociales en footer
7. ✅ Configurar dominio y deploy en Vercel

## 📱 Contacto

- **Email**: contacto@lola.cl
- **WhatsApp**: +56 9 0000 0000
- **Ubicación**: Santiago, Chile

---

Desarrollado con ❤️ y 🌿 por v0
