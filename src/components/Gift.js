import React, { Component } from 'react'
import { Form, FormGroup, ControlLabel, Button, FormControl } from 'react-bootstrap'

class Gift extends Component {
  constructor() {
    super()

    this.state = { person: '', present: '' }
  }
  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <ControlLabel>Person</ControlLabel>
            <FormControl
              className="input-person"
              onChange={event => this.setState({ person: event.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>present</ControlLabel>
            <FormControl
              className="input-present"
              onChange={event => this.setState({ present: event.target.value })}
            />
          </FormGroup>
        </Form>
        <Button
          className="btn-remove"
          onClick={() => this.props.removeGift(this.props.gift.id)}
        >
          Remove Gift
        </Button>
      </div>
    )
  }
}

export default Gift
