export const Contact = () => {
    return(
        <>
        <h1>Contact</h1>
        <form>
            <label htmlFor="fName" required>First Name
                <input type="text" />
            </label>
            <label htmlFor="fName" required>Last Name
                <input type="text" />
            </label>
            <label htmlFor="email" required>E-Mail
                <input type="email" />
            </label>
            <label htmlFor="message">Message
                <input type="text" />
            </label>
            <button type="submit">Send</button>
        </form>
        </>
    )
}