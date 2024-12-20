import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, User, Calendar, Tag } from "lucide-react";
import { BLOG_BY_ID_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const post = await client.fetch(BLOG_BY_ID_QUERY, { id });

  console.log(post);

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

        <article className="border-2 border-black">
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-64 object-cover"
          />

          <div className="p-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{new Date(post._createdAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <Tag className="w-4 h-4 mr-1" />
                <span>{post.category}</span>
              </div>
              {/* {<div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>{blogPost.readTime}</span>
              </div>
            </div>

            <div className="prose max-w-none">
              {blogPost.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>} */}
            </div>
            <div className="prose max-w-none mb-6">
              <p>{post.description}</p>
            </div>
            <div className="prose max-w-none">{post.content}</div>
          </div>
        </article>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 border-2 border-black hover:bg-black hover:text-white transition-colors duration-200"
          >
            Read More Articles
          </Link>
        </div>
      </div>
    </div>
  );
}
