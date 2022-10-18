import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import styles from "../../styles/PostPage.module.css";
import Button from "../../comps/Button";
import SyntaxHighlighter from "react-syntax-highlighter";

const components = { Button, SyntaxHighlighter };

const PostPage = ({ serilaizedContent }) => {
  const { frontmatter } = serilaizedContent;

  return (
    <div className={styles.postPage}>
      <h1>{frontmatter.title}</h1>
      <MDXRemote {...serilaizedContent} components={components} />
    </div>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.split(".")[0],
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const markdown = fs.readFileSync(
    path.join("posts", params.slug + ".mdx"),
    "utf-8"
  );

  const serilaizedContent = await serialize(markdown, {
    format: "mdx",
    parseFrontmatter: true,
    scope: "", // we can supply variables to the mdx files via scope,
    mdxOptions: {
      remarkPlugins: [],
      rehyPlugins: [],
    },
  });

  return {
    props: {
      slug: params.slug,
      serilaizedContent,
    },
  };
};

export default PostPage;
