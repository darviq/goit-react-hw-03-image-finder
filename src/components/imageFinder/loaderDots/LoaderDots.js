import Loader from "react-loader-spinner";
import styled from "styled-components";

const Div = styled.div`
    margin: 0 auto;
`;

const LoaderDots = () => {
    return (
        <Div>
            <Loader className="loader" type="ThreeDots" color="#00BFFF" height={100} width={100} timeout={3000} />
        </Div>
    );
};

export default LoaderDots;
