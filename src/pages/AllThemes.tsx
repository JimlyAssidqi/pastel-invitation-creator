
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import { Search } from "lucide-react";

// All themes data
const allThemes = [
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
  {
    id: "royal-gold",
    title: "Royal Gold",
    image: "/placeholder.svg",
    category: "Pernikahan",
    description: "Tema mewah dengan sentuhan emas untuk pernikahan yang glamor",
  },
  {
    id: "sky-petals",
    title: "Sky Petals",
    image: "/placeholder.svg",
    category: "Pernikahan",
    description: "Tema lembut dengan warna biru langit dan aksen bunga untuk pernikahan outdor yang indah",
  },
  {
    id: "sky-blue",
    title: "Sky Blue",
    image: "/placeholder.svg",
    category: "Ulang Tahun",
    description: "Tema ceria dengan warna biru langit untuk perayaan ulang tahun yang menyenangkan",
  },
  {
    id: "purple-haze",
    title: "Purple Haze",
    image: "/placeholder.svg",
    category: "Ulang Tahun",
    description: "Tema modern dengan warna ungu yang elegan untuk perayaan ulang tahun dewasa",
  },
  {
    id: "baby-pink",
    title: "Baby Pink",
    image: "/placeholder.svg",
    category: "Baby Shower",
    description: "Tema lembut dengan warna pink pastel untuk baby shower yang manis",
  },
  {
    id: "baby-blue",
    title: "Baby Blue",
    image: "/placeholder.svg",
    category: "Baby Shower",
    description: "Tema lembut dengan warna biru pastel untuk baby shower yang menenangkan",
  }
];

const categories = ["Semua", "Pernikahan", "Ulang Tahun", "Baby Shower"];

const AllThemes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  // Filter themes based on search term and category
  const filteredThemes = allThemes.filter((theme) => {
    const matchesSearch = theme.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      theme.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "Semua" || theme.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <Navbar />
      <div className="container pt-32 pb-20 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Tema Undangan</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pilih dari berbagai tema undangan yang cantik dan elegan untuk acara spesial Anda
          </p>
        </div>
        
        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Cari tema..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Tabs defaultValue="Semua" value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList>
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        
        {/* Theme Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredThemes.length > 0 ? (
            filteredThemes.map((theme) => (
              <div key={theme.id} className="h-full">
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
                    <div className="flex items-center justify-between">
                      <Button variant="outline" asChild>
                        <Link to={`/preview/${theme.id}`}>Preview</Link>
                      </Button>
                      <Button asChild>
                        <Link to={`/admin/create?theme=${theme.id}`}>Gunakan</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-gray-500">Tidak ada tema yang ditemukan.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllThemes;
