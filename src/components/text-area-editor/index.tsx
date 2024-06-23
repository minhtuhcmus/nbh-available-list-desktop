import React, { Component } from "react";
import { EditorState, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import convertToHtml from "draftjs-to-html";

// examples in https://github.com/jpuri/react-draft-wysiwyg/tree/master/stories
function uploadImageCallBack(file: File) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api.imgur.com/3/image");
    xhr.setRequestHeader("Authorization", "Client-ID XXXXX");
    const data = new FormData();
    data.append("image", file);
    xhr.send(data);
    xhr.addEventListener("load", () => {
      const response = JSON.parse(xhr.responseText);
      resolve(response);
    });
    xhr.addEventListener("error", () => {
      const error = JSON.parse(xhr.responseText);
      reject(error);
    });
  });
}

interface Props {
  setDocNoti:any
}

interface State {
  editorState: EditorState;
  editMode: boolean;
}

export default class EditorContainer extends Component<Props, State> {
  private editorRef: React.RefObject<Editor>;
  constructor(props: any) {
    super(props);
    this.state = {
      editorState: EditorState.createWithContent(
        ContentState.createFromText("abcde")
      ),
      editMode: true
    };
    this.editorRef = React.createRef<Editor>();
  }

  focus = () => {
    let editor = this.editorRef.current;
    if (editor) {
      editor.focusEditor();
    }
  };

  componentDidMount = () => {
    console.log("edit Me");
    if (this.state.editMode) {
      this.focus();
    }
  };

  toggleEditMode = () => {
    this.setState({ editMode: !this.state.editMode });
  };

  onEditorStateChange = (editorState: EditorState) => {
    console.log(editorState)
    this.setState({
      editorState
    });
  };

  render() {
    return (
      <div className="editor">
        <Editor
          editorState={this.state.editorState}
          onEditorStateChange={this.onEditorStateChange}
          onChange={(e: any) => {
            this.props.setDocNoti(`
              <html>
                <body>
                  ${convertToHtml(e)}
                </body>
              </html>
             `)
          }}
          ref={this.editorRef}
          // toolbarHidden={true}
          toolbar={{
          }}
        />
      </div>
    );
  }
}