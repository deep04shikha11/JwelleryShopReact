export default function Hero() {
  return (
    <section className="bg-[#fdf8f2] text-center py-10 px-4">
      <h1 className="text-4xl md:text-5xl font-serif text-grey-900">
        Timeless Jewellery for Every Occasion
      </h1>
      <p className="text-grey-600 mt-2">
        Trusted Gold & Diamond Jewellery Since 2018.
      </p>
      <div className="mt-2 flex justify-center gap-4">
        <a
          href="/products"
          className="bg-[#D4AF37] text-white px-6 py-3 rounded"
        >
          View Collection
        </a>
        <a
          target="_blank"
          href="https://wa.me/911111111111?text=Hello%20Jewellery%20Store!%20I%20have%20an%20enquiry."
          className="border border-[#D4AF37] px-6 py-3 rounded"
        >
          WhatsApp Enquiry
        </a>
      </div>
    </section>
  );
}
