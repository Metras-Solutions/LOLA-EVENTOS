import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend";

// const resend = new Resend('re_S8A4kTi2_FCvGoyWh1vWvW34TUyd3SuTn');
const resend = new Resend(process.env.RESEND_API_KEY);
import { 
  contactEmailHTML,
  contactEmailText,} from "@/lib/emailTemplates";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Destinatarios actualizados
    const destinatarios = ["jose.roman@metrasolutions.com"]
    const name = formData.nombre || "Sin Nombre"
    const email = formData.correo || ""
    const message = formData.mensaje || ""
    const phone = formData.telefono || ""
    const service = formData.tipoEvento || null
    const assist_number = formData.numeroAsistentes || null
    const event_date = formData.fechaTentativa || null
    const html = contactEmailHTML({ name, email, message, phone, service, assist_number, event_date });
    
    const { error } = await resend.emails.send({
      from: "WebSite <admin@lolaeventos.cl>",
      to: destinatarios,
      subject: "Nuevo contacto",
      html,
      // text,       // ← opcional, mejora entregabilidad
      tags: [{ name: "app", value: "website" }, { name: "type", value: "contact-form" }],
    });
    if (error) {
      return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
    return NextResponse.json({ success: true }, { status: 200 });
    // // Simular delay de envío
    // await new Promise((resolve) => setTimeout(resolve, 1000))

    // return NextResponse.json({
    //   success: true,
    //   message: "Emails enviados correctamente a ambos destinatarios",
    //   recipients: destinatarios,
    // })
  } catch (error) {
    console.error("Error enviando email:", error)
    return NextResponse.json({ success: false, message: "Error enviando email" }, { status: 500 })
  }
}
