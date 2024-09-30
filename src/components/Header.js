import { useState } from "react";
import { Button, Col, Container, Form, Nav, Navbar, Offcanvas, Row } from "react-bootstrap"
import { DoorOpen, House, InputCursorText, List, PersonVideo2 } from "react-bootstrap-icons"

export default function Header() {
    const [show, setShow] = useState(false);

    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <Navbar
                sticky="top"
                bg="dark"
                data-bs-theme="dark"
                className="justify-content-between"
            >
                <Container>
                    <Navbar.Brand>
                        <Button variant="dark" onClick={handleOpen}>
                            <List size={25} />
                        </Button>
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link href="">THEATRUM</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className="d-flex align-items-center">
                            <InputCursorText className="me-2" /> CADASTRAR
                        </Nav.Link>
                        <Nav.Link className="ms-3 d-flex align-items-center">
                            <DoorOpen className="me-2" />ENTRAR
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Offcanvas
                show={show}
                onHide={handleClose}
                bg="dark"
                data-bs-theme="dark"
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>THEATRUM</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="flex-grow-0">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Offcanvas.Body>
                <hr />
                <Offcanvas.Body className="flex-grow-0">
                    <Nav className="flex-row justify-content-start">
                        <Nav.Item as={Button} className="btn btn-dark d-flex align-items-center">
                            <InputCursorText className="me-2" /> Cadastrar
                        </Nav.Item>
                        <Nav.Link disabled>|</Nav.Link>
                        <Nav.Item as={Button} className="btn btn-dark d-flex align-items-center">
                            <DoorOpen className="me-2" />Entrar
                        </Nav.Item>
                    </Nav>
                </Offcanvas.Body>
                <hr />
                <Offcanvas.Body className="flex-grow-0">
                    <Nav className="flex-column">
                        <Nav.Item as={Button} className="btn btn-dark d-flex align-items-center">
                            <House className="me-2" />Início
                        </Nav.Item>
                        <Nav.Item as={Button} className="btn btn-dark d-flex align-items-center">
                            <PersonVideo2 className="me-2" />Cursos
                        </Nav.Item>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

