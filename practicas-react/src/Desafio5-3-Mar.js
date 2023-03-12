import ReactDOM from "react";

function GroceryList() {
  const items = [
    { id: 1, name: "bread" },
    { id: 2, name: "milk" },
    { id: 3, name: "eggs" },
  ];
  return (
    <>
      <h1>Grocery List</h1>
      <ul>
        {items.map((item) => (
          <li value={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getelementById("root"));
root.render(<GroceryList />);
