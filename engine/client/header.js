const React = require('react');

const {
  PropTypes
} = React;

const Header = ({
  title
}) => {
  const back = title.length ? (
    <a href='#' className='go-back'>
      <span
        className='glyphicon glyphicon-triangle-left'
        aria-hidden='true'
      />
      Back
    </a>
  ) : null;

  const _title = title ? title : 'Learn React';

  return (
    <div className='header'>
      <div className='container'>
        <div className='row'>
          {back}
          <img
            className='logo'
            src={require('file-loader!../../images/yld.png')}
            alt='YLD' />
          <h1>
            {_title}
          </h1>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string
};

Header.defaultProps = {
  title: ''
};

module.exports = Header;
