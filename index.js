export const addImage = (imgSrc) => {
    const p = new Promise((resolve, reject) => {
        const imgElem = document.createElement("img");
        imgElem.src = imgSrc;
        imgElem.setAttribute("alt", "My Photo");
        const containerElement = document.querySelector(".page");
        containerElement.append(imgElem);
        const onImageLoaded = () => {
            const { width, height } = imgElem;
            resolve({ width, height });
        };
        imgElem.addEventListener("load", onImageLoaded);

        imgElem.addEventListener("error", () =>
            reject(new Error("Image load is failed..."))
        );
    });
    return p;
};

const imgSrc =
    "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg";

const resultPromise = addImage(imgSrc);
resultPromise.then((data) => onImageLoaded(data));
const onImageLoaded = (data) => {
    const { width, height } = data;
    const sizeElem = document.querySelector(".image-size");
    sizeElem.textContent = `${width} x ${height}`;
};
resultPromise.catch((error) => console.log(error));