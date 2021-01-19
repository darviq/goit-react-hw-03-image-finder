import React, {useState} from "react";
import styled from "styled-components";

import findPictures from "../api/api";

import Searchbar from "./searchbar/Searchbar";
import ImageGallery from "./imageGallery/ImageGallery";
import LoaderDots from "./loaderDots/LoaderDots";
import Button from "./button/Button";
import Modal from "./modal/Modal";

const Div = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 16px;
    padding-bottom: 24px;
`;

const ImageFinder = () => {
    const [state, setState] = useState({
        searchValue: "",
        images: [],
        page: 1,
        isLoading: false,
        modalImgUrl: "",
    });

    const setModalImgUrl = url => {
        setState({...state, modalImgUrl: url});
    };

    const searchNexPage = () => {
        setState({...state, isLoading: true});
        state.page = state.page + 1;
        findPictures(state.searchValue, state.page)
            .then(finded => {
                setState({
                    ...state,
                    images: [...state.images, ...finded],
                    isLoading: false,
                });
            })
            .finally(() => {
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: "smooth",
                });
            });
    };

    const searchByValue = value => {
        if (state.searchValue !== value) {
            state.searchValue = value;
            findPictures(state.searchValue).then(finded => {
                setState({
                    ...state,
                    images: [...finded],
                    page: 1,
                });
            });
        }
    };

    return (
        <Div>
            <Searchbar searchByValue={searchByValue} />
            {state.images.length > 0 && <ImageGallery images={state.images} setModalImgUrl={setModalImgUrl} />}
            {state.isLoading && <LoaderDots />}
            {state.images.length > 0 && <Button searchNexPage={searchNexPage} />}
            {state.modalImgUrl.length > 0 && <Modal url={state.modalImgUrl} setModalImgUrl={setModalImgUrl} />}
        </Div>
    );
};

export default ImageFinder;
