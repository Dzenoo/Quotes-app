import { useRouter } from "next/router";

import Card from "../ui/Card";
import classes from "./ProductItem.module.css";

function ProductItem(props) {
  const router = useRouter();

  function showDetail() {
    router.push("/" + props.id);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.size}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetail}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default ProductItem;
