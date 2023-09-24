import FingOfGod from '../assets/images/Finger_of_God.jpeg';

export default function BackImg() {

return(
<div className="back-image-container">
    <section className="back-image" style={{backgroundImage: `url(${FingOfGod})`,
             backgroundRepeat:"no-repeat",
       }}>
       <div>
         <h2 className="back-image-caption1">The greatest glory in living lies not in never falling, but in
                rising every time we fall.</h2>
         <h2 className="back-image-caption2"> -Nelson Mandela</h2>
       </div>
    </section>
</div>
);
}