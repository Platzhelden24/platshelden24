import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.resend_api_key;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Resend API Key fehlt." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const formData = await request.formData();

    const name = String(formData.get("name") || "");
    const telefon = String(formData.get("telefon") || "");
    const email = String(formData.get("email") || "");
    const ort = String(formData.get("ort") || "");
    const zimmer = String(formData.get("zimmer") || "");
    const etage = String(formData.get("etage") || "");
    const aufzug = String(formData.get("aufzug") || "");
    const details = String(formData.get("details") || "");

    const leistungen = formData.getAll("leistungen").map(String);

    const files = formData
      .getAll("bilder")
      .filter((file): file is File => file instanceof File && file.size > 0);

    const attachments = await Promise.all(
      files.map(async (file) => {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        return {
          filename: file.name,
          content: buffer.toString("base64"),
        };
      })
    );

    const text = `
Neue Anfrage über platzhelden24.de

Name: ${name}
Telefon: ${telefon}
E-Mail: ${email}
Ort: ${ort}

Leistungen:
${leistungen.length ? leistungen.join(", ") : "Keine Auswahl"}

Anzahl Zimmer: ${zimmer}
Etage: ${etage}
Aufzug vorhanden: ${aufzug}

Details:
${details}

Anzahl Bilder: ${files.length}
`;

    const { error } = await resend.emails.send({
      from: "Platzhelden24 <onboarding@resend.dev>",
      to: ["info@platzhelden24.de"],
      replyTo: email || undefined,
      subject: "Neue Anfrage Platzhelden24",
      text,
      attachments,
    });

    if (error) {
      return NextResponse.json(
        { error: "Die Anfrage konnte nicht gesendet werden." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Serverfehler beim Senden der Anfrage." },
      { status: 500 }
    );
  }
}