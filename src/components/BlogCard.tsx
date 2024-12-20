import Image from "next/image";
import { User, Clock } from "lucide-react";
import Link from "next/link";

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

const BlogCard = ({ post }: { post: Blog }) => {
  return (
    <div className="border-2 border-black">
      <div className="relative h-48">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-4 line-clamp-2">{post.description}</p>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <User className="w-4 h-4 mr-1" />
          <span>{post.author.name}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Clock className="w-4 h-4 mr-1" />
          <span>{new Date(post._createdAt).toLocaleDateString()}</span>
        </div>
        <Link
          href={`/blog/${post._id}`}
          className="inline-block border-2 border-black px-4 py-2 text-black hover:bg-black hover:text-white transition-colors duration-200"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
