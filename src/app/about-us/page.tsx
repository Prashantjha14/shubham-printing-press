import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <div className="head_text text-center">
      <h2>About Us page Coming soon...</h2>
      <Link href="/">
        <Button>Return to home</Button>
      </Link>
    </div>
  );
};

export default page;
