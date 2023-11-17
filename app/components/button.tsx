export const Button = ({ text, type }) => {
  if (type == "first") {
    return (
      <div>
        <button >Get access</button>
      </div>
    );
  }

  return (
    <div>
      <button >Get early access</button>
    </div>
  );
};

