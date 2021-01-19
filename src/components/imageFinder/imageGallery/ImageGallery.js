import styled from "styled-components";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";

const Ul = styled.ul`
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 16px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
`;

const ImageGallery = ({images, setModalImgUrl}) => {
    return (
        <Ul className="ImageGallery">
            {images.map(image => (
                <ImageGalleryItem key={image.id} image={image} setModalImgUrl={setModalImgUrl} />
            ))}
        </Ul>
    );
};

export default ImageGallery;
