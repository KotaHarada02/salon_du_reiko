import { PageHeader } from "@/components/page-header"
import { DiagnosisCta } from "@/components/diagnosis-cta"

export const metadata = {
  title: 'ギャラリー | Salon du Reiko',
  description: '施術写真やサロンの雰囲気をご紹介。',
}

export default function GalleryPage() {
  const images = [
    { src: "/img/outside.jpg", alt: "ログハウスの外観", title: "Exterior", span: "md:row-span-2" },
    { src: "/img/room.jpg", alt: "施術室", title: "Room", span: "" },
    { src: "/img/treatment.jpg", alt: "フェイシャルの施術風景", title: "Treatment", span: "" },
  ]

  return (
    <main className="min-h-screen pb-32">
      <PageHeader title="Gallery" subtitle="ギャラリー" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-8 md:auto-rows-[minmax(0,260px)] md:grid-cols-3 md:gap-12">
          {images.map((img, index) => (
            <div
              key={index}
              className={`group cursor-pointer animate-fade-in-up flex flex-col ${img.span}`}
              style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'backwards' }}
            >
              <div className="relative mb-6 flex-1 overflow-hidden">
                <div className="absolute inset-0 z-10 bg-black/0 transition-colors duration-700 group-hover:bg-black/5" />
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
              </div>
              <div>
                <p className="font-serif text-lg text-stone-800 mb-1">{img.alt}</p>
                <p className="text-xs tracking-widest text-[var(--salon-gold)] uppercase">{img.title}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <DiagnosisCta />
    </main>
  )
}


