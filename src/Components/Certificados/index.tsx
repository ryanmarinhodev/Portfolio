import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import CertificadoCards from './certificadoCards';
import './certificado.css';

import certificadoPP from '../../img/certificado-ryan.png';
import certificadoJs from '../../img/certificado-js.png';

export default function Certificados() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section id="certificados" className="limitar-secao secao-certificados">
      <h2 className="titulo-certificado">Certificados</h2>
      <div className="card-certificado">
        <Slider {...settings}>
          <CertificadoCards img={certificadoPP} />
          <CertificadoCards img={certificadoJs} />
        </Slider>
      </div>
    </section>
  );
}
