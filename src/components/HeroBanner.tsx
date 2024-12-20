//"use client";
import { Search } from "lucide-react";
import Form from "next/form";

export default function HeroBanner() {
  return (
    <div className=" bg-white">
      {/* Enhanced Banner with centered heading */}
      <div className="border-b-2 border-black py-16 mb-12 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-black/[0.2] bg-[size:20px_20px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Welcome to MiniBlog
          </h1>
          <p className="text-xl md:text-2xl text-center text-gray-600 max-w-2xl mx-auto">
            Discover stories, ideas, and expertise from writers on any topic.
          </p>
        </div>
      </div>

      {/* Search form */}
      <div className="max-w-2xl mx-auto px-4">
        <Form action="/" className="flex">
          <input
            name="query"
            placeholder="Search articles..."
            className="flex-grow px-4 py-2 border-2 border-black focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-white border-2 border-black border-l-0 hover:bg-black hover:text-white transition-colors duration-200"
          >
            <Search size={20} />
            <span className="sr-only">Search</span>
          </button>
        </Form>
      </div>
    </div>
  );
}
