import Banner from "@/components/Body/Banner";
import Cards from "@/components/Body/Cards";
import Hero from "@/components/Body/Hero";
import HowAreWe from "@/components/Body/HowAreWe";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section>
        <Hero />
        <HowAreWe />
        <Banner />
        <Cards limitofsix />
        <div className="text-center mb-3">
          <Link href="services">
            <Button variant="outline">View all</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
