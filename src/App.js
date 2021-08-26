import React, { useState } from "react";
import Resizer from "react-image-file-resizer";

const resizeFile = (file) =>
    new Promise((resolve) => {
        Resizer.imageFileResizer(
            file,
            300,
            400,
            "JPEG",
            80,
            0,
            (uri) => {
                resolve(uri);
            },
            "base64"
        );
    });

const App = () => {
    // const [previewAvatar, setPreviewAvatar] = useState("");
    const [images, setImage] = useState([]);

    const onChange = (event) => {
        // try {
        //     const file = event.target.files[0];
        //     const image = await resizeFile(file);
        //     console.log(image);
        //     setPreviewAvatar(image);
        // } catch (error) {
        //     console.log(error);
        // }
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
