import React from "react";
const gvar='this is global var'
class LoginClass extends React.Component {
    props
    abc='class variable'
    xyz=''
    wer=''
    constructor(props) {
        super();
        let fvar='this is funtion var'
        console.log(props)
        this.props = props;
        console.log(gvar)
        console.log(fvar)
        console.log(this.abc)
        this.shatakshi()
    }

    

    shatakshi(){
     
    }

    render() {
        return (
            <div>
                <center>
                <h3>{this.props.message}</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Username</td>
                            <td><input placeholder={this.props.LoginPlaceholder} /></td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td><input placeholder={this.props.PasswordPlaceholder} /></td>
                        </tr>
                        <tr>
                            <td colSpan='2'>
                                <button
                                    onClick={this.shatakshi}
                                    style={{ color: this.props.submitButtonColor }}>
                                    Submit
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </center>
            </div>

        );

    }
}
export default LoginClass;