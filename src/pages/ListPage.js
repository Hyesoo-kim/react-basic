import { Link } from "react-router-dom";
import BlogList from "../components/BlogList";

const ListPage = () => {
  return(
    <div>
      <div className="d-flex justify-content-between">
        <h1>Blogs</h1>
        <div>
          <Link to="/blogs/create" className="btn btn-success">
            Create New
          </Link>
        </div>
      </div>
      <BlogList />
    </div>
  );
};

export default ListPage;