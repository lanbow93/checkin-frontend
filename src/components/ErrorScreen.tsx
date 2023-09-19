interface errorProps{
    closeModal: Function,
    status: string,
    message: string,
    error: string,
}

function ErrorScreen(props: errorProps){
    console.log(props.status)
    return <div className="errorScreen">
        <h1>{props.message}</h1>
        <h2>{props.error}</h2>
        
        <button onClick={() => props.closeModal(false)}>Close</button>
    </div>
}

export default ErrorScreen