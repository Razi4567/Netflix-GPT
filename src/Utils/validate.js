export const checkFormData = (email, password, userName) => {

    const isUserNameValid = /^[a-zA-Z0-9_-]{3,16}$/.test(userName);
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if(!isUserNameValid) return "Enter valid username";
    if(!isEmailValid) return "Enter valid email address";
    if(!isPasswordValid) return "Password is not valid";

    return null;
}