import image from "../constrant/image";




function Carousel() {
    return (
        <div className=" pt-8 pb-5 w-full flex flex-col items-center justify-center bg-white max-h-[540px]">
            <div className="carousel container w-full rounded-lg">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={image.first}
                        alt="carousel picture"
                        className="w-full object-cover" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-square text-2xl text-black border-1 border-black/30 hover:text-white bg-white/60 hover:bg-orange-500">❮</a>
                        <a href="#slide2" className="btn btn-square text-2xl text-black border-1 border-black/30 hover:text-white bg-white/60 hover:bg-orange-500">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={image.second}
                        alt="carousel picture"
                        className="w-full object-cover" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-square text-2xl text-black border-1 border-black/30 hover:text-white bg-white/60 hover:bg-orange-500">❮</a>
                        <a href="#slide3" className="btn btn-square text-2xl text-black border-1 border-black/30 hover:text-white bg-white/60 hover:bg-orange-500">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={image.third}
                        alt="carousel picture"
                        className="w-full object-cover" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-square text-2xl text-black border-1 border-black/30 hover:text-white bg-white/60 hover:bg-orange-500">❮</a>
                        <a href="#slide4" className="btn btn-square text-2xl text-black border-1 border-black/30 hover:text-white bg-white/60 hover:bg-orange-500">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src={image.fourth}
                        alt="carousel picture"
                        className="w-full object-cover" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-square text-2xl text-black border-1 border-black/30 hover:text-white bg-white/60 hover:bg-orange-500">❮</a>
                        <a href="#slide1" className="btn btn-square text-2xl text-black border-1 border-black/30 hover:text-white bg-white/60 hover:bg-orange-500">❯</a>
                    </div>
                </div>
            </div>

            <div className="flex w-full justify-center gap-2 pt-2">
                <a href="#slide1" className="btn btn-xs">1</a>
                <a href="#slide2" className="btn btn-xs">2</a>
                <a href="#slide3" className="btn btn-xs">3</a>
                <a href="#slide4" className="btn btn-xs">4</a>
            </div>

        </div>
    );
}

export default Carousel;