import React from "react";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";
import { getSortedPostsData } from "@/lib/post";
const BlogPreview: React.FC = () => {
  const posts = getSortedPostsData();

  // const blogs = [
  //   {
  //     title: "Les tendances UI/UX de 2025",
  //     category: "Design",
  //     date: "08 mai 2025 • 4 min",
  //     image: "/images/imagesteam.jpg",
  //     slug: "tendances-uiux-2025",
  //   },
  //   {
  //     title: "Comment booster votre SEO avec Next.js",
  //     category: "Marketing",
  //     date: "05 mai 2025 • 6 min",
  //     image: "/images/imagesteam.jpg",
  //     slug: "seo-nextjs",
  //   },
  //   {
  //     title: "Développement web : erreurs à éviter",
  //     category: "Développement",
  //     date: "01 mai 2025 • 5 min",
  //     image: "/images/imagesteam.jpg",
  //     slug: "erreurs-dev",
  //   },
  // ];

  return (
    <div>
      <section
        className="relative bg-cover bg-center bg-fixed min-h-[60vh] py-24 sm:py-32 lg:py-40 px-4"
        style={{
          backgroundImage: "url('/images/image_banner.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div
          className="relative z-10 flex flex-col items-center justify-center text-center text-white max-w-4xl mx-auto"
          data-aos="zoom-in"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-unbounded mb-4">
            BLOG
          </h1>
          <Link
            href="/"
            className="inline-block bg-yellow-400 text-white font-semibold px-6 py-2 rounded hover:bg-red-50 transition-colors"
          >
            ACCUEIL / BLOG
          </Link>
        </div>
      </section>

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

      {/* <section className="bg-gray-50 dark:bg-gray-900 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-black dark:text-white">
            Nos Articles de Blog
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <>
                <BlogCard key={index} {...blog} />
                <BlogCard key={index} {...blog} />
              </>
            ))}
          </div>
        </div>
      </section> */}

      {/* <section className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12">
          <div className="lg:w-3/4">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <Image
                  src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop" // Remplace par ton image
                  alt="Équipe en réunion"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full rounded-2xl"
                />
              </div>
              <div className="md:w-1/2 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    26 Mars, 24 · Branding
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white font-unbounded mb-4">
                    Agence de Design Graphique pour Votre Marque...
                  </h2>
                </div>
                <Link
                  href="/blog/graphic-design"
                  className="bg-yellow-400 text-white font-semibold py-3 px-6 rounded-full hover:bg-red-50 transition-colors inline-block"
                >
                  Lire plus
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:w-1/4">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
              Catégories
            </h3>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link
                    href={`/blog/category/${category.name.toLowerCase()}`}
                    className="flex justify-between text-black dark:text-white hover:text-yellow-400 dark:hover:text-yellow-400 transition-colors"
                  >
                    <span>{category.name}</span>
                    <span>({category.count.toString().padStart(2, "0")})</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default BlogPreview;
