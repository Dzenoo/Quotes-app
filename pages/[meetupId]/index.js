import ProductDetail from "../../components/products/ProductDetail";

const ProductDetails = () => {
  return <ProductDetail />;
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "p1",
        },
      },
      {
        params: {
          meetupId: "p2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
        id: meetupId,
        title: "First Meetup",
        size: "Some street",
        description: "First meetup description",
      },
    },
  };
}

export default ProductDetails;
