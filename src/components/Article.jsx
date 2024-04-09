import Button from "./Button";
import styles from "./Article.module.css"
function Article(props) {
  return (
    <article>
      <h3 className={styles.h3 + " " + styles.bgclr}>{props.header}</h3>
      <p>{props.content}</p>
      <Button>read more</Button>
    </article>
  );
}

export default Article;
