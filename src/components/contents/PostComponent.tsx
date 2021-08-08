const PostComponent = (props: {
  title: string;
  contents: string;
  style: any;
}) => {
  return (
    <div className="grid_item" style={props.style}>
      <div className="text_simple post_title"> {props.title}</div>
      <hr className="line_simple" />
      <div className="text_simple post_contents"> {props.contents}</div>
    </div>
  );
};

export default PostComponent;
