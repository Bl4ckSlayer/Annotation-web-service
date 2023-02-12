import React, { Component } from "react";
import Annotation from "react-image-annotation";

export default class ImageAnnoter extends Component {
  state = {
    image: "",
    annotations: [],
    annotation: {},
  };
  imgSelect(e) {
    this.setState({ image: URL.createObjectURL(e.target?.files[0]) });
  }

  onChange = (annotation) => {
    this.setState({ annotation });
  };

  onSubmit = (annotation) => {
    const { geometry, data } = annotation;

    this.setState({
      annotation: {},
      annotations: this.state.annotations.concat({
        geometry,
        data: {
          ...data,
          id: Math.random(),
        },
      }),
    });
  };

  render() {
    return (
      <>
        <section className=" bg-neutral my-16 items-center text-center ">
          <h1 className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 p-2 hover:bg-gradient-to-l from-blue-500 to-purple-500">
            Try Our image Annotation Tools for free
          </h1>
          <progress
            className="progress w-40  progress-primary bg-primary mx-auto  mt-6  "
            value="100"
            max="100"
          ></progress>
          <div className=" px-6 py-8   ">
            <div className="items-center ">
              {!this.image && (
                <div>
                  <h2 className="text-white p-4">
                    Select an image for Annotation:
                  </h2>
                  <input
                    className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                    accept="image/x-png,image/gif,image/jpeg"
                    type="file"
                    onChange={this.imgSelect.bind(this)}
                  />
                </div>
              )}
              <div className="text-center mx-auto  mt-16 w-2/4 text-black font-bold">
                <Annotation
                  src={this.state?.image}
                  alt=""
                  annotations={this.state?.annotations}
                  type={this.state?.type}
                  value={this.state.annotation}
                  onChange={this.onChange}
                  onSubmit={this.onSubmit}
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
