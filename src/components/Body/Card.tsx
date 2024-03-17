import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const Card = ({
  image,
  title,
  desc,
  price,
}: {
  image: string;
  title: string;
  desc: string;
  price: number;
}) => {
  return (
    <div className="border max-w-80 rounded-lg overflow-hidden">
      <Image src={image} alt={title} width={320} height={300} />
      <div className="p-3 flex flex-col gap-1 items-center">
        <h3 className="text-2xl">{title}</h3>
        {/* <p className="desc text-sm">{desc}</p> */}
        <p>Rs. {price}</p>
        <div className="flex flex-row gap-3">
          <Link href="https://wa.me/+919136123478" target="_blank">
            <Button>Contact on WhatsApp</Button>
          </Link>
          <Link href="tel:+919136123478" target="_blank">
            <Button>Call</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
