"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BlogForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    content: "",
    category: "",
    authorName: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the data to your backend or Sanity
    console.log("Form submitted:", formData);
    // Reset form or redirect user after submission
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-block mb-8 px-4 py-2 border-2 border-black hover:bg-black hover:text-white transition-colors duration-200"
        >
          <ArrowLeft className="inline-block mr-2" />
          Back to Blog
        </Link>

        <h1 className="text-3xl font-bold mb-8">Create New Blog Post</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              className="mt-1 block w-full border-2 border-black p-2"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={3}
              required
              value={formData.description}
              onChange={handleChange}
              className="mt-1 block w-full border-2 border-black p-2"
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Image URL
            </label>
            <input
              type="url"
              id="image"
              name="image"
              required
              value={formData.image}
              onChange={handleChange}
              className="mt-1 block w-full border-2 border-black p-2"
            />
          </div>

          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700"
            >
              Content
            </label>
            <textarea
              id="content"
              name="content"
              rows={10}
              required
              value={formData.content}
              onChange={handleChange}
              className="mt-1 block w-full border-2 border-black p-2"
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              required
              value={formData.category}
              onChange={handleChange}
              className="mt-1 block w-full border-2 border-black p-2"
            />
          </div>

          <div>
            <label
              htmlFor="authorName"
              className="block text-sm font-medium text-gray-700"
            >
              Author Name
            </label>
            <input
              type="text"
              id="authorName"
              name="authorName"
              required
              value={formData.authorName}
              onChange={handleChange}
              className="mt-1 block w-full border-2 border-black p-2"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 border-2 border-black hover:bg-black hover:text-white transition-colors duration-200"
            >
              Create Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
