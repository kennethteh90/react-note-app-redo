import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

class NoteList extends React.Component {

  render() {

    const notes = this.props.list.map((step, noteNumber) => {
      const title = this.props.list[noteNumber].title;
      const body = this.props.list[noteNumber].body;

      return (
        <button key= { noteNumber } className="note-li" onClick = { () => this.props.jumpTo(noteNumber) } >
          <h4>{ title.slice(0,40) }</h4>
          <p>{ body.slice(0,120) }</p>
          <hr />
        </button>
      );

    });

    return (
      <div> { notes.reverse() } </div>
    );

  };
}

class Note extends React.Component {

  render() {
    return(
      <div>
        <form className="form">
          <div className="form-group">
            <input className="form-control m-3" type="text" value = { this.props.title } onChange = { this.props.onTitleChange } onFocus = {this.props.onTitleFocus } />
            <textarea className="form-control m-3" value = { this.props.body } onChange = { this.props.onBodyChange } rows="10" />
          </div>
        </form>
      </div>
    )

  }
}

class NoteApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [{
        title: 'Add a title!',
        body: 'Add some content!',
      }],
      noteNumber: 0,
    };

    // this.handleTitleChange = this.handleTitleChange.bind(this);
    // this.handleBodyChange = this.handleBodyChange.bind(this);
    // this.handleTitleFocus = this.handleTitleFocus.bind(this);
  }

  handleTitleChange(e) {
    const noteNumber = this.state.noteNumber;
    var list = { ...this.state.list };
    list[noteNumber].title = e.target.value;
    this.setState(list);
  }

  handleTitleFocus(e) {
    e.target.select();
  }

  handleBodyChange(e) {
    const noteNumber = this.state.noteNumber;
    var list = { ...this.state.list };
    list[noteNumber].body = e.target.value;
    this.setState(list);
  }

  handleAddClick(e) {
    const list = this.state.list;
    this.setState( {
      list: list.concat([{
        title: "Add a title!",
        body: "Add some content!",
      }]),
      noteNumber: list.length,
    });
  }

  handleDeleteClick(e) {
    const noteNumber = this.state.noteNumber;
    const list = this.state.list;
    list.splice(noteNumber, 1)
    this.setState({
      list: list,
      noteNumber: list.length - 1,
    });
  }

  jumpTo(noteNumber) {
    this.setState({
      noteNumber: noteNumber,
    });
  }

  render() {

    const noteNumber = this.state.noteNumber
    const title = this.state.list[noteNumber].title;
    const body = this.state.list[noteNumber].body;

    return (

      <div>

        <h1 className="jumbotron">Welcome to Kenneth's Note App!</h1>

        <div className="container">


          <div className="list col-4 p-2">
            <NoteList
              list = { this.state.list }
              noteNumber = { noteNumber }
              jumpTo = { (noteNumber) => this.jumpTo(noteNumber) }
            />
          </div>

          <div className="note col-7">
            <Note
              title = { title }
              body = { body }
              onTitleChange = { (e) => this.handleTitleChange(e) }
              onBodyChange = { (e) => this.handleBodyChange(e) }
              onTitleFocus = { (e) => this.handleTitleFocus(e) }
            />

            <button className="btn btn-outline-success m-2" onClick = { (e) => this.handleAddClick(e) } > Add a new note! </button>

            <button className="btn btn-outline-danger m-2" onClick = { (e) => this.handleDeleteClick(e) } > Delete note! </button>

          </div>

        </div>

      </div>
    )
  }

}

// =================================
ReactDOM.render(
  <NoteApp />,
  document.getElementById('root')
);
