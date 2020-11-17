import React, {Component} from "react";
import {Link} from "react-router-dom";
import Dropzone from "react-dropzone";
import {initVideo, uploadVideo} from "../actions";

export class UploadVideoPage extends Component {
    constructor() {
        super();
        this.onDrop = (files) => {
            this.setState({files})
        };
        this.state = {
            files: []
        };
    }


    displayFiles(files) {
        return (
            files.length !== 0 && (
                <div>
                    <h4>You Selected</h4>
                    <ul>{files}</ul>
                    <Link to={`/create-video`}>
                        <button className="btn btn-outline-success">Continue</button>
                    </Link>
                </div>
            )
        )
    }

    render() {
        const files = this.state.files.map(file => (
            <li key={file.name}>
                {file.name} - {file.size} bytes
            </li>
        ));

        return (
            <main role="main" className="ml-sm-auto col-lg-10 px-4">
                <Dropzone onDrop={this.onDrop} onDropAccepted={this.handleDrop(files)}>
                    {({getRootProps, getInputProps}) => (
                        <main role="main" className="ml-sm-auto col-lg-10 px-4">
                            <section className="container">
                                <h4>Select files from your computer</h4>
                                <div {...getRootProps({className: 'dropzone'})}>
                                    <input {...getInputProps()} />
                                    <button type="submit" className="btn btn-sm btn-primary"
                                            id="js-upload-submit">Upload files
                                    </button>
                                </div>
                                <hr/>
                                <h4>OR</h4>
                                <div {...getRootProps({className: 'dropzone'})}>
                                    <input {...getInputProps()} />
                                    <div className="upload-drop-zone" id="drop-zone">
                                        <strong>Just drag and drop files here</strong>
                                    </div>
                                </div>
                                <aside>
                                    {this.displayFiles(files)}
                                </aside>
                            </section>
                        </main>
                    )}
                </Dropzone>
            </main>
        );
    }

    handleDrop(file) {
        if (file.length !== 0) {
            initVideo().then(data => {
                uploadVideo(file, data._links.self.href).then(r => console.log(r.data))
            });
        }
    }
}
