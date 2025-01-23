"use client"

import React from "react"
import Image from "next/image"

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
  description: string
  inventory: number
  tags: string[]
}

interface ProductDetailProps {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div className="max-w-screen-xl mx-auto py-16 px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          {product.badge && (
            <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-sm rounded">
              {product.badge}
            </span>
          )}
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-semibold mb-4">{product.title}</h1>
          <p className="text-2xl text-gray-600 mb-2">
            ${product.price.toFixed(2)}
            {product.priceWithoutDiscount && (
              <span className="line-through ml-2 text-gray-400 text-xl">
                ${product.priceWithoutDiscount.toFixed(2)}
              </span>
            )}
          </p>
          <p className="text-sm text-gray-500 mb-6">Category: {product.category.title}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <p className="text-sm text-gray-600 mb-4">In stock: {product.inventory}</p>
          <div className="mb-6">
            {product.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                {tag}
              </span>
            ))}
          </div>
          <button className="bg-[#007580] text-white py-3 px-6 rounded-md hover:bg-[#005e5e] transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}


