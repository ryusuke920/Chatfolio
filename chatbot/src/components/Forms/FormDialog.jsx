import React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextInput from './TextInput';

export default class FormDialog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            twitter: "",
            email: "",
            description: "",
        }

        this.inputName = this.inputName.bind(this);
        this.inputTwitter = this.inputTwitter.bind(this);
        this.inputEmail = this.inputEmail.bind(this);
        this.inputDescription = this.inputDescription.bind(this);

    }

    inputName = (event) => {
        this.setState({ name: event.target.value })
    }

    inputTwitter = (event) => {
        this.setState({ twitter: event.target.value })
    }

    inputEmail = (event) => {
        this.setState({ email: event.target.value })
    }

    inputDescription = (event) => {
        this.setState({ description: event.target.value })
    }

    submitForm = () => {
        const name = this.state.name;
        const twitter = this.state.twitter;
        const email = this.state.email;
        const description = this.state.description;

        const payload = {
            text: "--------------------------------------------------------------" + "\n" +
                  "新しいお問い合わせがありました。 \n\n" +
                  "名前: " + name + "\n\n" +
                  "Twitter: " + twitter + "\n\n" +
                  "Email: " + email + "\n\n" +
                  "お問い合わせ内容: \n " + description + "\n" +
                  "--------------------------------------------------------------" + "\n"
        }

        const url = "https://hooks.slack.com/services/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";

        fetch(url, {
            method: "POST",
            body: JSON.stringify(payload)
        }).then(() => {
            alert("送信が完了しました。 \n 確認次第、ご連絡させていただきます！");
            this.setState({
                name: "",
                twitter: "",
                email: "",
                description: "",
            })
            return this.props.handleClose()
        })

    }

    render () {
        return (
            <Dialog
                open={this.props.open}
                onClose={this.props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"お問い合わせフォーム"}
                </DialogTitle>
                <DialogContent>
                    <TextInput
                        label={"お名前(必須)"}
                        multiline={false}
                        rows={1}
                        value={this.state.name}
                        type={"text"}
                        onChange={this.inputName}
                    />
                    <TextInput
                        label={"Twitter(任意)"}
                        multiline={false}
                        rows={1}
                        value={this.state.twitter}
                        type={"text"}
                        onChange={this.inputTwitter}
                    />
                    <TextInput
                        label={"メールアドレス(必須)"}
                        multiline={false}
                        rows={1}
                        value={this.state.email}
                        type={"email"}
                        onChange={this.inputEmail}
                    />
                    <TextInput
                        label={"お問い合わせ内容(必須)"}
                        multiline={true}
                        rows={5}
                        value={this.state.description}
                        type={"text"}
                        onChange={this.inputDescription}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.handleClose}>
                        戻る
                    </Button>
                    <Button onClick={this.submitForm} autoFocus>
                        送信する
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}