import L1 from '../assets/Logo/L1.png'
import L2 from '../assets/Logo/L2.png'
import L3 from '../assets/Logo/L3.png'

import cflower from '../assets/Hero/cflower.png'
import tflower from '../assets/Hero/tflower.png'
import mflower from '../assets/Hero/mflower.png'

function Hero(){
    return(
        <>
        <picture>
            <source media="(min-width: 1200px)" srcSet={L1} />
            <source media="(min-width: 800px)" srcSet={L2} />
            <img src={L3} alt="Ourblooms Logo" />
        </picture>

        <picture>
            <source media="(min-width: 1200px)" srcSet={cflower} />
            <source media="(min-width: 800px)" srcSet={tflower} />
            <img src={mflower} alt="Our blooms Logo" />
        </picture>
        </>
    )
}
export default Hero;