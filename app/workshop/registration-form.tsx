"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { registerForWorkshop } from "./actions"

export function RegistrationForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  if (status === "success") {
    return (
      <div className="text-center py-4 space-y-2">
        <p className="text-lg font-medium text-primary">You're registered!</p>
        <p className="text-sm text-muted-foreground">We'll send you a confirmation at your email.</p>
      </div>
    )
  }

  return (
    <form
      className="space-y-3"
      action={async (formData) => {
        setStatus("submitting")
        setErrorMessage("")
        const result = await registerForWorkshop(formData)
        if (result.error) {
          setStatus("error")
          setErrorMessage(result.error)
        } else {
          setStatus("success")
        }
      }}
    >
      <div>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="w-full px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="w-full px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}
      <Button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
      >
        {status === "submitting" ? "Registering..." : "Register Now"}
      </Button>
    </form>
  )
}
