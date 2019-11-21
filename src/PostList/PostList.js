// External Dependencies
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Material-UI Dependencies
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import PostListItem from './PostListItem';
import { fetchPosts } from './action/PostListAction';
import { getPostListStyles } from '../App/Styles';

// Local Variables
const useStyles = makeStyles((theme) => getPostListStyles(theme));

// Component Definition
const PostList = (props) => {
  const {
    rootStyle,
  } = useStyles();

  const {
    fetchedPosts,
    onFetchPosts,
    votedPost,
  } = props;

  useEffect(() => {
    onFetchPosts();
    // TODO: Use one single state to handle update monitoring
  }, [onFetchPosts, votedPost]);

  const renderPostItems = () => fetchedPosts.map((post, index) => {
    const {
      id,
      owner,
      score,
      title,
      timestamp,
    } = post;

    const timeText = new Date(timestamp * 1000).toLocaleDateString('en-US', {
      dateStyle: 'long',
      timeStyle: 'medium',
    });
    const timeOwnerText = `submitted on ${timeText} by ${owner || 'Anonymous'}`;
    const scoreText = score < 1000 ? `${score}` : `${score / 1000}k`;

    return (
      <PostListItem
        id={id}
        hasDivider={index !== fetchedPosts.length - 1}
        key={`${id}-${title}`}
        postScore={scoreText}
        primaryText={title}
        secondaryText={timeOwnerText}
      />
    );
  });

  return (
    <>
      <Paper className={rootStyle}>
        <List>
          {renderPostItems()}
        </List>
      </Paper>
    </>
  );
};

// Prop Validation
PostList.propTypes = {
  fetchedPosts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    owner: PropTypes.string,
    score: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
  })),
  onFetchPosts: PropTypes.func.isRequired,
  votedPost: PropTypes.shape({
    id: PropTypes.number,
    owner: PropTypes.string,
    score: PropTypes.number,
    title: PropTypes.string,
    timestamp: PropTypes.number,
  }),
};

// Default Props
PostList.defaultProps = {
  fetchedPosts: [],
  votedPost: {},
};

const mapStateToProps = (state) => {
  const {
    fetchedPosts,
    votedPost,
  } = state.PostList;
  console.log(votedPost);

  return {
    fetchedPosts,
    votedPost,
  };
};

export default connect(mapStateToProps, {
  onFetchPosts: fetchPosts,
})(PostList);
