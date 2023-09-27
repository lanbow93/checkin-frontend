import { FormEventHandler, useState } from 'react'

function ForgotPassword() {
    const [email, setEmail] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('')

    const handleFormSubmission = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {}

    return (
        <div className="forgotPassword">
            <form onSubmit={handleFormSubmission}>
                <h2>Forgot Password</h2>
                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    onChange={(event) => setEmail(event.target.value)}
                />
                <label>Confirm Email</label>
                <input
                    name="confirmEmail"
                    type="text"
                    onChange={(event) => setConfirmEmail(event.target.value)}
                    onPaste={(event) => event.preventDefault()}
                />
                {email && confirmEmail && email === confirmEmail ? (
                    <button className="activated">Submit</button>
                ) : (
                    <button disabled>Submit</button>
                )}
            </form>
        </div>
    )
}

export default ForgotPassword
