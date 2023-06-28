const partners = [1, 2, 3, 4, 5, 6, 7];

function OurPartners() {
  return (
    <div className="text-center grid gap-8 place-items-center">
      <h1 className="font-bold text-4xl text-amber-400 mb-4">Our Partners</h1>
      <p className="w-full max-w-lg">
        We've partnered with hundreds of smart home brands to help you create a
        smart home that fits your needs and doesn't lock you in.
      </p>
      <div className="flex flex-wrap justify-center gap-8 md:gap-x-16 max-w-2xl mx-auto">
        {partners.map((element) => (
          <div className="p-4 w-fit flex justify-center items-center rounded-md shadow-md dark:shadow-xl bg-white dark:bg-neutral-600">
            <img src={`/assets/partner${element}.svg`} className="h-16 w-16" alt="partner" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurPartners;
