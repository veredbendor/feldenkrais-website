"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function registerForWorkshop(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string

  if (!name || !email) {
    return { error: "Name and email are required." }
  }

  try {
    await resend.emails.send({
      from: "Workshop Registration <onboarding@resend.dev>",
      to: "bendor.vered@gmail.com",
      subject: "New Workshop Registration: Release Your Neck & Shoulders",
      text: `New registration:\n\nName: ${name}\nEmail: ${email}`,
    })

    return { success: true }
  } catch {
    return { error: "Something went wrong. Please try again." }
  }
}
