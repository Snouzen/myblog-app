import { IBlog } from "@/types/blog";
import { convertTime } from "@/utils/time";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blog }: { blog: IBlog }) {
    return (
        <Link href={`/blog/${blog.objectId}`} data-cy="blog-item">
      <div className="flex flex-row-reverse items-center justify-between w-full max-sm:py-4 max-sm:border-b max-sm:border-b-gray-300 sm:block">
        <div className="h-[50px] w-[90px] sm:h-[150px] sm:w-full relative rounded-md overflow-hidden">
          <Image
            src={blog.thumbnail}
            alt={blog.title}
            fill
            priority
            className="object-fill hover:scale-110"
          />
        </div>
        <div>
          <h2 className="mt-3 text-[12px] text-green-700 uppercase font-bold">
            {blog.category}
          </h2>
          <h2 className="text-[14px] my-2 sm:my-3 font-extrabold line-clamp-3 min-h-[3em] leading-snug text-gray-900">
            {blog.title}
          </h2>
          <div className="text-[12px] flex gap-1.5 text-gray-600">
            <span className="capitalize">{blog.author.name}</span>
            <span>|</span>
            <span>{convertTime(blog.created)}</span>
          </div>
        </div>
      </div>
    </Link>
    )
}