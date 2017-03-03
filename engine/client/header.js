const React = require('react');

const {
  PropTypes
} = React;

const Header = ({
  title,
  slug,
  index,
  size
}) => {
  const backHref = index > 1
    ? `#${index - 1}`
    : '#';

  const backTitle = index > 1
    ? 'Previous'
    : 'List';

  const back = !title.length ? null : (
    <a href={backHref} className='go-back'>
      <span
        className='glyphicon glyphicon-triangle-left'
        aria-hidden='true'
      />
      {backTitle}
    </a>
  );

  const nextHref = ((index > 0) && (index < size))
    ? `#${index + 1}`
    : null;

  const next = !nextHref ? null : (
    <a href={nextHref} className='go-back'>
      Next
      <span
        className='glyphicon glyphicon-triangle-right'
        aria-hidden='true'
      />
    </a>
  );

  const _title = !title
    ? 'Learn React'
    : title;

  return (
    <div className='header'>
      <div className='container'>
        <div className='row'>
          {back}
          {next}
          <h1>
            {_title}
          </h1>
          <a href='https://yld.io' target='_blank'>
            <img
              className='logo'
              src={require('file-loader!../../images/yld.png')}
              alt='YLD'
            />
          </a>
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
