export function buildWhatsAppUrl(message?: string) {
    const phone = process.env.NEXT_PUBLIC_WA_PHONE || "5521969639576"

    const text =
        message ||
        "Olá! Vim pelo site da WLG Capital e gostaria de entender melhor sobre consórcio."

    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
}