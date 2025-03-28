
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-pastel-gray py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-pastel-lavender bg-clip-text text-transparent">
                UndanganKu
              </h2>
            </Link>
            <p className="text-gray-600 mb-6">
              Platform undangan digital modern dan elegan untuk berbagai acara istimewa Anda.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Navigasi Cepat</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#beranda" className="text-gray-600 hover:text-primary transition-colors">Beranda</a>
              </li>
              <li>
                <a href="/#tentang" className="text-gray-600 hover:text-primary transition-colors">Tentang Kami</a>
              </li>
              <li>
                <a href="/#tema" className="text-gray-600 hover:text-primary transition-colors">Tema Undangan</a>
              </li>
              <li>
                <a href="/#cara-kerja" className="text-gray-600 hover:text-primary transition-colors">Cara Kerja</a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Jenis Undangan</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">Pernikahan</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">Ulang Tahun</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">Baby Shower</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">Acara Perusahaan</a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <p className="text-gray-600 mb-2">Email: info@undanganku.com</p>
            <p className="text-gray-600 mb-2">Phone: +62 123 4567 890</p>
            <p className="text-gray-600 mb-2">
              Jl. Jendral Sudirman No. 123, Jakarta Pusat, Indonesia
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} UndanganKu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
