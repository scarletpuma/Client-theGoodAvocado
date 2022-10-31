import React from 'react'
import { Form, Container, Button } from 'react-bootstrap'

const EditReview = (props) => {
    const { review, handleChange, handleSubmit, heading } = props

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Label>Comment:</Form.Label>
                <Form.Control
                    placeholder="Add comments about the restaurant, the food, and your overall experience"
                    name="comment"
                    id="comment"
                    value={review.comment}
                    onChange={handleChange}
                    as="textarea"
                    rows={3}
                />
                <Form.Select
                    aria-label="rating"
                    name="rating"
                    defaultValue={review.rating} 
                    onChange={handleChange}
                >
                    <option>Add a rating</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </Form.Select>
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default EditReview