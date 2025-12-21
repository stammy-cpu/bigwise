import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "wouter";
import bomberImg from "@assets/generated_images/premium_bomber_jacket_standalone.png";
import dressImg from "@assets/generated_images/elegant_velvet_dress_standalone.png";
import hoodieImg from "@assets/generated_images/street_hoodie_clothing_item.png";
import teeImg from "@assets/generated_images/classic_tee_shirt_product.png";
import pantsImg from "@assets/generated_images/casual_pants_product_shot.png";
import denimImg from "@assets/generated_images/denim_jacket_product_photo.png";

// Mock Data with proper clothing images
const products = [
  { id: 1, name: "Urban Bomber Jacket", price: "₦50,000", category: "Men", image: bomberImg },
  { id: 2, name: "Velvet Evening Dress", price: "₦105,000", category: "Women", image: dressImg },
  { id: 3, name: "Premium Street Hoodie", price: "₦35,000", category: "Unisex", image: hoodieImg },
  { id: 4, name: "Classic White Tee", price: "₦18,000", category: "Men", image: teeImg },
  { id: 5, name: "Casual Pants", price: "₦46,000", category: "Women", image: pantsImg },
  { id: 6, name: "Denim Jacket", price: "₦40,000", category: "Unisex", image: denimImg },
];

export default function Collections() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1a1025] text-white font-sans">
      <Navbar />
      <main className="flex-grow pt-24 md:pt-32 pb-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">All Collections</h1>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm uppercase tracking-widest font-medium text-gray-400">
              <span className="text-white cursor-pointer border-b border-purple-500">All</span>
              <span className="hover:text-white cursor-pointer transition-colors">Men</span>
              <span className="hover:text-white cursor-pointer transition-colors">Women</span>
              <span className="hover:text-white cursor-pointer transition-colors">Unisex</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href={`/product/${product.id}`}>
                  <a className="block">
                    <div className="relative aspect-[3/4] overflow-hidden bg-white/5 mb-4 rounded-lg border border-white/10 group-hover:border-purple-500/50 transition-all">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      {/* Quick Add Overlay */}
                      <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-sm p-3 md:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-between items-center text-black">
                        <span className="text-xs uppercase font-bold">Add to Cart</span>
                        <span className="text-xs font-bold">{product.price}</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                      <div>
                        <h3 className="text-base md:text-lg font-heading font-bold group-hover:text-purple-300 transition-colors line-clamp-2">{product.name}</h3>
                        <p className="text-xs md:text-sm text-gray-400">{product.category}</p>
                      </div>
                      <span className="text-sm md:text-base font-bold text-purple-300 flex-shrink-0">{product.price}</span>
                    </div>
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
