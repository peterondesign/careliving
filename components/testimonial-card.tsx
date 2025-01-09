import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface TestimonialCardProps {
  content: string
  author: {
    name: string
    image?: string
  }
}

export function TestimonialCard({ content, author }: TestimonialCardProps) {
  return (
    <Card className="bg-white/50 backdrop-blur-sm">
      <CardContent className="p-6">
        <blockquote className="text-gray-700 mb-4">
          "{content}"
        </blockquote>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={author.image} alt={author.name} />
            <AvatarFallback>{author.name[0]}</AvatarFallback>
          </Avatar>
          <div className="font-medium">{author.name}</div>
        </div>
      </CardContent>
    </Card>
  )
}

