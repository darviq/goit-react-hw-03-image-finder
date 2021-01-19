import React, {Component} from "react";
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

export default class ImageFinder extends Component {
    state = {
        searchValue: "",
        images: [],
        page: 1,
        isLoading: false,
        modalImgUrl: "",
    };

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.searchValue !== this.state.searchValue) {
            this.changeLoadingStatus();
            findPictures(this.state.searchValue)
                .then(finded => {
                    this.setState({images: [...finded], page: 1});
                })
                .finally(this.changeLoadingStatus());
        }

        if (prevState.page !== this.state.page) {
            this.changeLoadingStatus();
            findPictures(this.state.searchValue, this.state.page)
                .then(finded => {
                    this.setState({images: [...prevState.images, ...finded]});
                })
                .finally(() => {
                    this.changeLoadingStatus();
                    window.scrollTo({
                        top: document.documentElement.scrollHeight,
                        behavior: "smooth",
                    });
                });
        }
    };

    setSearchValue = value => {
        this.setState({
            searchValue: value,
        });
    };

    setNextPage = () => {
        this.setState(prevState => ({page: prevState.page + 1}));
    };

    changeLoadingStatus = () => {
        this.setState(prevState => ({isLoading: !prevState.isLoading}));
    };

    setModalImgUrl = url => {
        this.setState({modalImgUrl: url});
    };

    render() {
        return (
            <Div>
                <Searchbar setSearchValue={this.setSearchValue} />
                {this.state.images.length > 0 && <ImageGallery images={this.state.images} setModalImgUrl={this.setModalImgUrl} />}
                {this.state.isLoading && <LoaderDots />}
                {this.state.images.length > 0 && <Button setNextPage={this.setNextPage} />}
                {this.state.modalImgUrl.length > 0 && <Modal url={this.state.modalImgUrl} setModalImgUrl={this.setModalImgUrl} />}
            </Div>
        );
    }
}
