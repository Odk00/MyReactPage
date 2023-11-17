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
