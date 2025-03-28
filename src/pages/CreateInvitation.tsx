
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { ArrowLeft, Calendar, Clock, MapPin } from "lucide-react";

// Mock data for themes
const themes = [
  { id: "theme-1", name: "Pernikahan Elegan" },
  { id: "theme-2", name: "Ulang Tahun Ceria" },
  { id: "theme-3", name: "Baby Shower" },
];

const CreateInvitation = () => {
  const [formData, setFormData] = useState({
    title: "",
    theme: "",
    eventDate: "",
    eventTime: "",
    eventLocation: "",
    description: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, theme: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.title || !formData.theme || !formData.eventDate || !formData.eventTime || !formData.eventLocation) {
      toast({
        title: "Error",
        description: "Harap isi semua kolom yang wajib diisi.",
        variant: "destructive",
      });
      return;
    }

    // Show success message with mock data for demo
    toast({
      title: "Berhasil Dibuat",
      description: "Undangan digital berhasil dibuat dan disimpan.",
    });
    
    console.log("Form submitted:", formData);
    // In a real app, we would save the invitation to a database here
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Link to="/admin" className="mr-4">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-gray-800">Buat Undangan Baru</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle>Informasi Acara</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Judul Undangan</Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="contoh: Pernikahan Budi & Siti"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="theme">Pilih Tema</Label>
                  <Select name="theme" value={formData.theme} onValueChange={handleSelectChange}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Pilih tema undangan" />
                    </SelectTrigger>
                    <SelectContent>
                      {themes.map((theme) => (
                        <SelectItem key={theme.id} value={theme.id}>
                          {theme.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="eventDate">Tanggal Acara</Label>
                    <div className="relative mt-1">
                      <Calendar className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="eventDate"
                        name="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="eventTime">Waktu Acara</Label>
                    <div className="relative mt-1">
                      <Clock className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="eventTime"
                        name="eventTime"
                        type="time"
                        value={formData.eventTime}
                        onChange={handleInputChange}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="eventLocation">Lokasi Acara</Label>
                  <div className="relative mt-1">
                    <MapPin className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="eventLocation"
                      name="eventLocation"
                      value={formData.eventLocation}
                      onChange={handleInputChange}
                      placeholder="contoh: Hotel Grand Hyatt, Jakarta"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Deskripsi Acara (opsional)</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Berikan detail tambahan tentang acara Anda"
                    className="mt-1"
                    rows={4}
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <Button variant="outline" type="button" asChild>
                  <Link to="/admin">Batal</Link>
                </Button>
                <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                  Buat Undangan
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateInvitation;
