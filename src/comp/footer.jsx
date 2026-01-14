import cfooter from '../assets/footer/cfooter.png'
import tfooter from '../assets/footer/tfooter.png'
import mfooter from '../assets/footer/mfooter.png'

function footer(){
    return(
        <>
            <footer>
                <picture>
                    <source media='(min-width:1200px)' srcSet={cfooter}/>
                    <source media='(min-width:800px)' srcSet={tfooter}/>
                    <img src={mfooter}/>
                </picture>
            </footer>
        </>
    )
}

export default footer;