import Image from "next/image";
import { Reveal } from "@/components/reveal";
import type { EventImage } from "@/lib/content";

export function EventGallery({ images }: { images: EventImage[] }) {
  if (images.length === 0) return null;
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((img, i) => (
        <Reveal key={img.src} delay={(i % 3) * 0.06}>
          <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sand ring-1 ring-forest-deep/10">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 32rem, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
