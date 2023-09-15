import loadingImage from "../assets/loading.gif"
function LoadingScreen(){
    return <div className="loadingScreen">
        <img src={loadingImage} alt="" />
    </div>
}

export default LoadingScreen