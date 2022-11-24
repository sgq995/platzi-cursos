import Navbar from "./partials/Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}