function Login(props) {

    console.log(props);

    return (<table>
        <tbody>
            <tr>
                <td>Username</td>
                <td><input placeholder={props.LoginPlaceholder} /></td>
            </tr>
            <tr>
                <td>Password</td>
                <td><input placeholder={props.PasswordPlaceholder}/></td>
            </tr>
            <tr>
                <td colSpan='2'><button style={{color:props.submitButtonColor}}>Submit</button></td>
            </tr>
        </tbody>
    </table>);

}

export default Login;