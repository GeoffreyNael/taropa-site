import { MosaicGallery } from "@/components/MosaicGallery";
import { homeHero } from "@/lib/brand";

export default function Home() {
  return (
    <main className="home-page">
      <figure className="home-hero">
        <video
          className="home-hero__video"
          src={homeHero.src}
          poster={homeHero.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label={homeHero.alt}
          style={{ aspectRatio: `${homeHero.width} / ${homeHero.height}` }}
        />
      </figure>
      <MosaicGallery />
    </main>
  );
}
