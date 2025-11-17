// lib/emailTemplates.ts

function escapeHTML(v: string) {
  return String(v)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const EVENTS_TYPE_LABELS: Record<string, string> = {
  "matrimonio": "Matrimonio",
  "cumpleanos": "Cumpleaños",
  "corporativo": "Evento Corporativo",
  "brunch": "Brunch",
  "coctel": "Cóctel",
  "lanzamiento": "Lanzamiento de Producto",
  "otro": "Otro",
};

export function contactEmailHTML({
  name,
  email,
  message,
  phone,
  service,
  assist_number,
  event_date
}: {
  name: string;
  email: string;
  message: string;
  phone?: string;
  service?: string | null;
  assist_number?: string | null;
  event_date?: string | null;
}) {
  const esc = (v: string) =>
    String(v)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  const msgHTML = esc(message).replace(/\n/g, "<br/>");
  const labelTipo = service ? (EVENTS_TYPE_LABELS[service] || service) : undefined;

  return `
  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nuevo mensaje desde lolaeventos.cl</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        background-color: #f5f6f8;
        font-family: "Segoe UI", Roboto, Arial, sans-serif;
        color: #1f2937;
      }
      .container {
        max-width: 640px;
        margin: 40px auto;
        background: #ffffff;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      }
      .header {
        background: linear-gradient(90deg, #0a4627, #82978cff);
        color: white;
        padding: 24px;
        text-align: center;
      }
      .header img {
        max-width: 250px;
        margin-bottom: 12px;
      }
      .header h1 {
        font-size: 22px;
        font-weight: 600;
        margin: 0;
      }
      .body {
        padding: 32px 24px;
      }
      .body h2 {
        color: #0a4627;
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 18px;
      }
      .info p {
        margin: 6px 0;
        font-size: 14px;
        line-height: 1.5;
      }
      .info strong {
        color: #0a4627;
      }
      .message {
        margin-top: 20px;
        padding: 16px;
        background: #f9fafb;
        border-left: 4px solid #0a4627;
        border-radius: 8px;
        font-size: 14px;
        line-height: 1.6;
      }
      .footer {
        background: #f9fafb;
        text-align: center;
        padding: 16px;
        font-size: 12px;
        color: #6b7280;
      }
      a {
        color: #0a4627;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Nuevo mensaje recibido</h1>
      </div>

      <div class="body">
        <h2>Formulario de contacto</h2>
        <div class="info">
          <p><strong>Nombre:</strong> ${esc(name)}</p>
          <p><strong>Email:</strong> <a href="mailto:${esc(email)}">${esc(email)}</a></p>
          ${phone ? `<p><strong>Teléfono:</strong> ${esc(phone)}</p>` : ""}
          ${labelTipo ? `<p><strong>Servicio:</strong> ${esc(labelTipo)}</p>` : ""}
          ${assist_number ? `<p><strong>Número de asistentes:</strong> ${esc(assist_number)}</p>` : ""}
          ${event_date ? `<p><strong>Fecha tentativa:</strong> ${esc(event_date)}</p>` : ""}
        </div>

        <div class="message">
          ${msgHTML}
        </div>
      </div>
      <div class="footer">
        Enviado automáticamente desde <a href="https://www.lolaeventos.cl/">lolaeventos.cl</a>
      </div>
    </div>
  </body>
  </html>`;
}

export function contactEmailText(p: {
  name: string; email: string; message: string; phone?: string;
  propertyId?: string | null; serviceId?: string | null; pageUrl?: string | null; title?: string | null;
}) {
  return `Nombre: ${p.name}
Email: ${p.email}
${p.phone ? `Teléfono: ${p.phone}\n` : ""}${p.propertyId ? `Propiedad: ${p.propertyId}\n` : ""}${p.serviceId ? `Servicio: ${p.serviceId}\n` : ""}${p.pageUrl ? `Página: ${p.pageUrl}\n` : ""}
Mensaje:
${p.message}
`;
}
