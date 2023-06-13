type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

export const Person = ({ name }: PersonProps) => {
  const { first, last } = name;
  return (
    <div>
      {first} {last}
    </div>
  );
};
