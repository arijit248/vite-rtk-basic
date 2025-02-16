import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, dataObject } from "./countSlice";
import { useEffect, useState } from "react";

const Count = () => {
  const count = useSelector((state) => state.count.count);
  const data = useSelector((state) => state.count.data);
  const dispatch = useDispatch();
  const initialPageData = 5;
  const pageCount = Math.ceil(data?.length / initialPageData);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((result) => dispatch(dataObject(result)));
  }, []);
  const pageNum = [];
  for (let i = 0; i < pageCount; i++) {
    pageNum.push(i);
  }
  const [pageStart, setPageStart] = useState(0);
  const handleChanePage = (e) => {
    const newNum = Number(e.target.textContent) - 1;
    console.log(newNum * initialPageData);
    setPageStart(newNum * initialPageData);
  };

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
        }}
      >
        {data?.slice(pageStart, pageStart + initialPageData).map((ele) => {
          return (
            <div
              key={ele?.id}
              style={{
                backgroundColor: "#fff",
                color: "#000",
                width: "500px",
                height: "300px",
                marginRight: "15px",
              }}
            >
              <h4>{ele?.title}</h4>
              <p>{ele?.body}</p>
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {pageNum.map((e) => {
          return (
            <div key={e} style={{ marginRight: "10px" }}>
              <button onClick={handleChanePage}>{e + 1}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Count;
