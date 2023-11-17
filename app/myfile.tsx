// const ProductCategoryRow = ({ title, productRowData }: { title: string }) => {
//   return (
//     <div>
//       <h1>Title</h1>
//       <ProductRow name="Apple" price="1" />
//       <ProductRow name="Dragonfruit" price="1" />
//       <ProductRow name="Passionfruit" price="2" />
//     </div>
//   );
// };

// }
// const ProductRow = ({ name, price }: { title: string; price: string }) => {
//   return (
//     <div style={{ display: "flex", gap: "30px" }}>
//       <div>{name}</div>
//       <div>{price}</div>
//     </div>
//   );
// };

// const firstname = "Odbayar";
// const lastname = "Naranbold";
const MyComponent = ({ firstname, lastname }) => {
    return (
      <h1>
        Hello , {firstname} {lastname}
      </h1>
    );
  };
  
  export default function Home() {
    return <MyComponent firstname="Odbayar" lastname="Naranbold" />;
  }