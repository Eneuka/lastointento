import Menu from "../components/Menu";
import pandoras from './images/pandoras.jpg'

export default function About(){
   return ( 
   <div>
      <Menu />
      <h1 style={{textAlign: "center"}} >Contribuciones</h1>
      <p style={{textAlign: "center"}}>Geoffrey Hinton cree que con el tiempo <b>todo lo que hace el cerebro humano podrán llegar a aprenderlo las máquinas.</b> ¿Con cuánto tiempo? «Más de cinco años», estima Hinton: más allá «no es buena idea hacer predicciones». El ritmo al que avanzan las tecnologías de la información no es uniforme y Hinton lo sabe porque él mismo ha hecho posible el potente e inesperado acelerón que vive ahora el área, y que <b>promete profundos cambios económicos y sociales.</b></p>
      <p style={{textAlign: "center"}}>Hinton, ganador del <b>Premio Fronteras del Conocimiento en Tecnologías de la Información y la Comunicación</b>, se ha inspirado en la forma en que aprendemos los humanos para abrir la vía a las primeras máquinas capaces de aprender por sí mismas. Se trata de ordenadores con <b>‘deep learning’</b> (aprendizaje profundo), la tecnología detrás de las herramientas de reconocimiento de voz e imagen, de los traductores automáticos o de los vehículos sin conductor. En biomedicina, en seguridad, en cualquier área que necesite extraer información de gran cantidad de datos, hay ya aplicaciones de ‘deep learning’. Y es solo el principio de lo que promete la nueva <b>inteligencia artificial</b> (AI, en sus siglas en inglés). <b>«Las máquinas nos pueden hacer la vida mucho más fácil»</b>, asegura Hinton (Londres, Reino Unido, 1947).</p>
      <p style={{textAlign: "center"}}>Tras graduarse en Psicología Experimental por la <b>Universidad de Cambridge en 1970</b>, se doctoró en Inteligencia Artificial con una tesis sobre redes neuronales leída en la Universidad de Edimburgo en 1978. Ha contado que por entonces, y durante varios años, su mentor le aconsejaba <b>«todas las semanas» que cambiara de campo, a lo que él respondía: «Dame otros seis meses y te demuestro que funcionan».</b> Después de quedarse sin fondos para su trabajo en el Reino Unido, <b>emigró primero a Estados Unidos y después a la Universidad de Toronto, en Canadá.</b> Empeñado en buscar inspiración en el cerebro, creó en 2004 un grupo integrado por expertos en computación, electrónica, neurociencia, física y psicología. Y de ahí nació ‘deep learning’.</p>
      <p style={{textAlign: "center"}}>Contra todo pronóstico, Geoffrey Hinton y sus estudiantes <b>desarrollaron en 2009 una red neuronal para reconocimiento de voz que obtenía mejores resultados que la tecnología disponible en ese momento</b>, fruto de tres décadas de trabajo. En 2012 una sofisticada red compuesta por 650.000 ‘neuronas’, y entrenada con 1,2 millones de imágenes, redujo casi a la mitad la tasa de error en reconocimiento de objetos. Es decir, y volviendo a los gatos: la máquina aprendía a identificarlos sin que nadie tuviera que describírselos previamente.</p>
      <h1 style={{textAlign: "center"}}>¿Cuál es la clave del éxito de la nueva AI?</h1>
      <img src={pandoras} style={{ display: 'block', margin: '0 auto', width: '450px', height: 'auto'}} alt= "pandoras" />
      <p style={{textAlign: "center"}}>En gran medida los algoritmos de Hinton, cuyo fundamento él mismo explica así: <b>«El cerebro humano aprende reforzando las conexiones entre sus miles de millones de neuronas;</b> para que un ordenador aprenda, se puede intentar reproducir ese proceso descubriendo un mecanismo que refuerce las conexiones entre neuronas artificiales».</p>
      <p style={{textAlign: "center"}}>Los algoritmos de Hinton se inspiran en el proceso biológico del aprendizaje y lo convierten en matemáticas. Y aquí entra en juego el entrenamiento de la máquina: <b>si una imagen de prueba es reconocida, las conexiones de la red neuronal que han llevado a esa respuesta correcta aumentan de valor —se ‘refuerzan’—.</b> La máquina ‘aprende’ cuando, tras mucho entrenamiento, se eliminan o reducen las conexiones de menos valor. El proceso descansa en el método matemático ‘backpropagation’ creado por Hinton, que permite informar eficazmente a la red de sus errores o aciertos y ajustar el valor de sus conexiones en consecuencia.</p>
      <p style={{textAlign: "center"}}>‘Deep learning’ es, en esencia, «un nuevo tipo de inteligencia artificial» en que <b>«logras que la máquina aprenda de su propia experiencia»</b>, explica Hinton. Es además una técnica que aprovecha al máximo otros dos grandes avances en computación: el aumento de la capacidad de cálculo y el aluvión de datos ya disponibles en multitud de áreas. Para muchos, el auge paralelo del ‘deep learning’ y el ‘big data’ es un caso claro de co-evolución computacional.</p>
      <p></p>
      <a href="https://www.oracle.com/ar/artificial-intelligence/what-is-ai/" target="_blank">Informacion sobre las IA</a>
      <p></p>
      <a href="https://www.xataka.com/robotica-e-ia/deep-learning-que-es-y-por-que-va-a-ser-una-tecnologia-clave-en-el-futuro-de-la-inteligencia-artificial" target="_blank">DeepLearning</a>
      <p></p>

 
   </div>
   );
}