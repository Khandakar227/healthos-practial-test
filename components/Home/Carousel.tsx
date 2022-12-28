import { Carousel } from 'react-responsive-carousel'

const carouselItem= [
    {img: "/assets/carousel-img-1.png"},
    {img: "/assets/carousel-img-2.png"},
    {img: "/assets/carousel-img-3.png"},
]

function HomeCarousel() {
  return (
    <Carousel showArrows={true} showThumbs={false} showStatus={false}>
        {
            carouselItem.map((item, i) => (
                <div key={`carousel image  ${i}`}>
                    <img src={item.img} alt={`carousel image ${i+1}`} />
                </div>
            ))
        }
    </Carousel>
  )
}

export default HomeCarousel
