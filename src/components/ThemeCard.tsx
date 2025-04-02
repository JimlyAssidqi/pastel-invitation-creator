
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Image, ImageOff, DollarSign } from "lucide-react";

interface ThemeCardProps {
  id: string;
  title: string;
  image: string;
  category: string;
}

const ThemeCard = ({ id, title, image, category }: ThemeCardProps) => {
  // Special handling for Mocha theme
  const isMochaTheme = title.toLowerCase().includes('mocha');
  
  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="aspect-[3/4] relative overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 text-xs rounded-full bg-white/80 backdrop-blur-sm text-primary">
              {category}
            </span>
          </div>
          <div className="absolute top-3 right-3">
            <div className="bg-purple-600 text-white px-3 py-1 text-xs font-bold rounded-full shadow-lg">
              Mulai Rp80.000
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">{title}</h3>
          
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="bg-amber-50 text-amber-800 p-2 rounded-md text-xs flex flex-col items-center text-center">
              <span className="font-semibold">Tanpa Foto</span>
              <span className="font-bold">Rp80.000</span>
            </div>
            <div className="bg-purple-50 text-purple-800 p-2 rounded-md text-xs flex flex-col items-center text-center">
              <span className="font-semibold">Dengan Foto</span>
              <span className="font-bold">Rp100.000</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <Button asChild variant="ghost" size="sm" className="flex gap-1 items-center">
                {isMochaTheme ? (
                  <Link to={`/mocha/Nama%20Tamu`}>Lihat</Link>
                ) : (
                  <Link to={`/preview/${id}`}>Lihat</Link>
                )}
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <Button asChild size="sm" variant="outline" className="flex gap-1 items-center w-full">
                <Link to={`/admin/create?theme=${id}&type=no-photo`}>
                  <ImageOff className="h-4 w-4" />
                  <span>Tanpa Foto</span>
                </Link>
              </Button>
              <Button asChild size="sm" className="flex gap-1 items-center w-full">
                <Link to={`/admin/create?theme=${id}&type=with-photo`}>
                  <Image className="h-4 w-4" />
                  <span>Dengan Foto</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ThemeCard;
