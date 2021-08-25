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
    const [previewAvatar, setPreviewAvatar] = useState("");

    const onChange = async (event) => {
        try {
            const file = event.target.files[0];
            const image = await resizeFile(file);
            console.log(image);
            setPreviewAvatar(image);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <input onChange={onChange} type="file" accept="images/*" />
            <img src={previewAvatar} />
        </div>
    );
};

export default App;
