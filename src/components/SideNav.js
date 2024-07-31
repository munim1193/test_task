import React from 'react'
import './sidenav.css'
import Chatimg from '../assets/Chat UI.png'
import logoside from '../assets/logoside.png'
import elevator1 from '../assets/elevator 1.png'
import ellipse from '../assets/Ellipse 77.png'
import image from '../assets/image.png'
import vector from '../assets/Vector.png'
import one from '../assets/11.png'
import four from '../assets/44.png'
import five from '../assets/55.png'
import six from '../assets/66.png'


const SideNav = () => {
    return (
        <div className='sidenav'>
            <div className='chatui'>
                <img src={Chatimg} alt='Chatimg' />
                <div className='chattext'>NACHTMODUS</div>
            </div>

            <div className='logoside'>
                <img src={logoside} alt='logoside' />
            </div>

            <div className='snitems'>
                <button className='snitem'>
                    <div className='snlogo'>
                        <img src={one} alt='elevator1'/>
                    </div>
                    <div className='snitext'>
                        <div className='snitext1'>Immobilienlexikon</div>
                        <div className='snitext2'>Immobilienwissen für alle Fälle.</div>
                    </div>
                    <div className='snilink'>LINK</div>
                </button>

                <button className='snitem'>
                    <div className='snlogo'>
                        <img src={elevator1} alt='elevator1'/>
                    </div>
                    <div className='snitext'>
                        <div className='snitext1'>Preisschätzung</div>
                        <div className='snitext2'>Den Wert Ihres Hauses schätzen lassen.</div>
                    </div>
                    <div className='snilink'>LINK</div>
                </button>

                <button className='snitem'>
                    <div className='snlogo'>
                        <img src={one} alt='elevator1'/>
                    </div>
                    <div className='snitext'>
                        <div className='snitext1'>Checklisten</div>
                        <div className='snitext2'>Praktische Checklisten für jeden Schritt.</div>
                    </div>
                    <div className='snilink'>LINK</div>
                </button>

                <button className='snitem'>
                    <div className='snlogo'>
                        <img src={four} alt='elevator1'/>
                    </div>
                    <div className='snitext'>
                        <div className='snitext1'>Ratgeber</div>
                        <div className='snitext2'>Immobilien-Expertenrat für Eigentümer.</div>
                    </div>
                    <div className='snilink'>LINK</div>
                </button>

                <button className='snitem'>
                    <div className='snlogo'>
                        <img src={five} alt='elevator1'/>
                    </div>
                    <div className='snitext'>
                        <div className='snitext1'>Mandatsnavigator</div>
                        <div className='snitext2'>Verständlich zum Verkaufsabschluss.</div>
                    </div>
                    <div className='snilink'>LINK</div>
                </button>

                <button className='snitem'>
                    <div className='snlogo'>
                        <img src={six} alt='elevator1'/>
                    </div>
                    <div className='snitext'>
                        <div className='snitext1'>Wohntraumfinder</div>
                        <div className='snitext2'>Zum Traumheim mit KI-Unterstützung.</div>
                    </div>
                    <div className='snilink'>LINK</div>
                </button>
            </div>
            <div className='profile'>
                <div className='profile1'>
                    <div className='pimg'><img src={ellipse} alt='ellipse'/></div>
                    <div className='ptext1'>Immotrust AG </div>
                    <div className='ptext2'>Vertrauensvolle Immobilienberatung seit 2008.</div>
                    <button className='pbutton'>Carlos Kuk - Eigentümer</button>
                </div>
                <div className='profile2'>
                        <img src={image} alt='img'/>
                        <div className='protext'>Bewertungen</div>
                        <img src={vector} alt='img' className='vectorimg'/>
                        <img src={vector} alt='img' className='vectorimg'/>
                        <img src={vector} alt='img' className='vectorimg'/>
                        <img src={vector} alt='img' className='vectorimg'/>
                        <img src={vector} alt='img' className='vectorimg'/>
                        
                </div>
            </div>
            <div className='ftext'>4,6 VON 5 BASIEREND AUF 245 BEWERTUNGEN</div>
        </div>
    )
}

export default SideNav