import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <Hero />
      <section className="max-w-7xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-serif mb-6">Featured Jewellery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>{" "}
      <Footer />
    </>
  );
}
