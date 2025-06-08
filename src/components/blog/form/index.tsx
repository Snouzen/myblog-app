"use client";

import React from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import RichTextEditor from "./rte";
import { toast } from "react-toastify";
import { BlogInput } from "@/types/blog";
import axios from "@/lib/axios";
import { useSession } from "next-auth/react";

const blogSchema = Yup.object({
  title: Yup.string()
    .min(5, "Title must be at least 5 characters long")
    .max(100, "Title must be at most 100 characters long")
    .required("Title is required"),
  category: Yup.string().required("Category is required"),
  thumbnail: Yup.string().required("Thumbnail is required"),
  content: Yup.string()
    .min(20, "Content must be at least 20 characters long")
    .required("Content is required"),
});

const initialValues: BlogInput = {
  title: "",
  category: "",
  content: "",
  thumbnail: "",
};

export default function FormBlog() {
  const session = useSession();
  const onCreate = async (
    values: BlogInput,
    actions: FormikHelpers<BlogInput>
  ) => {
    try {
      const { data } = await axios.post("/data/Blogs", values, {
        headers: { "user-token": session.data?.userToken },
      });

      await axios.post(`/data/Blogs/${data.objectId}/author`, [session.data?.user.objectId], {
        headers: { "user-token": session.data?.userToken },
      });

      actions.resetForm();
      toast.success("Blog Created!");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={blogSchema}
      onSubmit={(values, actions) => {
        onCreate(values, actions);
      }}
    >
      {({ touched, errors, isSubmitting, setFieldValue }) => {
        return (
          <Form className="flex flex-col gap-3 w-full p-4">
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Title
              </label>
              <Field
                name="title"
                type="text"
                className="bg-white border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {touched.title && errors.title && (
                <div className="text-red-500 text-[12px]">{errors.title}</div>
              )}
            </div>

            <div>
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Category
              </label>
              <Field
                name="category"
                as="select"
                className="bg-white border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">~ Pilih Category ~</option>
                <option value="Slytherin">Slytherin</option>
                <option value="Ravenclaw">Ravenclaw</option>
                <option value="Gryffindor">Gryffindor</option>
                <option value="Hufflepuff">Hufflepuff</option>
              </Field>
              {touched.category && errors.category && (
                <div className="text-red-500 text-[12px]">
                  {errors.category}
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="thumbnail"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Thumbnail
              </label>
              <Field
                name="thumbnail"
                type="text"
                className="bg-white border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {touched.thumbnail && errors.thumbnail && (
                <div className="text-red-500 text-[12px]">
                  {errors.thumbnail}
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="content"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Content
              </label>
              <RichTextEditor setFieldValue={setFieldValue} />
              {touched.content && errors.content && (
                <div className="text-red-500 text-[12px]">{errors.content}</div>
              )}
            </div>

            <div className="flex sm:justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-[40px] disabled:cursor-not-allowed disabled:bg-[#8a8a8b] sm:w-[120px] text-[#f5f5f7] bg-[#383839] hover:bg-[#595959] rounded-lg"
              >
                {isSubmitting ? "Loading.. " : "Submit"}
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}