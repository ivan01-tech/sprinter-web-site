import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  title: string;
  category: string;
  date: string;
  image: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, category, date, image, slug }) => {
  return (
    <Link href={`/blog/${slug}`} className="group block overflow-hidden rounded-xl shadow-md bg-white dark:bg-gray-800 hover:shadow-lg transition">
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <span className="text-sm text-yellow-500 uppercase font-semibold">{category}</span>
        <h3 className="text-xl font-bold text-black dark:text-white mt-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{date}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
