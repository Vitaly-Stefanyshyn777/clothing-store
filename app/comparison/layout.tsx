import ComparisonLayout from '@/components/layouts/ComparisonLayout'

export const metadata = {
  title: 'TrendZone | Порівняння товарів',
}

export default function ComparisonRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ComparisonLayout>{children}</ComparisonLayout>
}
