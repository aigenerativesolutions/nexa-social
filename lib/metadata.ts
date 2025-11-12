import { Metadata } from "next";

export const siteConfig = {
  name: "Nexa Social",
  description:
    "Conexões que transformam! Consultoria em gestão social, sustentabilidade e investimento social privado para empresas, OSCs e igrejas.",
  url: "https://nexasocial.com.br",
  ogImage: "/opengraph-image.jpg",
  links: {
    whatsapp: "https://wa.me/5511999999999",
    email: "contato@nexasocial.com.br",
  },
};

export function createMetadata({
  title,
  description,
  image,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  return {
    title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
    description: description || siteConfig.description,
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: title || siteConfig.name,
      description: description || siteConfig.description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: image || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
      locale: "pt_BR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title || siteConfig.name,
      description: description || siteConfig.description,
      images: [image || siteConfig.ogImage],
    },
    alternates: {
      canonical: siteConfig.url,
    },
  };
}
