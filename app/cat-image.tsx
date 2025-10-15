"use client";

import { useState } from "react";
import { fetchImage } from "./fetch-image";
import Styles from "./page.module.css";

type CatImageProps = {
    url: string;
};

export function CatImage({ url }: CatImageProps) {
    const [imageUrl, setImageUrl] = useState(url);

    const refreshImage = async () => {
        setImageUrl(""); // 画像を一旦クリアしてローディング状態を表現
        const image = await fetchImage();
        setImageUrl(image.url);
    }

    return (
        <div className={Styles.page}>
            <button onClick={refreshImage} className={Styles.button}>
                One more cat!
            </button>
            <div className={Styles.frame}>
                {imageUrl && <img src={imageUrl} className={Styles.img} />}
            </div>
        </div>
    );
}