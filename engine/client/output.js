const React = require('react');

const {
  PropTypes
} = React;

const Result = ({
  slug
}) => {
  const onError = (err) => {
    return (
      <div className='component'>
        <pre>
          {error.toString()}
          {'\n'}
          {error.stack}
        </pre>
      </div>
    );
  };

  let Component = null;
  let component = null;

  try {
    Component = require(`../../exercises/${slug}/index.js`);
  } catch (err) {
    return onError(err);
  }

  try {
    component = (
      <div className='component'>
        <Component />
      </div>
    );
  } catch (err) {
    return onError(err);
  }

  return component;
};

const Editor = ({
  slug
}) => {
  if (!slug) {
    return null;
  }

  return (
    <p>
      Use your text editor of choice to edit the files in
      <span className='monospace'> exercises/{slug}/</span>.<br />
      The result will be rendered below:
      <br />
    </p>
  );
};

const Output = ({
  slug,
  title
}) => {
  return (
    <div className='main'>
      <div className='container'>
        <div className='row'>
          <h4>{title}</h4>
          <Editor
            slug={slug}
          />
          <Result
            slug={slug}
          />
        </div>
      </div>
    </div>
  );
};

Output.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string
};

Output.defaultProps = {
  title: '',
  slug: ''
};

module.exports = Output;
