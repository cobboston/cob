import { Hero } from "@/components/hero";
import { Pillars } from "@/components/pillars";
import { Community } from "@/components/community";
import { ExploreCards } from "@/components/explore-cards";
import { Join } from "@/components/join";

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <Community />
      <ExploreCards />
      <Join />
    </>
  );
}
