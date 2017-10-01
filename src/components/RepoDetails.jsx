import React, { Component } from 'react';


const RepoDetails = ({user}) => {
  return (
    <div>
      <p>{user.login}</p>
      <p>{user.type}</p>
      <img src="{user.avatar_url}" />
      <a href="{user.url}">{user.url}</a>
    </div>
  )
}

export default RepoDetails;
