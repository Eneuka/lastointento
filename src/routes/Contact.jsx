import Menu from "../components/Menu";
import turing from './images/turing.jpg'
import winners from './images/winners.png'

export default function Contact(){
   return ( 
   <div>
      <Menu />
      <h1 style={{textAlign: "center"}}>Honores y premios</h1>
      <img src={winners} style={{ display: 'block', margin: '0 auto', width: '450px', height: 'auto'}} alt= "winners" />
      <p style={{textAlign: "center"}}>Hinton fue elegido miembro de la Royal Society (FRS) en 1998. Él fue el primer ganador de la <b>David E. Rumelhart Premio en 2001.</b></p>
      <p style={{textAlign: "center"}}>En 2001, Hinton fue galardonado con un <b>Doctorado Honoris causa de la Universidad de Edimburgo</b>. En 2005 recibió el <b>Premio IJCAI de Investigación de Excelencia</b> por su trayectoria. También fue galardonado con el  Herzberg Canadá Medalla de Oro para la Ciencia y la Ingeniería en 2011.​ En 2013, Hinton fue galardonado con un Doctorado Honoris causa de la Universidad de Sherbrooke.</p>
      <p style={{textAlign: "center"}}>En 2016, fue elegido miembro extranjero de la Academia Nacional de Ingeniería "Por sus contribuciones a la teoría y la práctica de las redes neuronales artificiales y sus aplicaciones para el reconocimiento de voz y visión por computador".1 también recibió el IEEE/RSE Wolfson James Clerk Maxwell Premio en 2016.</p>
      <p style={{textAlign: "center"}}>Ha ganado los premios Fundación BBVA Fronteras del Conocimiento de Adjudicación (2016) en la Información y la Comunicación las Tecnologías de la categoría "por su pionera y muy influyente trabajo" para dotar a las máquinas con la capacidad para aprender.</p>
      <p style={{textAlign: "center"}}>Junto a Yann LeCun, y Yoshua Bengio, Hinton fue galardonado con el <b>Premio Turing en 2018</b> por avances conceptuales y de ingeniería que han hecho de las redes neuronales profundas un componente crítico de la computación.</p>
      <h1 style={{textAlign: "center"}}>Premio Turing</h1>
      <img src={turing} style={{ display: 'block', margin: '0 auto', width: '450px', height: 'auto'}} alt= "turing" />
      <p style={{textAlign: "center"}}>Yoshua Bengio, Geoffrey Hinton y Yann LeCun, tres pioneros cuyas investigaciones sentaron las bases de la Inteligencia Artificial moderna han sido reconocidos con el Premio Turing 2018, el «Nobel de la computación» que entrega anualmente la asociación ACM</p>
      <p style={{textAlign: "center"}}>«La inteligencia artificial es ahora una de las <b>áreas de más rápido crecimiento en toda la ciencia moderna</b> y uno de los temas más comentados en la sociedad. El crecimiento y el interés en la IA se deben, en gran parte, a los recientes avances en aprendizaje profundo cuyas bases sentaron los premiados. Estas tecnologías son utilizadas por miles de millones de personas», explicó en el anuncio Cherri Pancake, presidente de la ACM.</p>
      <p style={{textAlign: "center"}}>Los logros del trío son particularmente notables, comenzando por la misma fe que mantuvieron en la importancia de la Inteligencia Artificial en un momento en que las perspectivas para este tipo de tecnologías eran sombrías. <b>La IA es bien conocida por sus ciclos de auge y caída</b>, y el tema de las exageraciones es tan antiguo como el propio campo. Cuando la investigación no cumple con las expectativas infladas, se congela la financiación y cae el interés a lo que se conoció como «invierno de IA».</p>
      <p style={{textAlign: "center"}}>Fue en uno de esos inviernos a finales de los años 80 cuando Bengio, Hinton y LeCun comenzaron a intercambiar ideas y a trabajar en problemas relacionados, especialmente en redes neuronales, programas informáticos creados a partir de neuronas digitales conectadas que se han convertido en un bloque de construcción clave para la IA moderna.</p>
      <a href="https://www.muycomputerpro.com/2019/03/28/premio-turing-2018" target="_blank">Premio Turing</a>
      <p></p>
      <a href="https://es.wikipedia.org/wiki/Yoshua_Bengio" target="_blank">Yoshua Bengio</a>
      <p></p>
      <a href="https://es.wikipedia.org/wiki/Yann_LeCun" target="_blank">Yann LeCun</a>


  </div>

   );
}