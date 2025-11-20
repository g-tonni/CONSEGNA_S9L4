import { Component } from 'react'
import { Col, ListGroup } from 'react-bootstrap'
import SingleComment from './SingleComment'

class CommentList extends Component {
  render() {
    return (
      <Col xs={12}>
        <ListGroup>
          {this.props.commentArr.map((comment) => {
            return (
              <SingleComment
                key={comment._id}
                comment={comment.comment}
                rate={comment.rate}
                commentId={comment._id}
              />
            )
          })}
        </ListGroup>
      </Col>
    )
  }
}

export default CommentList
