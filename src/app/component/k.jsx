import Image from "next/image";

export default function CategoryStraps() {
  const categories = [
    {
      title: "Full-Grain Leather",
      img: "/all.jpg",
      desc: "Premium top-layer leather known for durability and natural texture."
    },
    {
      title: "Top-Grain Leather",
      img: "/black.jpg",
      desc: "Smooth and refined, offering a clean and polished appearance."
    },
    {
      title: "Genuine Leather",
      img: "/blue strap.webp",
      desc: "Affordable and stylish for everyday use with a classic feel."
    },
    {
      title: "Suede Leather",
      img: "/brown.jpg",
      desc: "Soft and velvety texture that adds a warm premium vibe."
    },
    {
      title: "Nubuck Leather",
      img: "/m.webp",
      desc: "Slightly brushed surface for a luxurious matte finish."
    },
    {
      title: "Vegetable-Tanned Leather",
      img: "/straps.jpg",
      desc: "Eco-friendly leather with rich, natural character that ages beautifully."
    }
  ];

  return (
    <section className="w-full py-16 bg-gradient-to-b from-[#051223] via-[#9e3838] to-[#2c1130] text-[black] px-6 cormorant ">
      <div className="max-w-7xl mx-auto text-center ">
        <h2 className="text-4xl font-semibold tracking-tight mb-3">Types of Premium Leather</h2>
        <p className="text-lg text-[white] mb-12 max-w-2xl mx-auto">
          Explore refined leather variations curated for elegant and quality-driven watch straps.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10  comorant">
          {categories.map((cat, index) => (
            <div key={index} className="group bg-white rounded-2xl p-6 border border-[#e5dfd6] hover:border-[#d3b68b] transition duration-300 cursor-pointer shadow-md hover:shadow-xl ">
              <div className="relative w-full h-56 mb-5 rounded-lg overflow-hidden">
                <Image
                  src={cat.img}
                  alt={cat.title}
                  fill
                  className="object-cover scale-100 group-hover:scale-105 transition duration-500"
                />
              </div>
              <h3 className="text-2xl font-medium mb-2">{cat.title}</h3>
              <p className="text-[#6b6b6b] text-sm">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}