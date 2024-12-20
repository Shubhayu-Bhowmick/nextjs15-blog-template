import HeroBanner from "@/components/HeroBanner";
import BlogCard from "@/components/BlogCard";
//import { sanityFetch } from "@/sanity/lib/live";
import { BLOGS_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

interface Author {
  id: number;
  name: string;
  image: string;
  bio: string;
}

interface Blog {
  _id: string;
  title: string;
  slug: { current: string };
  author: Author; // Reference to the Author interface
  description: string;
  category: string;
  image: string;
  content: string;
  _createdAt: string; // ISO date string
  _updatedAt?: string; // Optional if updates are tracked
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };

  const posts = await client.fetch(BLOGS_QUERY, params);

  return (
    <div className="bg-white py-12">
      <div className=" mx-auto">
        <HeroBanner />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-12 px-4 sm:px-6 lg:px-14">
          {posts.map((post: Blog) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
