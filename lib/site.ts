export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sonomafeldenkrais.com"

export const SITE_NAME = "Sonoma Feldenkrais"

/** Public Setmore booking page. Shows the visible service menu. Used as the
 * "open in a new tab" fallback link on /book. */
export const BOOKING_URL = "https://feldenkraisoi.setmore.com/book"

/** Deep Setmore link that opens straight to the private-session date picker.
 * Embedded in the /book iframe. */
export const BOOKING_SESSION_URL =
  "https://feldenkraisoi.setmore.com/book?step=time-slot&products=44773fa3-7b47-491f-82c4-9105827d7e58&type=service&staff=31bf6b47-eb94-4af2-ae97-348a70095977&staffSelected=true"

// TODO: add BOOKING_CALL_URL (deep link to the 15-minute call date picker)
// once the Setmore call service exists, then wire up /book?type=call.

/** Public business number (Google Voice). Keeps the personal cell off listings. */
export const PHONE_DISPLAY = "(707) 583-9472"
export const PHONE_TEL = "+17075839472"

export const EMAIL = "bendor.vered@gmail.com"
