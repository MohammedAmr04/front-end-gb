import { Button, Form } from "react-bootstrap";
import stylesGlobal from '../../styles/global.module.css'
import styles from './styles.module.css'
const { page ,form } = styles;
const {boxShadow} =stylesGlobal;
export default function FormLogin() {

    return (
        <div className={`${page}`}>
            <Form className={`border border-2 border-primary rounded-1 p-4 ${boxShadow ,form} `} >
            <Form.Group className="mb-3 pt-2" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    {`We'll never share your email with anyone else.`}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </div>
        
  )
}
