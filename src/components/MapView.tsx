const MapView = () => {
    return (
        <div
            className='w-full bg-white py-5'
        >
            <div className='container mx-auto flex justify-center'>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747160.160994512!2d87.70373207386484!3d23.48440078186342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1732171359309!5m2!1sen!2sbd" width="100%" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>

        </div>
    );
};

export default MapView;