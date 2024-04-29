import CommentList from "./MyCommentList";
import CustomComment from "./CustomComment";
import { Component } from "react";

class CommentArea extends Component {
  state = {
    elements: [],
  };

  getComment = () => {
    const myKey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJmOGE2NjI4MzJlODAwMTk4NzMwOWEiLCJpYXQiOjE3MTQzOTE2NTQsImV4cCI6MTcxNTYwMTI1NH0.8LJndh4fAd8e9THgG8NnG1HZNV-PJ1_p9RlB9odR_Hc";

    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${myKey}`,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((elements) => {
        console.log(elements);
        this.setState({ elements });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getComment();
  }

  render() {
    return (
      <div className="m-2">
        <h4>Comments:</h4>
        <CommentList asin={this.props.asin} elements={this.state.elements} />
        <h4>Add a comment</h4>
        <CustomComment asin={this.props.asin} updateComment={this.getComment} />
      </div>
    );
  }
}

export default CommentArea;
