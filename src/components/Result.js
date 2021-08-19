import React from 'react';

const Result = (props) => {
    const { repos } = props;
    console.log('Repos is :', repos)

    const listRepos = repos.length !== 0 ? repos.data.map((item) => <li>{item.name}</li>) : <li>Not found</li>;
    
    return (
    <ul>
        <li>
            {listRepos}
        </li>
    </ul>
    );
    
}

export default Result;