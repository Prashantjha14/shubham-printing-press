import Card from "./Card";

const Cards = ({ limitofsix = false }: { limitofsix?: boolean }) => {
  if (!limitofsix)
    return (
      <section className="flex flex-col items-center gap-3 mb-4 sm:flex-row sm:flex-wrap sm:justify-center sm:max-w-5xl sm:mx-auto">
        <Card
          image="/images/carousel/image 0.jpg"
          title="Lanyards"
          desc="This is Description"
          price={12}
          piece={1}
        />
        <Card
          image="/images/carousel/image 1.jpg"
          title="T-shirts"
          desc="This is Description"
          price={105}
          piece={1}
        />
        <Card
          image="/images/carousel/image 2.jpg"
          title="Badge"
          desc="This is Description"
          price={10}
          piece={1}
        />
        <Card
          image="/images/carousel/image 3.jpg"
          title="Satin Key Chain"
          desc="This is Description"
          price={6}
          piece={1}
        />
        <Card
          image="/images/carousel/image 4.jpg"
          title="KeyChain"
          desc="This is Description"
          price={15}
          piece={1}
        />
        <Card
          image="/images/carousel/image 5.jpg"
          title="Silicone Wristband"
          desc="This is Description"
          price={7}
          piece={1}
        />
        <Card
          image="/images/carousel/image 6.jpg"
          title="Lanyards"
          desc="This is Description"
          price={10}
          piece={1}
        />
      </section>
    );

  return (
    <section className="flex flex-col items-center gap-3 mb-4 sm:flex-row sm:flex-wrap sm:justify-center sm:max-w-5xl sm:mx-auto">
      <Card
        image="/images/carousel/image 0.jpg"
        title="Lanyards"
        desc="This is Description"
        price={12}
        piece={1}
      />
      <Card
        image="/images/carousel/image 1.jpg"
        title="T-shirts"
        desc="This is Description"
        price={105}
        piece={1}
      />
      <Card
        image="/images/carousel/image 2.jpg"
        title="Badge"
        desc="This is Description"
        price={10}
        piece={1}
      />
      <Card
        image="/images/carousel/image 3.jpg"
        title="Satin Key Chain"
        desc="This is Description"
        price={6}
        piece={1}
      />
      <Card
        image="/images/carousel/image 4.jpg"
        title="KeyChain"
        desc="This is Description"
        price={15}
        piece={1}
      />
      <Card
        image="/images/carousel/image 5.jpg"
        title="Silicone Wristband"
        desc="This is Description"
        price={7}
        piece={1}
      />
    </section>
  );
};

export default Cards;
