function ForgotPassword() {
    return (
        <div className="forgotPassword">
            <form>
                <h2>Forgot Password</h2>
                <label>Email</label>
                <input type="text" />
                <label>Confirm Email</label>
                <input
                    type="text"
                    onPaste={(event) => event.preventDefault()}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ForgotPassword
