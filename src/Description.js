function Description() {
  return (
    <div>
      <h2 className="text-orange font-bold">SNEAKER COMPANY</h2>
      <h1 className="text-3xl md:text-5xl font-bold my-2">
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-slate-500 my-8">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      {/* price section */}
      <div className="flex my-5 items-center flex-wrap">
        <span className="text-3xl font-bold">$125.00</span>
        <div className="text-lg font-bold px-2 py-1 rounded inline-block text-orange bg-pale-orange ml-5">
          50%
        </div>
        <span className="text-slate-300 font-semibold text-lg line-through ml-auto w-fit md:w-full md:mt-3">
          $250.00
        </span>
      </div>
    </div>
  );
}

export default Description;
