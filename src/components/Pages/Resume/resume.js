import React, { Component } from 'react';
import Navbar from '../../Navbar/navbar';
import Fold from '../../Fold/fold'
import './resume.scss';
import ReactMarkdown from 'react-markdown';
import Res from '../../../assets/documents/resume.md';


class Resume extends Component {
  constructor() {
    super();
    this.state = { markdown: '' };
  }

  componentWillMount() {
    // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
    fetch(Res).then(res => res.text()).then(text => this.setState({ markdown: text }));
  }
  render() {
    const { markdown } = this.state;
    return (
      <div>
        <Navbar />
          <div className='content'>
            <div className='inner'>
              <ReactMarkdown source={markdown} />
            </div>
          </div>
      </div>
    );
  }
}

export default Resume;