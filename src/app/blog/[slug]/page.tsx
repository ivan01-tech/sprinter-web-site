import { notFound } from "next/navigation";
import BannerSection from "@/components/design/BannerSection";
import { getAllPostSlugs, getPostData } from "@/lib/post";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return getAllPostSlugs().map(({ slug }) => ({ slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostData(params.slug);

  if (!post) return notFound();

  return (
    <>
      <BannerSection
        title={post.title}
        linkLabel="ACCUEIL / BLOG"
        linkHref="/"
        backgroundImage="/images/image_banner.jpg"
      />

      <section className="py-16 px-6 bg-white dark:bg-gray-900 text-black dark:text-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden mb-8 shadow-lg">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="mb-6">
            <span className="text-sm text-yellow-500 font-semibold uppercase">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-2">
              {post.title}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {post.date}
            </p>
          </div>

          <article
            className="max-w-none text-base leading-relaxed space-y-6 [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:mt-8 [&>ul]:list-disc [&>ul]:pl-6 [&>li]:mb-2"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </section>
    </>
  );
}


// import { notFound } from "next/navigation";
// import BannerSection from "@/components/design/BannerSection";

// import Image from "next/image";
// import { getAllPostSlugs, getPostData } from "@/lib/post";

// type Props = { params: { slug: string } };

// // export async function generateStaticParams() {
// //   return getAllPostSlugs().map(({ slug }) => ({ slug }));
// // }

// export async function generateStaticParams() {
//   const slugs = getAllPostSlugs();
//   console.log("SLUGS GÉNÉRÉS :", slugs);
//   return slugs.map(({ slug }) => ({ slug }));
// }

// export default async function BlogPostPage({ params }: Props) {
//   const post = await getPostData(params.slug);
//   if (!post) return notFound();

//   // const blogPosts = [
//   //   {
//   //     slug: "tendances-uiux-2025",
//   //     title: "Les tendances UI/UX de 2025",
//   //     date: "08 mai 2025 • 4 min",
//   //     category: "Design",
//   //     image: "/images/imagesteam.jpg",
//   //     content: `
//   //       <p>En 2025, le design va bien au-delà de l'esthétique. On parle d'interfaces adaptatives, de micro-interactions et d'expériences totalement personnalisées.</p>
//   //       <h2>1. Interfaces Vocales</h2>
//   //       <p>Les assistants vocaux se généralisent dans les interfaces mobiles, web et objets connectés.</p>
//   //       <h2>2. Responsive intelligent</h2>
//   //       <p>Les écrans s'adaptent non seulement à la taille, mais aussi au contexte d'usage (vitesse, météo, etc).</p>
//   //       <ul>
//   //         <li>Motion design utile</li>
//   //         <li>Accessibilité native</li>
//   //         <li>Branding immersif</li>
//   //       </ul>
//   //     `,
//   //   },
//   // ];

//   return (
//     <>
//       <BannerSection
//         title="DETAILS BLOG"
//         linkLabel="ACCUEIL / BLOG"
//         linkHref="/"
//         backgroundImage="/images/image_banner.jpg"
//       />

//       <section className="py-16 px-6 bg-white dark:bg-gray-900 text-black dark:text-white">
//         <div className="max-w-4xl mx-auto">
//           {/* Image de couverture */}
//           <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden mb-8 shadow-lg">
//             <Image
//               src={post.image}
//               alt={post.title}
//               fill
//               className="object-cover"
//             />
//           </div>

//           {/* Infos de l'article */}
//           <div className="mb-6">
//             <span className="text-sm text-yellow-500 font-semibold uppercase">
//               {post.category}
//             </span>
//             <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-2">
//               {post.title}
//             </h1>
//             <p className="text-sm text-gray-500 dark:text-gray-400">
//               {post.date}
//             </p>
//           </div>

//           {/* Contenu de l’article */}
//           <article
//             className="prose dark:prose-invert max-w-none prose-headings:mt-6 prose-ul:pl-6 prose-li:marker:text-yellow-500"
//             dangerouslySetInnerHTML={{ __html: post.contentHtml }}
//           />
//         </div>
//       </section>
//     </>
//   );
// }
