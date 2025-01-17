import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { User, Calendar } from 'lucide-react'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  author: string
  date: string
  image: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Roaming with Purpose: Travelling Responsibly and Sustainably",
    excerpt: "Lorem ipsum dolor sit amet consectetur. Feugiat sit eleifend tortor.",
    author: "Malisa John",
    date: "08 Aug, 2023",
    image: "/image-1.png"
  },
  {
    id: 2,
    title: "Navigating Cultures: Cross-Cultural Encounters and Insights",
    excerpt: "Lorem ipsum dolor sit amet consectetur. Feugiat sit eleifend tortor.",
    author: "Malisa John",
    date: "08 Aug, 2023",
    image: "/image-2.png"
  },
  {
    id: 3,
    title: "Urban Explorations: Navigating Cities and Urban Landscapes",
    excerpt: "Lorem ipsum dolor sit amet consectetur. Feugiat sit eleifend tortor.",
    author: "Malisa John",
    date: "08 Aug, 2023",
    image: "/image-3.png"
  },
  {
    id: 4,
    title: "Wings of Adventure: Exploring the World by Air",
    excerpt: "Lorem ipsum dolor sit amet consectetur. Feugiat sit eleifend tortor.",
    author: "Malisa John",
    date: "08 Aug, 2023",
    image: "/image-4.png"
  },
  {
    id: 5,
    title: "Wings of Adventure: Exploring the World by Air",
    excerpt: "Lorem ipsum dolor sit amet consectetur. Feugiat sit eleifend tortor.",
    author: "Malisa John",
    date: "08 Aug, 2023",
    image: "/image-1.png"
  },
  {
    id: 6,
    title: "Wings of Adventure: Exploring the World by Air",
    excerpt: "Lorem ipsum dolor sit amet consectetur. Feugiat sit eleifend tortor.",
    author: "Malisa John",
    date: "08 Aug, 2023",
    image: "/image-2.png"
  },
]

export default function LatestNews() {
  return (
    <div className="max-w-7xl mx-auto py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Our Latest News</h2>
        <Button className="bg-blue-600 hover:bg-blue-700">
          Show More
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {blogPosts.map((post) => (
          <Card key={post.id} className="border-0 shadow-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-[4/3]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
                  Read More
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

