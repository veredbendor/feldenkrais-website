import Image from "next/image"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Image src="/images/logo.png" alt="Feldenkrais Logo" width={100} height={100} className="w-full h-full" />
    </div>
  )
}
