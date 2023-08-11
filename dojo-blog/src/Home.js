// import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = ({fetchUrl}) => {
  // const [name, setName] = useState('mario');
  // const [blogs, setBlogs] = useState([]);

  const handleDelete = (id) => {
    // const newBlogs = blogs.filter(blog => blog.id !== id);
    // setBlogs(newBlogs);
  }
  // const $envNode = document.getElementById('gitenv');
  // const git_token = $envNode.attributes.getNamedItem('data-git-token').value;
  // const git_domain = $envNode.attributes.getNamedItem('data-git-domain').value;
  // const dataUrl = document.URL.split('.')[0].replace(/-\d+$/,'') + '-3001.' + git_domain + '/blogs';
  const { data:blogs, isPending, fetchError } = useFetch(fetchUrl);
  return (
    <div className="home">
      {isPending && <div> Loading.... </div>}
      {fetchError !== '' && <div> Failed to load!! {fetchError} </div>}
      {!isPending && !fetchError && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />}
      {/* <button onClick={() => setName('luigi')}>change name</button> */}
    </div>
  );
}
 
export default Home;
