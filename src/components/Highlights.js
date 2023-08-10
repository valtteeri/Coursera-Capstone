import lemondessert from '../images/lemondessert.jpg'
import bruchetta from '../images/bruchetta.jpg'
import greeksalad from '../images/greeksalad.jpg'


function Highlights(){
    return(
        <>
            <div className="highlight">
                    <h1>This weeks specials!</h1>
                    <button>Online menu</button>
            </div>
            <div className="highlight">
                <section>
                    <img src={greeksalad} alt="logo" />
                    <h4>Greek salad</h4>
                    <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with cruncy garlic and rosemary croutons.</p>
                    <p>Order a delivery</p>
                </section>
                <section>
                    <img src={bruchetta} alt="logo" />
                    <h4>Bruchetta</h4>
                    <p>Our Bruschetta is made from griddel gread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                    <p>Order a delivery</p>
                </section>
                <section>
                    <img src={lemondessert} alt="logo" />
                    <h4>Lemon Dessert</h4>
                    <p>This comes straight form grandma's recipe book, every lasxt ingredient has been sourced and is as authentic as can be imagined.</p>
                    <p>Order a delivery</p>
                </section>
            </div>
        </>
    )
}

export default Highlights;