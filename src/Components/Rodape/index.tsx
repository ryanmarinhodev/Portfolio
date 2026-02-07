import './rodape.css';

export default function Rodape() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <p>&copy; Ryan Marinho - {year}. Todos os direitos reservados</p>
    </footer>
  );
}
