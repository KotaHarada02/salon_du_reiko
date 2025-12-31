import { PageHeader } from "@/components/page-header"
import Link from "next/link"

export const metadata = {
  title: 'ギャラリー | Salon de Reiko',
  description: '施術写真やサロンの雰囲気をご紹介。',
}

export default function GalleryPage() {
  const images = [
    { src: "/sample.jpg", alt: "サロン外観", title: "Exterior" },
    { src: "/placeholder.jpg", alt: "施術風景", title: "Treatment" },
    { src: "/placeholder-user.jpg", alt: "リラックス空間", title: "Relaxation" },
    // Add more placeholders to show grid better if needed, or keep it simple
  ]

  return (
    <main className="min-h-screen pb-32">
      <PageHeader title="Gallery" subtitle="ギャラリー" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {images.map((img, index) => (
            <div 
              key={index} 
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="overflow-hidden aspect-[4/3] mb-6 relative">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700 z-10"/>
                {/* Replace with Next.js Image in production */}
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" 
                />
              </div>
              <div className="text-center">
                <p className="font-serif text-lg text-gray-800 mb-2">{img.alt}</p>
                <p className="text-xs tracking-widest text-[var(--salon-gold)] uppercase">{img.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-gray-600 mb-8">あなたにぴったりのメニューを見つけませんか？</p>
          <Link href="/recommend" className="inline-block border border-[var(--salon-gold)] text-[var(--salon-gold)] px-12 py-4 text-sm tracking-widest hover:bg-[var(--salon-gold)] hover:text-white transition-all duration-500">
            おすすめ診断を受ける
          </Link>
        </div>
      </div>
    </main>
  )
}


