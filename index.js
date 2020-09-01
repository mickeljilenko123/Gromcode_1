export const addImage = (imgSrc, callback) => {
    const imgElem = document.createElement("img");
    imgElem.src = imgSrc;
    imgElem.setAttribute("alt", "My Photo");
    const containerElement = document.querySelector(".page");
    containerElement.append(imgElem);
    const onImageLoaded = () => {
        callback(null, imgElem);
    };
    imgElem.addEventListener("load", onImageLoaded);


    imgElem.addEventListener("error", () => callback("Image load is failed..."));


};

// const imgSrc =
//   "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg";

//callack example
const onImageLoaded = (error, imgElem) => {
    if (error) {
        console.log(error);
        return;
    }
    const { width, height } = imgElem;
    const sizeElem = document.querySelector(".image-size");
    sizeElem.textContent = `${width} x ${height}`;
};