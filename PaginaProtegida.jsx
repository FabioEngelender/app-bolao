import Menu from "./Menu";

export default function PaginaProtegida({ children }) {
  return (
    <div>
      {/* Menu em todas as páginas protegidas */}
      <Menu />

      {/* Conteúdo da página */}
      <div>{children}</div>
    </div>
  );
}
