import './contato.css';

export default function Contato() {
  return (
    <section className="limitar-secao secao-contato">
      <h4 className="subtitulo-contato">Ficou interessado(a)?</h4>
      <h2 className="titulo-contato">Entre em contato</h2>
      <div className="secao-form">
        <form action="" className="formulario">
          <input type="text" placeholder="Nome" name="name"></input>
          <input type="email" placeholder="Email" name="email"></input>
          <textarea placeholder="Mensagem" name="message" rows={7}></textarea>
          <button type="submit">ENVIAR</button>
        </form>
      </div>
    </section>
  );
}
