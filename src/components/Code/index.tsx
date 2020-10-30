import React from 'react';
import Grid from 'src/components/Grid';
import { ControlledEditor } from '@monaco-editor/react';
import sassCompiler from 'src/server/sassCompiler';

interface Props {
  input: string;
  height?: number;
}

interface State {
  output: string;
}

class Code extends React.Component<Props, State> {
  state = {
    output: '',
  };

  componentDidMount() {
    const { input } = this.props;

    this.getStyles(input);
  }

  getStyles = async (style: string) => {
    const res = await sassCompiler(style);

    if (res) {
      this.setState({
        output: res.data.css,
      });
    }
  };

  handleEditorChange = (value: string | undefined): void => {
    if (value) {
      this.getStyles(value);
    }
  };

  render() {
    const { input, height = 500 } = this.props;
    const { output } = this.state;

    const editorProps = {
      height: `${height}px`,
      theme: 'dark',
      className: 'Editor',
    };

    return (
      <Grid classNames='Grid-editor'>
        <ControlledEditor
          {...editorProps}
          language='scss'
          value={input}
          onChange={(_e, value) => this.handleEditorChange(value)}
        />
        <ControlledEditor {...editorProps} language='css' value={output} />
      </Grid>
    );
  }
}

export default Code;
