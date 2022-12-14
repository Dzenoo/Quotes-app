import classes from "./ProductDetail.module.css";

const ProductDetail = (props) => {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.size}</address>
      <p>{props.description}</p>
    </section>
  );
};

export default ProductDetail;
