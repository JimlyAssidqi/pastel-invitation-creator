
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "@/components/ScrollAnimation";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import AnimatedCounter from "@/components/AnimatedCounter";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Footer from "@/components/Footer";
import { 
  Palette, 
  Zap, 
  DollarSign, 
  PaintBucket, 
  Pencil, 
  Eye, 
  Link as LinkIcon,
  Music,
  Image,
  Heart,
  FileText,
  MessageSquare,
  Gift,
  MapPin,
  Clock
} from "lucide-react";

// Mock data for the landing page
const stats = {
  invitationsSent: 10000,
  happyCustomers: 5000,
  themes: 50,
};

// Words for the animated text effect with their corresponding colors
const animatedWords = [
  { word: "Elegan", color: "text-purple-600" },
  { word: "Premium", color: "text-blue-600" },
  { word: "Exclusive", color: "text-emerald-600" },
  { word: "Modern", color: "text-rose-600" },
  { word: "Classy", color: "text-amber-600" },
  { word: "Luxury", color: "text-indigo-600" },
  { word: "Luxe", color: "text-pink-600" },
];

// Featured feature items with their specific background colors and text colors
const featuredFeatures = [
  {
    id: "design",
    title: "Desain Elegan",
    icon: <Palette className="h-10 w-10 text-purple-600" />,
    description: "Berbagai pilihan tema dengan desain elegan dan modern",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    id: "easy",
    title: "Mudah & Cepat",
    icon: <Zap className="h-10 w-10 text-pink-600" />,
    description: "Buat undangan digital dalam hitungan menit",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-600",
  },
  {
    id: "affordable",
    title: "Terjangkau",
    icon: <DollarSign className="h-10 w-10 text-blue-600" />,
    description: "Lebih hemat dibandingkan undangan fisik",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
];

// Features data based on the provided image
const features = [
  {
    id: "music",
    title: "Request Musik",
    icon: <Music className="h-8 w-8 text-purple-600" />,
    description: "Pilih musik sesuai dengan selera Anda untuk memperindah undangan",
  },
  {
    id: "gallery",
    title: "Galery",
    icon: <Image className="h-8 w-8 text-purple-600" />,
    description: "Tampilkan momen-momen spesial dalam galeri foto yang menarik",
  },
  {
    id: "love-story",
    title: "Love Story",
    icon: <Heart className="h-8 w-8 text-purple-600" />,
    description: "Bagikan kisah cinta Anda dengan tampilan yang romantis",
  },
  {
    id: "unlimited-guests",
    title: "Unlimited Nama Tamu",
    icon: <FileText className="h-8 w-8 text-purple-600" />,
    description: "Tambahkan nama tamu sebanyak yang Anda butuhkan tanpa batasan",
  },
  {
    id: "rsvp",
    title: "RSVP",
    icon: <MessageSquare className="h-8 w-8 text-purple-600" />,
    description: "Kelola konfirmasi kehadiran tamu dengan mudah dan efisien",
  },
  {
    id: "wedding-gift",
    title: "Wedding Gift",
    icon: <Gift className="h-8 w-8 text-purple-600" />,
    description: "Fitur untuk menerima hadiah digital dari para tamu undangan",
  },
  {
    id: "google-maps",
    title: "Google Maps",
    icon: <MapPin className="h-8 w-8 text-purple-600" />,
    description: "Tunjukkan lokasi acara dengan integrasi Google Maps yang akurat",
  },
  {
    id: "unlimited-revisions",
    title: "Unlimited Revisi",
    icon: <Clock className="h-8 w-8 text-purple-600" />,
    description: "Lakukan perubahan tanpa batas hingga undangan sesuai keinginan Anda",
  },
];

// Mock data for the landing page
const themes = [
  {
    id: "mocha",
    title: "Mocha",
    image: "/placeholder.svg",
    category: "Pernikahan",
    description: "Tema elegan dengan sentuhan coklat hangat dan aksen emas untuk pernikahan yang mewah",
  },
  {
    id: "rustic",
    title: "Rustic Brown",
    image: "/placeholder.svg",
    category: "Pernikahan",
    description: "Tema rustic dengan warna coklat kayu dan hiasan klasik untuk pernikahan yang berkesan",
  },
  {
    id: "royal-blue",
    title: "Royal Blue",
    image: "/placeholder.svg",
    category: "Pernikahan",
    description: "Tema mewah dengan dominasi warna biru royal dan sentuhan silver untuk pernikahan yang elegan",
  },
];

const steps = [
  {
    number: 1,
    title: "Pilih Tema",
    description: "Pilih tema undangan yang sesuai dengan acara Anda",
    icon: <PaintBucket className="text-purple-600 w-6 h-6" />,
  },
  {
    number: 2,
    title: "Isi Informasi",
    description: "Masukkan detail acara, tanggal, waktu, dan lokasi",
    icon: <Pencil className="text-purple-600 w-6 h-6" />,
  },
  {
    number: 3,
    title: "Preview & Selesaikan",
    description: "Tinjau undangan dan selesaikan pembuatan",
    icon: <Eye className="text-purple-600 w-6 h-6" />,
  },
  {
    number: 4,
    title: "Bagikan",
    description: "Bagikan link undangan kepada tamu Anda",
    icon: <LinkIcon className="text-purple-600 w-6 h-6" />,
  },
];

const testimonials = [
  {
    id: "1",
    name: "Budi Santoso",
    image: "/placeholder.svg",
    text: "Undangan digital ini sangat membantu acara pernikahan kami. Tamunya modern dan elegan!",
    rating: 5,
  },
  {
    id: "2",
    name: "Siti Rahma",
    image: "/placeholder.svg",
    text: "Sangat mudah digunakan dan hasilnya cantik sekali. Tamu-tamu kami sangat terkesan.",
    rating: 5,
  },
  {
    id: "3",
    name: "Andi Wijaya",
    image: "/placeholder.svg",
    text: "Layanan yang sangat memuaskan. Desainnya keren dan fiturnya lengkap.",
    rating: 4,
  },
];

const faqs = [
  {
    question: "Bagaimana cara membuat undangan digital?",
    answer: "Cukup pilih tema yang Anda inginkan, isi informasi acara, lalu bagikan link undangan kepada tamu Anda.",
  },
  {
    question: "Berapa lama proses pembuatan undangan digital?",
    answer: "Proses pembuatan undangan digital hanya membutuhkan waktu beberapa menit saja setelah Anda mengisi semua informasi yang diperlukan.",
  },
  {
    question: "Apakah bisa menyesuaikan tema undangan?",
    answer: "Ya, Anda dapat menyesuaikan warna dan gaya tema undangan sesuai preferensi Anda.",
  },
  {
    question: "Bagaimana cara membagikan undangan digital?",
    answer: "Anda akan mendapatkan link undangan yang dapat dibagikan melalui email, pesan teks, atau media sosial.",
  },
];

const LandingPage = () => {
  // State for the animated text effect
  const [wordIndex, setWordIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const currentWord = animatedWords[wordIndex];

  // Effect for word cycling
  useEffect(() => {
    const transitionInterval = setInterval(() => {
      setIsTransitioning(true);
      
      // Change the word after the fade-out transition
      setTimeout(() => {
        setWordIndex((prevIndex) => (prevIndex + 1) % animatedWords.length);
        setIsTransitioning(false);
      }, 500); // Half of the transition duration
      
    }, 3000); // Change every 3 seconds
    
    return () => clearInterval(transitionInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <Navbar />
      
      {/* Hero Section */}
      <section id="beranda" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <ScrollAnimation className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Undangan Digital{" "}
            <span 
              className={`inline-block transition-all duration-1000 ease-in-out ${
                isTransitioning ? "opacity-0 transform -translate-y-3" : "opacity-100 transform translate-y-0"
              } ${currentWord.color}`}
            >
              {currentWord.word}
            </span>
            <br />
            untuk Momen Spesial Anda
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Buat undangan digital yang indah dan personal untuk acara spesial Anda dengan mudah
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Buat Undangan Sekarang
            </Button>
            <Button size="lg" variant="outline">
              Lihat Tema
            </Button>
          </div>
        </ScrollAnimation>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <ScrollAnimation delay={100} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-purple-600">
              <AnimatedCounter end={stats.invitationsSent} suffix="+" />
            </div>
            <div className="text-gray-500">Undangan Terkirim</div>
          </ScrollAnimation>
          <ScrollAnimation delay={200} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-purple-600">
              <AnimatedCounter end={stats.happyCustomers} suffix="+" />
            </div>
            <div className="text-gray-500">Pelanggan Puas</div>
          </ScrollAnimation>
          <ScrollAnimation delay={300} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-purple-600">
              <AnimatedCounter end={stats.themes} suffix="+" />
            </div>
            <div className="text-gray-500">Tema Tersedia</div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Featured Features Section (Highlighted Features) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Fitur Utama</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keunggulan utama yang membuat Youvitation menjadi pilihan terbaik
            </p>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredFeatures.map((feature) => (
              <ScrollAnimation key={feature.id}>
                <div className={`${feature.bgColor} p-8 rounded-xl flex flex-col items-center text-center h-full`}>
                  <div className="mb-4 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="fitur" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Fitur Unggulan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai fitur menarik yang akan membuat undangan digital Anda lebih berkesan
            </p>
          </ScrollAnimation>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature) => (
              <ScrollAnimation key={feature.id} className="text-center">
                <div className="bg-purple-50 p-4 rounded-xl flex flex-col items-center">
                  <div className="mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-1 text-purple-800">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Theme Gallery */}
      <section id="tema" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Tema Undangan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih dari berbagai tema undangan yang cantik dan elegan
            </p>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {themes.map((theme, index) => (
              <ScrollAnimation key={theme.id} delay={index * 100} className="h-full">
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src={theme.image}
                      alt={theme.title}
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-purple-100 text-purple-800 hover:bg-purple-200">{theme.category}</Badge>
                    <h3 className="text-xl font-bold mb-2">{theme.title}</h3>
                    <p className="text-gray-600 mb-4">{theme.description}</p>
                    <Link to={`/preview/${theme.id}`}>
                      <Button variant="outline" className="w-full">Preview</Button>
                    </Link>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button size="lg" asChild>
              <Link to="/themes">Lihat Semua Tema</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="cara-kerja" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Cara Kerja</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proses pembuatan undangan digital yang mudah dan cepat
            </p>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <ScrollAnimation key={step.number} delay={index * 100} className="text-center">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-xl font-bold mb-2">
                    {step.number}. {step.title}
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonial" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Testimonial</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Yang pelanggan kami katakan tentang layanan kami
            </p>
          </ScrollAnimation>
          <ScrollAnimation>
            <TestimonialCarousel testimonials={testimonials} />
          </ScrollAnimation>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <ScrollAnimation className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Pertanyaan Umum</h2>
            <p className="text-xl text-gray-600">
              Berikut adalah beberapa pertanyaan yang sering diajukan
            </p>
          </ScrollAnimation>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </ScrollAnimation>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center">
        <ScrollAnimation className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Siap Untuk Membuat Undangan Digital?</h2>
          <p className="text-xl mb-8 opacity-90">
            Buat undangan digital yang indah untuk acara spesial Anda sekarang
          </p>
          <Button size="lg" variant="secondary">
            Buat Undangan Sekarang
          </Button>
        </ScrollAnimation>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
