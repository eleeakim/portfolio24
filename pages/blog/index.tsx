import type { NextPage } from "next";
import { getSortedPostsData } from "../../lib/blogs";

export async function getStaticProps() {
  let allPostsData = getSortedPostsData();

  allPostsData = allPostsData.filter(({ draft }: any) => {
    return !draft || process.env.NODE_ENV === "development";
  });

  return {
    props: {
      allPostsData,
    },
  };
}

const Blogs: NextPage = ({ allPostsData }: any) => {
  return (
    <section className="blog-list">
      <ul>
        {allPostsData.map(({ id, date, title, categories }: any) => (
          <li key={id}>
            <div className="top-bar">
              <a href={"/blog/" + id}>{title}</a>
              <p>{new Date(date).toLocaleDateString("en-IN")}</p>
            </div>
            <div className="categories">
              {categories.map((category: string) => (
                <span key={category}>{category}</span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Blogs;
