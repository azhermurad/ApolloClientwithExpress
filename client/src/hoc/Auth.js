const Auth = (Component) => {
    return (props) => {
        return ( <Component data = "aa" {...props} />)
    }
};
export default Auth;