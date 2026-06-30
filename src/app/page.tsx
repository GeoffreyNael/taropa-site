import Image from "next/image";
import { MosaicGallery } from "@/components/MosaicGallery";
import { homeHero } from "@/lib/brand";

export default function Home() {
  return (
    <main className="home-page">
      <figure className="home-hero">
        <Image
          src={homeHero.src}
          alt={homeHero.alt}
          width={homeHero.width}
          height={homeHero.height}
          sizes="100vw"
          priority
          className="home-hero__image"
        />
      </figure>
      <MosaicGallery />
    </main>
  );
}
