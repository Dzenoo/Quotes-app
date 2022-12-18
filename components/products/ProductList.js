import ProductItem from "./ProductItem";
import classes from "./ProductList.module.css";

function MeetupsList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <ProductItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          size={meetup.size}
        />
      ))}
    </ul>
  );
}

export default MeetupsList;
