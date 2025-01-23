import React from "react"
import Image from "next/image"
import Link from "next/link"

interface Category {
  _id: string
  title: string
  imageUrl: string
}

interface CategoriesProps {
  categories: Category[]
}

export default function Categories({ categories }: CategoriesProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Categories</h2>
      <div className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <Link href={`/shop/category/${category._id}`} key={category._id} className="group">
            <div className="relative w-40 h-40 overflow-hidden rounded-lg shadow-md">
              <Image
                src={category.imageUrl || "/placeholder.svg"}
                alt={category.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">{category.title}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

