import '../styles/Banner.css'
//import logo from '../assets/logo.png';
//  import Recommendation from './Recommendation'

//function Banner() {
    //const title ="La maison jungle"
    // const currentMonth = new Date().getMonth()
    // const isSpring = currentMonth >= 2 && currentMonth <= 5
    // const recommendation = isSpring ? (
    //     <div>C'est le printemps, rempotez 🌱</div>
    // ) : (
    //     <div>Ce n'est pas le moment de rempoter</div>
    // )
   
	//return (
    //<div className='lmj-banner'>
      //  {/* <div className="lmj-banner-row"> */}
    //     <img src={logo} alt="la maison jungle" className="lmj-logo"/>
    // <h1 className="lmj-title">{title}</h1>
    // </div>
    // <Recommendation/>
    //{/* {recommendation} */}
    // </div>
   // )
//}

function Banner({children}) {
    return <div className='lmj-banner'>{children}</div>
}
export default Banner