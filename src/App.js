import React, { useState } from "react";
const App = () => {
    const [images, setImage] = useState([]);

    const onChange = (event) => {
        const files = Array.from(event.target.files);

        console.log(files);

        setImage([]);

        files.forEach((file) => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImage((state) => [...state, reader.result]);
                }
            };
            reader.readAsDataURL(file);
        });
    };

    console.log(images);
    return (
        <form encType="multipart/form-data">
            <input onChange={onChange} type="file" accept="images/*" multiple />
            {images.map((item, index) => (
                <img src={item} key={index} />
            ))}
        </form>
    );
};

export default App;
