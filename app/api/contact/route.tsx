import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Log the contact form submission
    console.log("[v0] Contact form submission:", {
      nombre: data.nombre,
      correo: data.correo,
      telefono: data.telefono,
      tipoEvento: data.tipoEvento,
      numeroAsistentes: data.numeroAsistentes,
      fechaTentativa: data.fechaTentativa,
      mensaje: data.mensaje,
      timestamp: new Date().toISOString(),
    })

    // TODO: Integrate with Resend or SMTP service
    // Example with Resend:
    // const { Resend } = require('resend')
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'Lola <contacto@lola.cl>',
    //   to: 'admin@lola.cl',
    //   subject: `Nueva consulta: ${data.tipoEvento}`,
    //   html: `
    //     <h2>Nueva consulta de contacto</h2>
    //     <p><strong>Nombre:</strong> ${data.nombre}</p>
    //     <p><strong>Correo:</strong> ${data.correo}</p>
    //     <p><strong>Teléfono:</strong> ${data.telefono}</p>
    //     <p><strong>Tipo de evento:</strong> ${data.tipoEvento}</p>
    //     <p><strong>Número de asistentes:</strong> ${data.numeroAsistentes}</p>
    //     <p><strong>Fecha tentativa:</strong> ${data.fechaTentativa}</p>
    //     <p><strong>Mensaje:</strong></p>
    //     <p>${data.mensaje}</p>
    //   `,
    // })

    return NextResponse.json({ success: true, message: "Formulario recibido correctamente" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json({ success: false, message: "Error al procesar el formulario" }, { status: 500 })
  }
}
