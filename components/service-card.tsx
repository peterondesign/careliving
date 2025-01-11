import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

interface ServiceCardProps {
  title: string
  description: string
  imageUrl: string
  href: string
}

export function ServiceCard({ title, description, imageUrl, href }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full text-xl" variant="secondary">
          <a href={href}>Learn More</a>
        </Button>
      </CardFooter>
    </Card>
  )
}

