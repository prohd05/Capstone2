import Navbar from '../comp/navbar.jsx'
import styles from '../styles/gallery.module.css'
import Work from '../comp/work.jsx'
import Services from '../comp/services.jsx'

import g1 from '../assets/gallery/g1.png'
import g2 from '../assets/gallery/g2.png'
import g3 from '../assets/gallery/g3.png'
import g4 from '../assets/gallery/g4.png'
import g5 from '../assets/gallery/g5.png'
import g6 from '../assets/gallery/g6.png'
import g7 from '../assets/gallery/g7.png'
import g8 from '../assets/gallery/g8.png'
import g9 from '../assets/gallery/g9.png'


function gallery(){
    return(
        <>
            <div className={styles.header}>
                <h1 className="heading1"> Gallery Page </h1>
            </div>

            <div> 
                <div className={styles.container}>
                    <div className={styles.sidebar}> 
                    <p className='caption1'> SEASONAL ARRANGEMENTS </p>
                    </div>

                    <div className={styles.gallery}>
                        <div className={styles.image1}> 
                            <p className='caption2'> Dawn Bloom 
                            <span className='heading4'> $55/Bunch </span> </p>
                            <img src={g1} alt="gallery image"/>
                        </div>

                        <div className={styles.image2}> 
                            <p className='caption2'> Solstice Stems 
                            <span className='heading4'> $30/Bunch </span> </p>
                            <img src={g2} alt="gallery image"/>
                        </div>

                        <div className={styles.image3}> 
                            <p className='caption2'> Whisper Greens 
                            <span className='heading4'> $120/Bunch </span> </p>
                            <img src={g3} alt="gallery image"/>
                        </div>

                        <div className={styles.image4}> 
                            <p className='caption2'> Clarity PetalS 
                            <span className='heading4'> $55/Bunch </span> </p>
                            <img src={g4} alt="gallery image"/>
                        </div>

                        <div className={styles.image5}> 
                            <p className='caption2'> River Stone 
                            <span className='heading4'> $30/Bunch </span> </p>
                            <img src={g5} alt="gallery image"/>
                        </div>

                        <div className={styles.image6}> 
                            <p className='caption2'> Moonlit Meadow 
                            <span className='heading4'> $120/Bunch </span> </p>
                            <img src={g6} alt="gallery image"/>
                        </div>

                        <div className={styles.image7}> 
                            <p className='caption2'> Ember Leaf 
                            <span className='heading4'> $55/Bunch </span> </p>
                            <img src={g7} alt="gallery image"/>
                        </div>

                        <div className={styles.image8}> 
                            <p className='caption2'> Skyline Bloom 
                            <span className='heading4'> $75/Bunch </span> </p>
                            <img src={g8} alt="gallery image"/>
                        </div>

                        <div className={styles.image9}> 
                            <p className='caption2'> Still Waters 
                            <span className='heading4'> $250/Bunch </span> </p>
                            <img src={g9} alt="gallery image"/>
                        </div>
                    </div>
                </div>
            </div>

            <Services/>

            <Work/>
        </>
    )
}
export default gallery