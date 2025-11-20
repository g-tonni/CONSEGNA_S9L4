import { Component } from 'react'
import { Row } from 'react-bootstrap'
import CommentList from './CommentList'
import AddComment from './AddComment'

class CommentArea extends Component {
  state = {
    comments: [],
  }

  getComments = function () {
    const commentsURL =
      'https://striveschool-api.herokuapp.com/api/comments/' + this.props.bookId
    fetch(commentsURL, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTBkYTk2MmY0YmQ0NzAwMTU4NWIxZDYiLCJpYXQiOjE3NjM2NDM2NDEsImV4cCI6MTc2NDg1MzI0MX0.HApuvCLCEpPpABmVgvnlmk4U32u89ik5rEeOlSOHiLw',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('ERRORE NELLA RESPONSE: ', res.status)
        }
      })
      .then((data) => {
        console.log(data)

        this.setState({
          comments: data,
        })
      })
      .catch((err) => {
        console.log('ERRORE: ', err)
      })
  }

  componentDidMount() {
    this.getComments()
  }

  render() {
    return (
      <Row>
        <CommentList commentArr={this.state.comments} />
        <AddComment bookId={this.props.bookId} />
      </Row>
    )
  }
}

export default CommentArea
