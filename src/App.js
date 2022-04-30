import React, { useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const ref = useRef(null);
  const collection = [
    {
      id: uuidv4(),
      name: "Móc khóa Visual",
      oldprice: 30000,
      price: 25000,
      thumbnail: "/static/images/moc-khoa-vs-ss-0.jpg",
    },
    {
      id: uuidv4(),
      name: "Móc khóa Photoshop",
      oldprice: 10000,
      price: 15000,
      thumbnail: "/static/images/moc-khoa-pts-ss-0.jpg",
    },
    {
      id: uuidv4(),
      name: "Móc khóa Word",
      oldprice: 12000,
      price: 10000,
      thumbnail: "/static/images/moc-khoa-word-ss-0.jpg",
    },
    {
      id: uuidv4(),
      name: "Móc khóa Excel",
      oldprice: 12000,
      price: 10000,
      thumbnail: "/static/images/moc-khoa-excel-ss-0.jpg",
    },
    {
      id: uuidv4(),
      name: "Móc khóa InterNot",
      oldprice: 30000,
      price: 25000,
      thumbnail: "/static/images/moc-khoa-internot-ss-0.jpg",
    },
    {
      id: uuidv4(),
      name: "Móc khóa Illustrator",
      oldprice: 20000,
      price: 15000,
      thumbnail: "/static/images/moc-khoa-ai-ss-0.jpg",
    },
    {
      id: uuidv4(),
      name: "Móc khóa XD",
      oldprice: 20000,
      price: 15000,
      thumbnail: "/static/images/moc-khoa-xd-ss-0.jpg",
    },
    {
      id: uuidv4(),
      name: "Móc khóa AE",
      oldprice: 20000,
      price: 15000,
      thumbnail: "/static/images/moc-khoa-ae-ss-0.jpg",
    },
    {
      id: uuidv4(),
      name: "Móc khóa LR",
      oldprice: 20000,
      price: 15000,
      thumbnail: "/static/images/moc-khoa-lr-ss-0.jpg",
    },
  ];

  const forward = (event) => {
    event.preventDefault();
    // console.log(ref.current.offsetWidth);
    ref.current.scrollLeft += ref.current.offsetWidth;
  };
  const backward = (event) => {
    event.preventDefault();
    // console.log(ref.current.offsetWidth);
    ref.current.scrollLeft -= ref.current.offsetWidth;
  };
  //lăn chuột scroll slide
  useEffect(() => {
    const el = ref.current;
    if (el) {
      const onWheel = (e) => {
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 4,
          behavior: "smooth",
        });
      };
      el.addEventListener("wheel", onWheel, { passive: false });
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return (
    <div className="container">
      <h1>Click hoặc lăn chuột</h1>
      <div className="carousel" ref={ref}>
        {collection.map((slide, index) => (
          <div className="item" key={index}>
            <div className="image">
              <img src={slide.thumbnail} alt={slide.name} />
            </div>
            <div className="info">
              <span className="name">{slide.name}</span>
              <span className="oldprice">{slide.oldprice} vnđ</span>
              <span className="price">{slide.price} vnđ</span>
            </div>
          </div>
        ))}
      </div>
      <span className="prev" onClick={backward}>
        ❮
      </span>
      <span className="next" onClick={forward}>
        ❯
      </span>
    </div>
  );
}

export default App;
