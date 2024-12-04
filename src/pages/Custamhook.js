import useGetApiData from "./Utils";

function CustomHook() {
  const data = useGetApiData("https://fakestoreapi.com/products/1");

  return (
    <>
      <h1>This is a Custom Hook Example</h1>
      {/* {data && <p>Loading...</p>} Show loading indicator */}
      {/* {error && <p>Error: {error}</p>} Show error message if any */}
      {data && (
        <div>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <p>Price: ${data.price}</p>
        </div>
      )}
    </>
  );
}

export default CustomHook;
