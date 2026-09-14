import { getCafeConfig, getCategories, getProducts } from '@/lib/api';
import { CafeExperience } from '@/components/home/CafeExperience';

export const revalidate = 60; // Revalidate every minute

export default async function HomePage() {
  const [cafeConfig, categories, products] = await Promise.all([
    getCafeConfig(),
    getCategories(),
    getProducts()
  ]);

  return (
    <CafeExperience
      cafeConfig={cafeConfig}
      categories={categories}
      products={products}
      tableId={null}
    />
  );
}
