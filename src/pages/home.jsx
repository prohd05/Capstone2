import Footer from '../comp/footer.jsx'
import Hero from '../comp/hero.jsx'
import Work from '../comp/work.jsx'

import c1 from '../assets/Carousel/c1.png'
import c2 from '../assets/Carousel/c2.png'
import c3 from '../assets/Carousel/c3.png'
import c4 from '../assets/Carousel/c4.png'
import c5 from '../assets/Carousel/c5.png'

import sec1 from '../assets/section_img/sec1.png'
import sec2 from '../assets/section_img/sec2.png'
import sec3 from '../assets/section_img/sec3.png'

import mid1 from '../assets/mid_sec/mid1.png'
import mid2 from '../assets/mid_sec/mid2.png'
import mid3 from '../assets/mid_sec/mid3.png'

function home(){
    return(
        <>
            <Hero/>
            <div>
                <div className='who_we_Are'> 
                    <p className='caption1'> WHO WE ARE </p>
                    <p className='heading2'> We're Our Blooms® and we're here to help you find your floral story. </p>
                    <button className='danger_button'> About US</button>
                </div>

                <div className='Carousel'> 
                    <img src={c1} alt="Carousel Image"/>
                    <img src={c2} alt="Carousel Image"/>
                    <img src={c3} alt="Carousel Image"/>
                    <img src={c4} alt="Carousel Image"/>
                    <img src={c5} alt="Carousel Image"/>
                </div>

                <div className='what_we_do'>
                    <p className='heading1'> WHAT WE DO </p> 
                    <p className='paragraph1'> We bring a touch of that simple magic into your world. </p>
                </div>
                <hr/>
                <div className='section1'>
                    <p className='heading1'> 1 </p>
                    <img src={sec1} alt="section image"/>
                    <p className='heading1'> FLORAL INSTALLATIONS </p>
                    <p className='paragraph1'> Living art for homes, businesses, and events. </p>
                    <hr/>
                </div>
                
                <div className='section1'>
                    <p className='heading1'> 2 </p>
                    <img src={sec2} alt="section image"/>
                    <p className='heading1'> NATIVE PLANT ARRANGEMENTS </p>
                    <p className='paragraph1'> Whether it’s a private retreat or a public space, we craft floral experiences that bloom beyond expectations. </p>
                    <hr/> 
                </div> 
                
                <div className='section1'>
                    <p className='heading1'> 3 </p>
                    <img src={sec3} alt="section image"/>
                    <p className='heading1'> CUSTOM FLORAL CONCEPTS </p>
                    <p className='paragraph1'> Your vision, our blooms. We build arrangements that are both personal and exquisitely simple. Whether it’s a private retreat or a public space, we craft floral experiences that bloom beyond expectations. </p>
                    <hr/>
                </div>
                
                <picture> 
                    <source media='(min-width:1200px)' srcSet={mid1}/>
                    <source media='(min-width:800px)' srcSet={mid2}/>
                    <img src={mid3}/>
                </picture>
                <Work/>
            </div>
        </>
    )
}

export default home