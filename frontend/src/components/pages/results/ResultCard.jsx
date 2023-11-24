import dbaDemo from '../../../../src/assets/dba-demo.png'

function ResultCard (){
  return(
    <section className="r-card">
        <h2>A 1.3.3</h2>
        <div className="container-cards">  
          <div className="card"> 
            <h2>Result card</h2> 
              <div className="resource-card">
                <img src={dbaDemo}/> 
              </div>
              <p>Comprende y utiliza palabras familiares
                y frases cortas sobre rutinas, actividades
                  cotidianas y gustos.
              </p>
          </div>

          <div className="card"> 
            <h2>Result</h2> 
              <div className="resource-card">
                <img src={dbaDemo}/> 
              </div>
              <p>Comprende y utiliza palabras familiares
                y frases cortas sobre rutinas, actividades
                  cotidianas y gustos.
              </p>
          </div>
          <div className="card"> 
            <h2>Result</h2> 
              
              <p>https://www.youtube.com/watch?v=QWmteg9guoo&list=RDQWmteg9guoo&start_radio=1
              </p>
          </div>

          <div className="card"> 
            <h2>Result</h2> 
              <div className="resource-card">
                <img src={dbaDemo}/> 
              </div>
              <p>Comprende y utiliza palabras familiares
                y frases cortas sobre rutinas, actividades
                  cotidianas y gustos.
              </p>
          </div>
        </div>
    </section>
  );
}
export default ResultCard