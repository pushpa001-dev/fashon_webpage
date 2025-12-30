import Hero from "@/components/hero";
import CollectionsGrid from "@/components/collections-grid";
import FashionWave from "@/components/fashion-wave";
import CollectionFeature from "@/components/collection-feature";
import Connect from "@/components/connect";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Hero />
      <CollectionsGrid />
      <FashionWave />
      <CollectionFeature />
      <Connect />
    </main>
  );
}
