import Button from "./Button";
function Article(article) {
  return (
    <article>
      <h3>{article.header}</h3>
      <p>{article.content}</p>
      <Button />
    </article>
  );
}

export default Article;
