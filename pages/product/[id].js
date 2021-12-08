import { useRouter } from "next/router";

export default function ProductItem() {
  const { query: { id } } = useRouter();

  return (
    <div>Product {id}</div>
  );
}