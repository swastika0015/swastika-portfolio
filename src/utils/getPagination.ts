import { SITE } from "@config";
import getPageNumbers from "./getPageNumbers";

interface GetPaginationProps<T> {
  posts: T;
  page: string | number;
  isIndex?: boolean;
}

const getPagination = <T>({
  posts,
  page,
  isIndex = false,
}: GetPaginationProps<T[]>) => {
  const totalPagesArray = getPageNumbers(posts.length);
  const totalPages = totalPagesArray.length;

  const currentPage = isIndex
    ? 1
    : page && !isNaN(Number(page)) && totalPagesArray.includes(Number(page))
    ? Number(page)
    : 0;

  // Adjust the number of posts per page here
  const postsPerPage = 6; // Change this value based on the number of posts you want per page

  const lastPost = isIndex ? postsPerPage : currentPage * postsPerPage;
  const startPost = isIndex ? 0 : lastPost - postsPerPage;
  const paginatedPosts = posts.slice(startPost, lastPost);

  return {
    totalPages,
    currentPage,
    paginatedPosts,
  };
};

export default getPagination;
