

export default function Profile(props) {

    const user = props.user;

    return(
        <>
        {console.log(props)}
        <div>
            This is the profile component
        </div>
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