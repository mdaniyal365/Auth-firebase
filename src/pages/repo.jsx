import React, { useState, useEffect } from "react";
import Axios from "axios";


const Repos = ({ repos_url }) => {
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    const { data } = await Axios.get(repos_url);
    setRepos(data);
  };

  useEffect(() => {
    fetchRepos();
  }, [repos_url]);

  return (
    <ul>
      {repos.map(repo => (
        <li key={repo.id}>
          <div className="text-white text-lg">{repo.name}</div>
          <div className="text-secondary">{repo.language}</div>
          <div className="text-info">{repo.description}</div>
          <div>....................................................................................................................................................</div>
        </li>
      ))}
    </ul>
  );
};

export default Repos;
