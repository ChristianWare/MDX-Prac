import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  console.log(posts)

  return (
    <div className={styles.articleList}>
      {posts.map((post, index) => (
        <Link href={`/blog/${post.slug}`} key={index}>
          <a className={styles.item}>
            <div className={styles.thumbnail}>
              <Image
                src={post.frontmatter.thumbnailUrl}
                alt='thumbnail'
                width={500}
                height={500}
                objectFit='cover'
              />
            </div>
          <br />
          <h2 className={styles.title}>{post.frontmatter.title}</h2>
          <p className={styles.description}>{post.frontmatter.description}</p>
          <p className={styles.date}>{post.frontmatter.date}</p>
          </a>
        </Link>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const fs = require("fs");
  const path = require("path");
  const matter = require("gray-matter");

  // Find the path in the directory called "Posts" :
  const files = fs.readdirSync(path.join("posts"));

  // Read all of the files inside of the "Post" directory, and extract the front matter from every MDX file :
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data } = matter(markdownWithMeta);

    console.log(data);

    return {
      frontmatter: data,
      slug: filename.split(".")[0],
    };
  });

  return {
    props: { posts }
  }
};
