import Layout from "@/components/Layout";
import { Button, Card, Carousel, Col, Container, Image, ListGroup, Placeholder, Row, Stack } from "react-bootstrap";

export default function Home() {
    return (
        <Layout>
            <Container fluid className="px-0">
                <Row>
                    <Col>
                        <div className="position-relatives">
                            <Image alt="" src="https://images.unsplash.com/photo-1527775978467-a86a78e8f791?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" fluid />
                            <div className="text-center position-absolute top-50 start-50 translate-middle">
                                <h1 className="display-1 text-white fw-bold">Cursos católicos</h1>
                                <h6 className="text-warning fw-lighter">Entenda a doutrina da Igreja e compartilhe da sabedoria dos santos.</h6>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="p-5 text-white text-center" style={{ backgroundColor: "black" }}>
                    <Col sm={3}>
                        <Card
                            bg="dark"
                            text="light"
                        >
                            <Card.Body>
                                <Card.Title>Muitos temas</Card.Title>
                                <Card.Text className="fw-lighter">
                                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card
                            bg="dark"
                            text="light"
                        >
                            <Card.Body>
                                <Card.Title>Diferentes padres</Card.Title>
                                <Card.Text className="fw-lighter">
                                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card
                            bg="dark"
                            text="light"
                        >
                            <Card.Body>
                                <Card.Title>Aulas gravadas</Card.Title>
                                <Card.Text className="fw-lighter">
                                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card
                            bg="dark"
                            text="light"
                        >
                            <Card.Body>
                                <Card.Title>Homilías diárias</Card.Title>
                                <Card.Text className="fw-lighter">
                                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="bg-dark p-5">
                    <Col sm={12} className="mb-5">
                        <div className="text-center">
                            <h1 className="display-1 text-white">Conheça nossos planos</h1>
                            <h6 className="fw-lighter text-warning">Lorem ipsum dolor sit amet, consectetur adipiscing elit..</h6>
                        </div>
                    </Col>
                    <Col size={4}>
                        <Card
                            bg="light"
                        >
                            <Card.Body>
                                <Card.Title className="display-4">Plano 1</Card.Title>
                                <Card.Subtitle className="mb-2">Card Subtitle</Card.Subtitle>
                                <Card.Title className="display-1">R$999</Card.Title>
                                <hr></hr>
                                <Card.Text>
                                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </Card.Text>
                                <Button className="w-100 mt-5">Assinar agora</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col size={4}>
                        <Card
                            bg="primary"
                            text="light"
                        >
                            <Card.Body>
                                <Card.Title className="display-4">Plano 2</Card.Title>
                                <Card.Subtitle className="mb-2 text-white">Card Subtitle</Card.Subtitle>
                                <Card.Title className="display-1">R$999</Card.Title>
                                <hr></hr>
                                <Card.Text>
                                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </Card.Text>
                                <Button className="w-100 mt-5" variant="warning">Assinar agora</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col size={4}>
                        <Card
                            bg="warning"
                        >
                            <Card.Body>
                                <Card.Title className="display-4">Plano 3</Card.Title>
                                <Card.Subtitle className="mb-2">Card Subtitle</Card.Subtitle>
                                <Card.Title className="display-1">R$999</Card.Title>
                                <hr></hr>
                                <Card.Text>
                                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </Card.Text>
                                <Button className="w-100 mt-5">Assinar agora</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}
