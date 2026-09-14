import { getCafeConfig, getCategories, getProducts } from '@/lib/api';
import { CafeExperience } from '@/components/home/CafeExperience';
import { Metadata } from 'next';

interface TablePageProps {
  params: Promise<{
    tableId: string;
  }>;
}

export async function generateMetadata({ params }: TablePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  return {
    title: `Masa ${resolvedParams.tableId} | Roast & Bloom Cafe`,
    description: `Masa ${resolvedParams.tableId} için dijital menü ve Wi-Fi bağlantısı.`
  };
}

export const revalidate = 60;

export default async function TablePage({ params }: TablePageProps) {
  const resolvedParams = await params;
  const tableId = resolvedParams.tableId;

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
      tableId={tableId}
    />
  );
}
