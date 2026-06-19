'use client';

import { useState } from 'react';
import { SkinType, Product } from '@/lib/types';
import { fetchProductsBySkinType } from '@/lib/mockData';
import SkinSelector from '@/components/features/SkinSelector';
import SkeletonGrid from '@/components/features/SkeletonGrid';
import ProductGrid from '@/components/features/ProductGrid';
import { useUiStore } from '@/store/useUiStore'; // Yeni store eklendi

export default function Home() {
  // Artık step state'ini kendi oluşturduğumuz global store'dan alıyoruz
  const { step, setStep } = useUiStore();
  const [products, setProducts] = useState<Product[]>([]);

  const handleSkinTypeSelect = async (selectedType: SkinType) => {
    setStep('analyzing'); 
    
    try {
      const data = await fetchProductsBySkinType(selectedType);
      
      // MÜHENDİSLİK DETAYI: Race Condition (Yarış Durumu) Kontrolü
      // Kullanıcı 3 saniye dolmadan logoya basıp ana sayfaya dönmüş olabilir.
      // Eğer hala 'analyzing' durumundaysak sonuçları göster, değilse iptal et.
      if (useUiStore.getState().step === 'analyzing') {
        setProducts(data);
        setStep('results');
      }
    } catch (error) {
      console.error("Analiz sırasında hata oluştu", error);
    }
  };

  return (
    <main className="min-h-screen bg-[#FDFDFD] flex flex-col items-center pt-32 pb-20 px-4">
      <div className="text-center mb-16">
        <span className="bg-brand text-white px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide shadow-sm">
          PERSONALIZED AI MATCHING
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl font-bold text-[#2D1D4A] tracking-tight">
          Discover Your Perfect Routine
        </h1>
      </div>

      <div className="w-full max-w-5xl">
        {/* Adımları Zustand state'ine göre gösteriyoruz */}
        {step === 'selection' && <SkinSelector onSelect={handleSkinTypeSelect} />}
        {step === 'analyzing' && <SkeletonGrid />}
        {step === 'results' && <ProductGrid products={products} />}
      </div>
    </main>
  );
}