import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectCategoriesMap } from "../../store/categories/categories.selector";

import ProductCard from "../../components/product-card/product-card.component";

import { CategoryContainer, Title } from "./category.styles";

const Category = () => {
  const { shopId } = useParams();
  // console.log("render/re-rendering category component");
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[shopId]);

  useEffect(() => {
    // console.log("effect fired calling setProducts");
    setProducts(categoriesMap[shopId]);
  }, [shopId, categoriesMap]);

  return (
    <>
      <Title>{shopId.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;
