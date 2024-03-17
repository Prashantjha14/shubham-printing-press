import Card from "./Card";

const Cards = ({ limitofsix = false }: { limitofsix?: boolean }) => {
  if (!limitofsix)
    return (
      <section className="flex flex-col items-center gap-3 mb-4 sm:flex-row sm:flex-wrap sm:justify-center sm:max-w-5xl sm:mx-auto">
        <Card
          image="/images/carousel/image 0.jpg"
          title="Digital Lanyards"
          desc="This is Description"
          price={11}
        />
        <Card
          image="/images/carousel/image 1.jpg"
          title="Polo T-shirts"
          desc="This is Description"
          price={105}
        />
        <Card
          image="/images/carousel/image 2.jpg"
          title="Badge"
          desc="This is Description"
          price={4}
        />
        <Card
          image="/images/carousel/image 3.jpg"
          title="Key Chain"
          desc="This is Description"
          price={6}
        />
        <Card
          image="/images/carousel/image 4.jpg"
          title="Key Chain with hook"
          desc="This is Description"
          price={8}
        />
        <Card
          image="/images/carousel/image 5.jpg"
          title="Silicone Wristband"
          desc="This is Description"
          price={5}
        />
        <Card
          image="/images/carousel/image 6.jpg"
          title="Id Card (800 MICRON)"
          desc="This is Description"
          price={7}
        />
        <Card
          image="/images/carousel/image 7.jpg"
          title="Id Card Holder"
          desc="This is Description"
          price={2}
        />
      </section>
    );

  return (
    <section className="flex flex-col items-center gap-3 mb-4 sm:flex-row sm:flex-wrap sm:justify-center sm:max-w-5xl sm:mx-auto">
      <Card
        image="/images/carousel/image 0.jpg"
        title="Digital Lanyards"
        desc="This is Description"
        price={11}
      />
      <Card
        image="/images/carousel/image 1.jpg"
        title="Polo T-shirts"
        desc="This is Description"
        price={105}
      />
      <Card
        image="/images/carousel/image 2.jpg"
        title="Badge"
        desc="This is Description"
        price={4}
      />
      <Card
        image="/images/carousel/image 3.jpg"
        title="Key Chain"
        desc="This is Description"
        price={6}
      />
      <Card
        image="/images/carousel/image 4.jpg"
        title="Key Chain with hook"
        desc="This is Description"
        price={8}
      />
      <Card
        image="/images/carousel/image 5.jpg"
        title="Silicone Wristband"
        desc="This is Description"
        price={5}
      />
    </section>
  );
};

export default Cards;
