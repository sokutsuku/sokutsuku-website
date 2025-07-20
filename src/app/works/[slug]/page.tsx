interface WorkDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">実績詳細</h1>
      <p>実績ID: {slug}</p>
    </div>
  )
}