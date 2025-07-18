interface WorkDetailPageProps {
  params: {
    slug: string
  }
}

export default function WorkDetailPage({ params }: WorkDetailPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">実績詳細</h1>
      <p>実績ID: {params.slug}</p>
    </div>
  )
}