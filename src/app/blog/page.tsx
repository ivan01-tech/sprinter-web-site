import React from "react";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";
import { getSortedPostsData } from "@/lib/post";
import BannerSection from "@/components/design/BannerSection";
const BlogPreview: React.FC = () => {
  const posts = getSortedPostsData();

  return (
    <div>
      <BannerSection
        title={"BLOG"}
        linkLabel="ACCUEIL / BLOG"
        linkHref="/"
        backgroundImage="/images/image_banner.jpg"
      />

      <section className="py-20 px-6 bg-white dark:bg-gray-900 text-black dark:text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-10 text-center">
            Nos articles de blog
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block rounded-xl shadow hover:shadow-lg overflow-hidden transition bg-white dark:bg-gray-800"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-yellow-500 text-sm uppercase">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-bold mt-2 mb-1">{post.title}</h2>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPreview;
