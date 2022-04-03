

export default function Profile(props) {

    if(props.user) {
        const user = props.user;
    }
    
    return(
        <>
        {props.user ? (<>{console.log(props)}
        <div>
            This is the profile component
        </div></>):(<div>No props passed to profile component</div>)}
        <style jsx>
            {`
            .test {
                color: red;
            }
            `}
        </style>
        </>
    );
}