import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import {
    Row,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Button,
} from "reactstrap";
import { useCookies } from "react-cookie";
import { login } from "../services/apis"
export default function Login() {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })
    const [cookies, setCookie, removeCookie] = useCookies(['auth']);
    const handleLogin = () => {
        axios.post(login, {
            email: userData.email,
            password: userData.password,
        }).then(({ data }) => {
            setCookie("auth", data.user)
        }).catch(err => {

        });
        localStorage.setItem("token", "weerisFKGehoweuhiEtvBdyDKBH")
    }
    return (
        <>
            <Head>
                <title>Lemarchandi | login</title>
                <meta
                    name="description"
                    content="Lemarchandi Dispensary login form"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <>
                <div className="login">
                    <Row>
                        <Container>
                            <div className="spacer">
                                <Row className="m-0 justify-content-center">
                                    <Col lg="6" className="text-center">
                                        <div className="contact-box p-r-40">
                                            <h1 className="title">Login</h1>
                                            <Form>
                                                <Row>
                                                    <Col lg="12">
                                                        <FormGroup className="m-t-15">
                                                            <Input type="email" placeholder="email" value={userData.email} />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="12">
                                                        <FormGroup className="m-t-15">
                                                            <Input type="password" placeholder="password" value={userData.password} />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="12">
                                                        <Button
                                                            onClick={handleLogin}
                                                            type="submit"
                                                            className="btn btn-danger-gradiant m-t-20 btn-arrow"
                                                        >
                                                            Login
                                                        </Button>
                                                    </Col>
                                                    <Col lg="12" className="m-0 justify-content-between">
                                                        <p>Do not have an account </p>
                                                        <Link href="/signup">Singup here</Link>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </Row>
                </div>
            </>
        </>
    );
}