import React, { Component } from 'react'
import Axios from 'axios'
import { Form, Col, Row, Input, FormGroup, CardBody, Button } from 'reactstrap'

class Formulario extends Component {
    constructor(props){
        super(props)
        this.state={
            loading:false,
            textNombre:'',
            textApellido:'',
            textTelefono:'',
            textEmail:'',
            textMensaje:''
        }
    }
    onChangeText = event => {
        this.setState({ [event.target.name]: event.target.value })
    }
    onEnviarFormulario = (event) => {
        const { textNombre, textApellido, textTelefono, textEmail, textMensaje } = this.state
        const nombreCompleto = textNombre + ' ' + textApellido
        this.setState({loading:true})
        event.preventDefault()
        const data = { name: nombreCompleto, telefono: textTelefono, email: textEmail, message: textMensaje }
        Axios.post('https://us-central1-lanube360-web.cloudfunctions.net/submitJardinesQuelhue', data)
            .then( res => {
                console.log(`mensaje enviado: ${res.data.isEmailSend}`)
                this.setState({loading:false})                 
            })
            .catch(error => {
                console.log(error);
            });
        this.setState({ 
            textNombre: '',
            textApellido:'',
            textTelefono:'',
            textEmail:'',
            textMensaje:''
        })
    }
    render(){
        const { loading, textNombre, textApellido, textTelefono, textEmail, textMensaje} = this.state
        const isInvalid = textNombre === '' || textApellido === '' || textTelefono === '' || textEmail ==='' || textMensaje === ''
        return(
            <Form onSubmit={this.onEnviarFormulario}>
                <CardBody>
                    <Row>
                        <Col md="6">
                            <FormGroup className="label-floating">
                                <label className="control-label">
                                    Nombre
                                </label>
                                <Input
                                    name="textNombre"
                                    value={textNombre}
                                    onChange={this.onChangeText}
                                    placeholder=""
                                    type="text"
                                />
                            </FormGroup>
                        </Col>
                        <Col md="6">
                            <FormGroup className="label-floating">
                                <label className="control-label">
                                    Apellido
                                </label>
                                <Input
                                    name="textApellido"
                                    value={textApellido}
                                    onChange={this.onChangeText}
                                    placeholder=""
                                    type="text"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup className="label-floating">
                                <label className="control-label">
                                    Teléfono
                                </label>
                                <Input
                                    name="textTelefono"
                                    value={textTelefono}
                                    onChange={this.onChangeText}
                                    placeholder=""
                                    type="text"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup className="label-floating">
                        <label className="control-label">
                            Email 
                        </label>
                        <Input
                            name="textEmail"
                            value={textEmail}
                            onChange={this.onChangeText}
                            placeholder=""
                            type="email"
                        />
                    </FormGroup>
                    <FormGroup className="label-floating">
                        <label className="control-label">
                            Mensaje
                        </label>
                        <Input
                            id="message"
                            name="textMensaje"
                            value={textMensaje}
                            onChange={this.onChangeText}
                            placeholder=""
                            type="textarea"
                            rows="6"
                        />
                    </FormGroup>
                    <Row>
                        <Col md="6">
                            <Button type ="submit" color="primary" disabled={isInvalid}>
                                {loading && 
                                    <div className="uil-reload-css reload-small mr-1">
                                        <div />
                                    </div>
                                }
                                Enviar
                            </Button>
                        </Col>
                    </Row>
                </CardBody>
            </Form>
        )
    }
}
export default Formulario