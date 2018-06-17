import React, {Fragment} from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from '../../styles/IssueTree.scss';
import ArticleBox from './ArticleBox';
import ArticleNode from './ArticleNode';
import ArticleBranch from './ArticleBranch';
import ArticleDate from './ArticleDate';

const cx = classNames.bind(styles);
class TreeArticle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('DDDDDDDD', this.props);
    const { title, position, article, isLast, time } = this.props;
    return (
      <div>
        <ArticleNode />
        <ArticleBranch isLast={isLast}/>
        <ArticleBox position={ position } isLast={ isLast }>
          <div className={cx('article-title')}>{ title }</div>
          <div className={cx('article-url')}>{ article.replace(/^https?:(\/\/)/g, '') }</div>
        </ArticleBox>
        <ArticleDate time={ time } position={ position }/>
      </div>
    )
  }
}

export default TreeArticle;
