import { FaMapMarkedAlt } from "react-icons/fa";
import { FaBuilding, FaRegFolderOpen } from "react-icons/fa6";
import { MdCloudUpload } from "react-icons/md";

const Features = () => {
    return (
        <div className="py-8">
            <div className="container mx-auto flex w-full h-full justify-center lg:justify-between flex-row flex-wrap gap-8">

                <div className="relative bg-white h-full w-[300px] custom-card rounded-lg flex flex-col items-center py-5 px-3 pb-12">
                    <div className="flex flex-col items-center justify-center">
                        <FaRegFolderOpen className="text-orange-500" size={78} />

                        <div><p className="text-2xl text-sky-600 font-bold mt-3">TITLE 01</p></div>

                        <div className="text-center text-neutral-500 leading-5 pt-4">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia necessitatibus at provident quod asperiores ad perspiciatis maiores voluptates eum voluptatum?
                            </p>
                        </div>
                    </div>

                    <div className="absolute -bottom-3">
                        <button className="btn bg-sky-600 text-white">Read More</button>
                    </div>
                </div>

                <div className="relative bg-white h-full w-[300px] custom-card rounded-lg flex flex-col items-center py-5 px-3 pb-12">
                    <div className="flex flex-col items-center justify-center">
                        <FaMapMarkedAlt className="text-orange-500" size={78} />

                        <div><p className="text-2xl text-sky-600 font-bold mt-3">TITLE 02</p></div>

                        <div className="text-center text-neutral-500 leading-5 pt-4">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia necessitatibus at provident quod asperiores ad perspiciatis maiores voluptates eum voluptatum?
                            </p>
                        </div>
                    </div>

                    <div className="absolute -bottom-3">
                        <button className="btn bg-sky-600 text-white">Read More</button>
                    </div>
                </div>

                <div className="relative bg-white h-full w-[300px] custom-card rounded-lg flex flex-col items-center py-5 px-3 pb-12">
                    <div className="flex flex-col items-center justify-center">
                        <MdCloudUpload className="text-orange-500" size={78} />

                        <div><p className="text-2xl text-sky-600 font-bold mt-3">TITLE 03</p></div>

                        <div className="text-center text-neutral-500 leading-5 pt-4">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia necessitatibus at provident quod asperiores ad perspiciatis maiores voluptates eum voluptatum?
                            </p>
                        </div>
                    </div>

                    <div className="absolute -bottom-3">
                        <button className="btn bg-sky-600 text-white">Read More</button>
                    </div>
                </div>

                <div className="relative bg-white h-full w-[300px] custom-card rounded-lg flex flex-col items-center py-5 px-3 pb-12">
                    <div className="flex flex-col items-center justify-center">
                        <FaBuilding className="text-orange-500" size={78} />

                        <div><p className="text-2xl text-sky-600 font-bold mt-3">TITLE 04</p></div>

                        <div className="text-center text-neutral-500 leading-5 pt-4">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia necessitatibus at provident quod asperiores ad perspiciatis maiores voluptates eum voluptatum?
                            </p>
                        </div>
                    </div>

                    <div className="absolute -bottom-3">
                        <button className="btn bg-sky-600 text-white">Read More</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Features;