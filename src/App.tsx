import ListGroup from "./components/ListGroup";

function APP() {
  const items = ["New York", "London", "Paris", "Berlin", "Madrid"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default APP;
