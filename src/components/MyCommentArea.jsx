import CommentList from "./MyCommentList";
import CustomComment from "./CustomComment";

const CommentArea = (props) => {
  const updateComment = () => {
    const myKey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJmOGE2NjI4MzJlODAwMTk4NzMwOWEiLCJpYXQiOjE3MTQzOTE2NTQsImV4cCI6MTcxNTYwMTI1NH0.8LJndh4fAd8e9THgG8NnG1HZNV-PJ1_p9RlB9odR_Hc";

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${myKey}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      })
  };

  return (
    <div className="m-2">
      <h4>Comments:</h4>
      <CommentList asin={props.asin} />
      <h4>Add a comment</h4>
      <CustomComment asin={props.asin} updateComment={updateComment} />
    </div>
  );
};

export default CommentArea;
