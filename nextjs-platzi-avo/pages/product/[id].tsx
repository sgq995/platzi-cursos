import { useState } from "react";
import { useRouter } from "next/router";

import useMountFetch from "../../hooks/useMountFetch";

export default function ProductItem() {
  const { query: { id } } = useRouter();

  const [product, setProduct] = useState<TProduct | null>();
  
  useMountFetch<TProduct | null>(
    () => id && `/api/avo/${id}`,
    (product) => setProduct(product),
    [id],
  );

  return (
    <div>
      <h1>Product {id}</h1>

      {product && (
        <div>{product.name}</div>
      )}
    </div>
  );
}