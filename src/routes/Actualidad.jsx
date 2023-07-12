import Menu from "../components/Menu";
import google from './images/google.jpg'

export default function Actualidad(){
   return ( 
   <div>
      <Menu />
      <h1 style={{textAlign: "center"}}>Actualidad</h1>
      <img src={google} style={{ display: 'block', margin: '0 auto', width: '450px', height: 'auto'}} alt= "google" />
      <p style={{textAlign: "center"}}>El británico Geoffrey Hinton, uno de los grandes pioneros en el desarrollo de la inteligencia artificial (IA), dejó su trabajo en Google para poder <b>advertir con mayor libertad respecto de los peligros que representan estas nuevas tecnologías,</b> según explicó en una entrevista publicada este lunes por The New York Times.</p>
      <p style={{textAlign: "center"}}>Conocido por muchos como el "padrino" de la IA, Hinton aseguró que, a sus 75 años, lamenta haber dedicado toda su carrera al desarrollo de la IA. "Me consuelo con la excusa normal: si no hubiese sido yo, otro lo habría hecho", señaló. </p>
      <p style={{textAlign: "center"}}>Lejos de tratarse de un episodio aislado, su voz de alarma se suma a las advertencias que en los últimos meses han hecho otros expertos, sobre todo a raíz del lanzamiento y popularización de <b>ChatGPT.</b></p>
      <p style={{textAlign: "center"}}>"Mirá cómo era hace cinco años y cómo es ahora. Tome la diferencia y propáguela hacia adelante. Eso asusta", apuntó Hinton, que el año pasado recibió el Premio Princesa de Asturias de Investigación Científica y Técnica junto a otros tres pioneros de la IA por su trabajo.</p>
      <p style={{textAlign: "center"}}>En tanto, expresó su temor a corto plazo ante la posibilidad de que internet se vea inundada de textos, fotos y videos falsos, y que las personas no puedan ser capaces de distinguir lo que es real de lo que no. También explicó que estas tecnologías pueden reemplazar a muchos trabajadores y, más adelante, suponer incluso una amenaza para la humanidad.</p>
      <p style={{textAlign: "center"}}>"La idea de que estas cosas en realidad podrían volverse más inteligentes que las personas, algunas personas lo creían. Pero la mayoría de la gente pensaba que estaba muy lejos. Yo pensaba que estaba muy lejos. <b>Pensaba que faltaban entre 30 y 50 años o incluso más.</b> Obviamente, ya no pienso eso", agregó.</p>
      <p style={{textAlign: "center"}}>En su opinión, se deberían frenar los trabajos en este ámbito hasta que se entienda bien si será posible controlar la IA, una idea que se alinea con otras advertencias de personalidades del sector tecnológico que han pedido suspender temporalmente los experimentos.</p>
      <a href="https://www.bbc.com/mundo/noticias-65451633" target="_blank">Mas actualidad sobre el</a>
      <p></p>
      <a href="https://elpais.com/tecnologia/2023-05-02/geoffrey-hinton-el-padrino-de-la-ia-deja-google-y-avisa-de-los-peligros-de-esta-tecnologia.html" target="_blank">Mas actualidad todavia</a>


   </div>
   );
}