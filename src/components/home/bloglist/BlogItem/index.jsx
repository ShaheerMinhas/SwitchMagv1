import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../common/Chip';
import './styles.css';

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) => {
  const linkStyle = {
    textDecoration: 'none', // Remove underline
    color: 'inherit',       // Inherit text color from parent
  };

  return (
    <Link className='blogItem-wrap' to={`/blog/${id}`} style={linkStyle}>
      <div>
        <img className='blogItem-cover' src={cover} alt='cover' />
        
        <h3 className='title-cover'>{title}</h3>
        <p className='blogItem-desc'>{description}</p>
        <footer>
          <div className='blogItem-author'>
            <div>
              <p>{createdAt}</p>
            </div>
          </div>
          <div className='blogItem-link'>➝</div>
        </footer>
      </div>
    </Link>
  );
};

export default BlogItem;
  