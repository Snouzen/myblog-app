import Wrapper from "@/components/wrapper";
import { IBlog } from "@/types/blog";
import { convertTime } from "@/utils/time"
import Image from "next/image";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const res = await fetch(
    `https://orderlyscarecrow-us.backendless.app/api/data/Blogs/${id}?loadRelations=author`
  );
  const blog: IBlog = await res.json();
  return (
    <Wrapper>
      <div className="flex mt-6 gap-2 w-full">
        <div className="flex-1/3 max-lg:hidden">
          <div className="sticky top-[100px]">
            <div className="text-sm flex items-center gap-1">
              <IoArrowBack />
              <Link href={"/"} className="uppercase font-bold text-[12px]">
                kembali
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-2/3 box-content md:mt-8 pr-36 max-lg:pr-0">
          <div className="text-sm font-bold text-green-700 uppercase">
            {blog.category}
          </div>
          <div className="text-3xl max-md:text-2xl font-bold my-4">
            {blog.title}
          </div>
          <div className="flex gap-2 text-[12px] capitalize">
            <span className="font-bold">{blog.author.name}</span>
            <span>∙</span>
            <span className="font-light">{convertTime(blog.created)}</span>
          </div>
          <div className="h-[400px] max-md:h-[300px] max-sm:h-[250px] w-full relative my-6">
            <Image
              src={blog.thumbnail}
              alt={blog.title}
              fill
              className="object-fill"
              priority
            />
          </div>
          {/* <div>{blog.content}</div> */}
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      </div>
    </Wrapper>
  );
}