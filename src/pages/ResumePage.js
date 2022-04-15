import React from 'react';


export const ResumePage = (props) => {
    const { repos } = props;
    console.log('Repos is: ', repos.data);

    const listRepos =
        repos.length !== 0 ? (
            repos.data.slice(0, 10).map((item) => (
                <li key={item.id}>
                    <a href={item.html_url}>{item.name}</a>
                </li>
            ))
        ) : (
            <li>No repos found</li>
        );

    return (
        <div className='list'>
            <li className='info-repos'>
                {listRepos}
            </li>
        </div>

    )
}

export default ResumePage;