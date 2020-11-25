import React, {Component} from "react";
import {Link} from "react-router-dom";
import Dropzone from "react-dropzone";

export class UploadVideoPage extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.onDrop = (files) => {
            this.setState({files})
        };
        this.state = {
            files: []
        };
        this.handleDrop = (file) => {
            if (file.length !== 0) {
                // initVideo().then(data => {
                //     // uploadVideo(file, data._links.self.href).then(r => {
                //     //     console.log(r.data)
                //     // })
                // });
            }
        }
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
                <div className="row">
                    <div className="col-md-6">
                        <div className="input-group">
                            <label>Title</label>
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                                   aria-describedby="basic-addon1"/>
                        </div>
                        <div className="input-group">
                            <label>Description</label>
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                                   aria-describedby="basic-addon1"/>
                        </div>
                        <div className="input-group">
                            <label>Video Status</label>
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                                   aria-describedby="basic-addon1"/>
                        </div>
                        <div className="input-group">
                            <label>Tags</label>
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                                   aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <Dropzone onDrop={this.onDrop} onDropAccepted={this.handleDrop(files)}>
                            {({getRootProps, getInputProps}) => (
                                <main role="main" className="ml-sm-auto col-lg-10 px-4">
                                    <section className="container">
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
                    </div>
                </div>
            </main>
        );
    }
}
