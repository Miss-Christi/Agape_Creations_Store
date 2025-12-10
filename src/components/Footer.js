import { Instagram, Mail, Facebook, Twitter, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2c2a26] text-white pt-20 pb-10 px-6 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-gray-700 pb-16">
        <div className="col-span-1 md:col-span-2 pr-8">
          <h2 className="text-3xl font-serif mb-4">AGAPE (ä-gá-pā)</h2>
          <p className="text-gray-400 leading-relaxed max-w-md mb-6">
            "The highest form of love." We create contemporary goods inspired by truths that have a direct connection with our faith.
          </p>
          <div className="flex gap-4 text-gray-400">
            <Instagram size={20} className="hover:text-white cursor-pointer"/>
            <Facebook size={20} className="hover:text-white cursor-pointer"/>
            <Twitter size={20} className="hover:text-white cursor-pointer"/>
          </div>
        </div>

        <div>
          <h3 className="font-bold tracking-widest text-sm mb-6 uppercase text-gray-500">Links</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Shipping Policy</li>
            <li className="hover:text-white cursor-pointer">Returns</li>
            <li className="hover:text-white cursor-pointer">FAQ</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold tracking-widest text-sm mb-6 uppercase text-gray-500">Contact</h3>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="flex items-start gap-3"><MapPin size={16} className="mt-1 flex-shrink-0"/> 221 Baker St <br/>Bengaluru, Karnataka 560029</li>
            <li className="flex items-center gap-3"><Mail size={16}/> agape@mockgmail.com</li>
            <li className="flex items-center gap-3"><Phone size={16}/> +91 91451 70913</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-purple-600 text-xs">© 2025 Agape Brand. All rights reserved.</div>
    </footer>
  );
}