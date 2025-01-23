"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"

interface Product {
  _id: string
  title: string
  price: number
  priceWithoutDiscount?: number
  badge?: string
  imageUrl: string
  category: {
    _id: string
    title: string
  }
}

interface ShopGridProps {
  products: Product[]
}

export default function ShopGrid({ products }: ShopGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <Link href={`/shop/product/${product._id}`} key={product._id}>
          <div className="relative p-4 shadow-sm flex flex-col">
            {product.badge && (
              <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
                {product.badge}
              </span>
            )}
            <Image
              className="w-full h-80 object-cover mb-4"
              src={product.imageUrl || "/placeholder.svg"}
              alt={product.title}
              width={300}
              height={300}
            />
            <div className="flex flex-col space-y-2">
              <h3 className="text-sm font-medium text-gray-800">{product.title}</h3>
              <p className="text-gray-500 text-sm">
                ${product.price.toFixed(2)}
                {product.priceWithoutDiscount && (
                  <span className="line-through ml-2 text-gray-400">${product.priceWithoutDiscount.toFixed(2)}</span>
                )}
              </p>
              <p className="text-xs text-gray-600">{product.category.title}</p>
            </div>
            <button className="absolute bottom-4 right-4 bg-[#007580] text-white p-2 rounded-full shadow-lg hover:bg-[#005e5e] transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m-.4 8h14m-8 6a1 1 0 100 2 1 1 0 000-2zm6 0a1 1 0 100 2 1 1 0 000-2z"
                />
              </svg>
            </button>
          </div>
        </Link>
      ))}
    </div>
  )
}




