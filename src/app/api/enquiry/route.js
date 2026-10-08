// Receives admission / contact enquiries.
// Hook this up to email (e.g. Nodemailer/Resend), Google Sheets or a CRM.
export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const phone = String(data.phone || "").replace(/\D/g, "").slice(-10);
  if (!data.parent && !data.name) {
    return Response.json({ ok: false, error: "Name is required" }, { status: 422 });
  }
  if (!/^[6-9]\d{9}$/.test(phone)) {
    return Response.json({ ok: false, error: "Valid phone is required" }, { status: 422 });
  }

  console.log("[enquiry]", new Date().toISOString(), data);
  return Response.json({ ok: true });
}
