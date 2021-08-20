import { useEffect, useState } from "react";
import posts from "../../asset/data/posts.json";

const defaultData = {
  tags: [],
  resultList: [],
  title: "",
};

const Gallery = (props: any) => {
  const [resultList, setResultList] = useState<Array<any>>(
    defaultData.resultList
  );
  useEffect(() => {
    setPostList();
  }, [props.location]);

  const setPostList = () => {
    const updatePostList: Array<any> = [];

    posts.list.forEach((list) => {
      if (findPost(list.tag)) {
        updatePostList.push(list);
      }
    });
    setResultList(updatePostList);
  };

  const findPost = (list: Array<string>) => {
    const tags: Array<string> = props.location.state.tag;
    const result: Array<string> = tags.filter((tag) => list.includes(tag));
    return result.length === 0 ? false : true;
  };
  return (
    <article>
      <div>
        <h3>{props.match.params.kind} 갤러리</h3>총 {resultList?.length}의
        포스트가 존재
      </div>
      <div className="post_section">
        {resultList?.map((post) => {
          // const str = "../../asset/images/" + post.url;
          // const test = require(str).default;
          // console.log(require("../../asset/images/cat2.jpg"));

          return (
            <div className="post_conteiner">
              <div className="post_img">
                <img src={"../../asset/images/cat1.jpg"} alt="이미지" />
              </div>
              <div className="post_title">{post.title}</div>
              <div className="post_contents">{post.contents}</div>
              <div className="post_writer">관리자</div>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default Gallery;
