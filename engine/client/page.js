import exercises from './.exercises.json';
import ExerciseList from './exercise-list';
import Instructions from './instructions';
import isFinite from 'lodash.isfinite';
import Header from './header';
import Output from './output';
import React from 'react';
import values from 'lodash.values';

const year = new Date().getFullYear();

class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.getNewState();
    this.refresh = this.refresh.bind(this);
  }
  getNewState() {
    const index = window.location.hash.replace(/^#/, '');
    const isMain = (index.length && exercises[index]);

    const dflt = {
      index: null,
      title: '',
      files: [],
      slug: 'main'
    };

    const newState = isMain
      ? exercises[index]
      : dflt;

    newState.size = Object.keys(exercises).length;

    return newState;
  }
  componentWillMount() {
    window.addEventListener('hashchange', this.refresh, false);
  }
  componentWillUnmount() {
    window.removeEventListener('hashchange', this.refresh);
  }
  refresh() {
    this.setState(this.getNewState());
  }
  render() {
    const exercise = isFinite(this.state.index) ? ([
      <Instructions
        key='instructions'
        {...this.state}
      />,
      <Output
        key='output'
        {...this.state}
      />
    ]) : (
      <ExerciseList
        key='exercise-list'
        exercises={values(exercises)}
      />
    );

    return (
      <div>
        <Header {...this.state} />
        {exercise}
        <div className='footer'>
          © YLD! Limited {year}
        </div>
      </div>
    );
  }
}

module.exports = Page;