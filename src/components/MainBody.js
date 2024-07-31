import React from 'react'
import './mainbody.css'
import three from '../assets/3.png'
import frame from '../assets/frame.png'
import fitem from '../assets/fitem.png'
import ffitem from '../assets/ffitem.png'
import fffitem from '../assets/fffitem.png'
import heartborder from '../assets/heartborder.png'
import Frame1 from '../assets/Frame 1.png'


const MainBody = () => {
  return (
    <div className='mainbody'>
      <div className='topcontent'>
        <div className='tc1'>
          <div className='tc11'>Beginnen Sie Ihre Verkaufsreise 👋 </div>
          <div className='tc12'>Entdecken Sie mühelos jede Facette Ihres Verkaufsmandatsvertrags.</div>
        </div>
        <button className='tc2'>
          <img src={three} alt='three' />
        </button>
      </div>
      <div className='maininfocard'>

        <div className='infocard'>
          <div className='info1'>
            <img src={frame} alt='frame' />
          </div>
          <div className='info2'>
            <div className='intext1'>Die Immobilies in der Scheidung</div>
            <div className='intext2'> RATGEBER SCHIEDUNG,EHERECHT</div>
            <div className='intext3'>Eine Erbimmobille kann die familiäre und wirtschaftliche Situation verändern. In dieser Ratgeber verraten wir Ihnen, wie Sie sich im Urwald von Handlungsmöglichkeiten zurecht finden und teilen mit Ihnen den aktuellen Wissensstand. Auch der Immobilienwert spielt eine wichtige Rolle. Sollten Sie den Wert noch nicht ermittelt haben, können Sie diesen mit unserer Marktwertanalyse schnell und unverbindlich online berechnen lassen.</div>
            <div className='intext4'>
              <div className='int4'>
                <div className='int41'>
                  <div className='int411'>Seitenanzahl</div>
                  <div className='int412'>
                    <img src={fitem} alt='fitem' />
                    <div>52 Seiten</div>
                  </div>
                </div>
                <div className='int41'>
                  <div className='int411'>Leteztes</div>
                  <div className='int412'>
                    <img src={ffitem} alt='fitem' />
                    <div>18.06.2024</div>
                  </div>
                </div>
                <div className='int41'>
                  <div className='int411'>Dateiformat</div>
                  <div className='int412'>
                    <img src={fffitem} alt='fitem' />
                    <div>PDF</div>
                  </div>
                </div>
              </div>
              <div className='int44'>
                <button className='intbut1'>Download anfordern</button>
                <button className='intbut2'><img src={heartborder} alt='heartborder' /></button>
              </div>
            </div>
          </div>
        </div>
        <div className='infocard'>
          <div className='info1'>
            <img src={frame} alt='frame' />
          </div>
          <div className='info2'>
            <div className='intext1'>Die Immobilies in der Scheidung</div>
            <div className='intext2'> RATGEBER SCHIEDUNG,EHERECHT</div>
            <div className='intext3'>Eine Erbimmobille kann die familiäre und wirtschaftliche Situation verändern. In dieser Ratgeber verraten wir Ihnen, wie Sie sich im Urwald von Handlungsmöglichkeiten zurecht finden und teilen mit Ihnen den aktuellen Wissensstand. Auch der Immobilienwert spielt eine wichtige Rolle. Sollten Sie den Wert noch nicht ermittelt haben, können Sie diesen mit unserer Marktwertanalyse schnell und unverbindlich online berechnen lassen.</div>
            <div className='intext4'>
              <div className='int4'>
                <div className='int41'>
                  <div className='int411'>Seitenanzahl</div>
                  <div className='int412'>
                    <img src={fitem} alt='fitem' />
                    <div>52 Seiten</div>
                  </div>
                </div>
                <div className='int41'>
                  <div className='int411'>Leteztes</div>
                  <div className='int412'>
                    <img src={ffitem} alt='fitem' />
                    <div>18.06.2024</div>
                  </div>
                </div>
                <div className='int41'>
                  <div className='int411'>Dateiformat</div>
                  <div className='int412'>
                    <img src={fffitem} alt='fitem' />
                    <div>PDF</div>
                  </div>
                </div>
              </div>
              <div className='int44'>
                <button className='intbut1'>Download anfordern</button>
                <button className='intbut2'><img src={heartborder} alt='heartborder' /></button>
              </div>
            </div>
          </div>
        </div>

        <div className='infocard'>
          <div className='info1'>
            <img src={frame} alt='frame' />
          </div>
          <div className='info2'>
            <div className='intext1'>Die Immobilies in der Scheidung</div>
            <div className='intext2'> RATGEBER SCHIEDUNG,EHERECHT</div>
            <div className='intext3'>Eine Erbimmobille kann die familiäre und wirtschaftliche Situation verändern. In dieser Ratgeber verraten wir Ihnen, wie Sie sich im Urwald von Handlungsmöglichkeiten zurecht finden und teilen mit Ihnen den aktuellen Wissensstand. Auch der Immobilienwert spielt eine wichtige Rolle. Sollten Sie den Wert noch nicht ermittelt haben, können Sie diesen mit unserer Marktwertanalyse schnell und unverbindlich online berechnen lassen.</div>
            <div className='intext4'>
              <div className='int4'>
                <div className='int41'>
                  <div className='int411'>Seitenanzahl</div>
                  <div className='int412'>
                    <img src={fitem} alt='fitem' />
                    <div>52 Seiten</div>
                  </div>
                </div>
                <div className='int41'>
                  <div className='int411'>Leteztes</div>
                  <div className='int412'>
                    <img src={ffitem} alt='fitem' />
                    <div>18.06.2024</div>
                  </div>
                </div>
                <div className='int41'>
                  <div className='int411'>Dateiformat</div>
                  <div className='int412'>
                    <img src={fffitem} alt='fitem' />
                    <div>PDF</div>
                  </div>
                </div>
              </div>
              <div className='int44'>
                <button className='intbut1'>Download anfordern</button>
                <button className='intbut2'><img src={heartborder} alt='heartborder' /></button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className='atlast'>
        <img src={Frame1} alt='Frame1' />
      </div>


    </div>
  )
}

export default MainBody