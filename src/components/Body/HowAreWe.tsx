import { Button } from "@/components/ui/button";
import Link from "next/link";

const HowAreWe = () => {
  return (
    <>
      <section className="text-center mt-20">
        <h2 className="head_text">Who Are We?</h2>
        <h3 className="sub_head_text">We print your vision.</h3>
        <p className="desc">
          From lanyards to keychains, badges to business cards, we bring your
          ideas to life with high-quality, customizable printing solutions.
        </p>
        <Link href="/about-us">
          <Button variant="outline" className="mt-3 mb-3 mr-2">
            Read more about us
          </Button>
        </Link>
        <Link href="/contact-us">
          <Button variant="outline" className="mt-3 mb-3">
            Contact us now!
          </Button>
        </Link>
      </section>
    </>
  );
};

export default HowAreWe;
