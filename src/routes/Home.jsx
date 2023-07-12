import Menu from "../components/Menu";
import kingscollege from './images/kingscollege.jpg'

export default function Home(){
   return ( 
   <div>
      <Menu />
      <h1 style={{textAlign: "center"}}>Geoffrey Hinton</h1>
      <p style={{textAlign: "center"}} >Geoffrey Hinton (Wimdledon, Reino Unido, 6 de diciembre de 1947) es un informático británico. Hinton fue galardonado con el <b>Premio Turing en 2018 junto con Yoshua Bengio y Yann LeCun</b> por su trabajo en aprendizaje profundo. Conocido como el "padrino" de la inteligencia artificial, decidió renunciar a Google a los 75 años por los peligros que reconoce en las nuevas tecnologías.​</p>
      <h1 style={{textAlign: "center"}}>Educación</h1>
      <img src={kingscollege} style={{ display: 'block', margin: '0 auto', width: '600px', height: 'auto'}} alt= "kingscollege" />
      <p style={{textAlign: "center"}}>Hinton fue educado en la universidad de <b>King's College</b>, Cambridge y se graduó en 1970, con un Licenciado en artes en psicología experimental. Continuó sus estudios en la Universidad de Edimburgo, <b>donde le fue otorgado un PhD en inteligencia artificial en 1977 por su investigación</b> supervisado por Christopher Longuet-Higgins.3</p>
      <h1 style={{textAlign: "center"}}>Vida personal</h1>
      <p style={{textAlign: "center"}}>Hinton es el tatara-tatara-nieto de ambos, el lógico <b>George Boole</b>, cuya obra se convirtió en uno de los fundamentos de la moderna ciencia de la computación, y de médico cirujano y autor <b>James Hinton</b>. Su padre es Howard Hinton. Su segundo nombre viene de otro pariente, George Everest.​ Él es el sobrino del economista de Colin Clark. Perdió a su primera esposa por cáncer de ovario en 1994.</p>
      <p style={{textAlign: "center"}}>Hinton <b>se movió de los EE.UU. a Canadá en parte debido a desilusión con la política de la era de Reagan y desaprobación del financiamiento militar de la inteligencia artificial</b>. Cree que los sistemas políticos utilizarán la IA para "aterrorizar a la población". Hinton ha peticionado en contra de las armas autónomas letales. Con respecto al riesgo existencial de inteligencia artificial, Hinton ha declarado que la superinteligencia parece estar a más de 50 años en el futuro, pero advierte que "no hay una buena trayectoria de cosas menos inteligentes controlando cosas de mayor inteligencia". Cuando fue preguntado en 2015 por qué continúa con la investigación a pesar de sus preocupaciones graves, Hinton declaró <b>"te podría dar los argumentos habituales. Pero la verdad es que la perspectiva de descubrir es demasiado dulce."</b> Hinton ha declarado también que "es muy duro de pronosticar más allá de unos cinco años" lo que los avances la IA traerán.</p>
      <a href="https://www.premiosfronterasdelconocimiento.es/galardonados/geoffrey-hinton/" target="_blank">Biografia completa</a>
      <p></p>
      <a href="https://es.wikidat.com/info/geoffrey-hinton" target="_blank">Mas infromacion</a>
      <p></p>

  
   </div>
   );
}