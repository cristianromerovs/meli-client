export const Pagination = () => {
  let active = 4;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return <Pagination>{items}</Pagination>;
};
