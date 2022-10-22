import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dragon-news-server-six-ashen.vercel.app/new-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h4>All Category </h4>
      <div>
        {categories.map((category) => (
          <p key={category.id}>
            <Link to={`category/${category.id}`} className="nav-link">
              <span className="text-primary">{category.name}</span>{" "}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
