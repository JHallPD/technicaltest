import { FaPlay } from "react-icons/fa";
import image from './testImage.svg'
interface galleryItem {
    title: string,
    image: string
}

// simple function component to render each video/game item in the gallery
function GalleryBox(data: Array<galleryItem>) {
    let items: JSX.Element[] = []
    for(let i in data){
        items.push(
            <div className={'galleryItem'} key={i} style={{backgroundImage: `url(${image})`,backgroundRepeat: 'no-repeat',
                backgroundSize: '100%'}}>
                <div className={'itemHover'}>
                    <h5 className={'itemTitle'}>{data[i].title}</h5>
                    <div className={'itemLine'}></div>
                    <FaPlay className={'playIcon'}/>
                </div>
            </div>
        )
    }
    return (
        <div className="galleryBox">
            {items}
        </div>
    );
}

export default GalleryBox;
