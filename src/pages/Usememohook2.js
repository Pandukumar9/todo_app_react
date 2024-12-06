import { useEffect, useMemo, useState } from "react";

function Usememohook2() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [products, setProducts] = useState([
    { id: 1, name: "OnePlus Nord 4", price: 20000 },
    { id: 2, name: "Motorola G60", price: 60000 },
    { id: 3, name: "iPhone 16 Pro", price: 40000 },
  ]);
  const [searchText, setSearchText] = useState("");

  // Memoized filtered products
  const filteredProducts = useMemo(() => {
    console.log(products)
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [products, searchText]);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>Time: {time}</h2>

      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search Products"
      />

      <table border="1">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No products found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Usememohook2;
