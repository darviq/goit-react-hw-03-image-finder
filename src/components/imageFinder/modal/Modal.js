import styled from "styled-components";

const Div = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1200;

    .Modal {
        max-width: calc(100vw - 48px);
        max-height: calc(100vh - 24px);
    }
`;

const Modal = ({url, setModalImgUrl}) => {
    const closeImg = e => {
        e.target.nodeName !== "IMG" && setModalImgUrl("");
    };

    return (
        <Div className="Overlay" onClick={closeImg}>
            <div className="Modal">
                <img src={url} alt="" />
            </div>
        </Div>
    );
};

export default Modal;
