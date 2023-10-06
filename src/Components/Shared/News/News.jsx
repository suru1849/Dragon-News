import { useParams } from "react-router-dom";

const News = () => {
  const { category } = useParams();

  return (
    <div>
      <h1 className="text-3xl text-center">{category}</h1>
    </div>
  );
};

News.propTypes = {};

export default News;
