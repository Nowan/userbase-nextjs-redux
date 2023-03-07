import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useAppDispatch } from '../redux/hooks';
import { actions } from '../redux/slices/users';

export default function AppNavbar() {
    const dispatch = useAppDispatch();

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>UserBase</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" />
                    <Nav>
                        <Button 
                            onClick={() => dispatch(actions.addUser({
                                id: Math.floor(Math.random() * 10000) + 4,
                                name: "John Doe",
                                username: "FluffyJohn",
                                email: "john@doe.org",
                                city: "Neverland"
                            }))}
                        >
                            Add new
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
