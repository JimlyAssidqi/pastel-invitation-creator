
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Image, ImageOff } from "lucide-react";

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
        <div className="aspect-square relative overflow-hidden">
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
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">{title}</h3>
          
          <div className="flex flex-col gap-2">
            {/* <Button asChild variant="ghost" size="sm" className="flex gap-1 items-center w-full">
              {isMochaTheme ? (
                <Link to={`/mocha/Nama%20Tamu`}>Lihat</Link>
              ) : (
                <Link to={`/preview/${id}`}>Lihat</Link>
              )}
            </Button> */}
            
            <div className="grid grid-cols-2 gap-2">
              <Button asChild size="sm" variant="outline" className="flex gap-1 items-center w-full">
                <Link to={`/order-invitation?theme=${id}&type=no-photo`}>
                  <ImageOff className="h-4 w-4" />
                  <span>Tanpa Foto</span>
                </Link>
              </Button>
              <Button asChild size="sm" className="flex gap-1 items-center w-full">
                <Link to={`/order-invitation?theme=${id}&type=with-photo`}>
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
