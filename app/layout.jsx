import "./globals.css";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "PSU STAFF ESPORTS CLUB",
  description:
    "PSU Staff Esports Club ชมรมอีสปอร์ตสำหรับบุคลากร PSU ที่รวมทีมแข่งขัน กิจกรรมฝึกซ้อม Workshop การแข่งขัน และคอมมูนิตี้เกมมิ่งระดับมืออาชีพ",
  keywords: [
    "PSU Staff Esports Club",
    "PSU Esports",
    "ชมรมอีสปอร์ต",
    "อีสปอร์ต",
    "Esports Club",
    "Gaming Club",
    "Tournament",
    "Valorant",
    "RoV",
    "Free Fire",
    "Mobile Legends",
    "PUBG",
  ],
  authors: [{ name: "PSU Staff Esports Club" }],
  applicationName: "PSU Staff Esports Club",
  openGraph: {
    type: "website",
    siteName: "PSU Staff Esports Club",
    title: "PSU STAFF ESPORTS CLUB",
    description:
      "เข้าร่วมคอมมูนิตี้อีสปอร์ตของบุคลากร PSU พร้อมทีมแข่งขัน กิจกรรมฝึกซ้อม Workshop และ Tournament",
    images: [
      {
        url: "/assets/psu-staff-esports-logo.png",
        alt: "PSU Staff Esports Club logo",
      },
    ],
    locale: "th_TH",
  },
  twitter: {
    card: "summary_large_image",
    title: "PSU STAFF ESPORTS CLUB",
    description:
      "ชมรมอีสปอร์ตสำหรับบุคลากร PSU พร้อมทีมแข่งขัน กิจกรรม และคอมมูนิตี้เกมมิ่ง",
    images: ["/assets/psu-staff-esports-logo.png"],
  },
  icons: {
    icon: "/assets/favicon.png",
    apple: "/assets/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020617",
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    name: "PSU Staff Esports Club",
    alternateName: "PSU STAFF ESPORTS CLUB",
    description:
      "ชมรมอีสปอร์ตสำหรับบุคลากร PSU ที่สนับสนุนทีมแข่งขัน กิจกรรมฝึกซ้อม Workshop และ Tournament",
    logo: "/assets/psu-staff-esports-logo.png",
    sport: "Esports",
    email: "psustaffesports@example.com",
    sameAs: ["https://facebook.com/", "https://instagram.com/"],
  };

  return (
    <html lang="th" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anuphan:wght@100..700&family=Orbitron:wght@500;700;900&family=Rajdhani:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
        <link rel="stylesheet" href="/assets/styles.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-gray-950 text-slate-100 antialiased selection:bg-cyan-300 selection:text-gray-950">
        {children}
      </body>
    </html>
  );
}
