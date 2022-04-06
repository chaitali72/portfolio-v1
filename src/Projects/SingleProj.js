import React, { Component } from "react";

export class SingleProj extends Component {
  state = {};

  render() {
    return (
      <div className="col-lg-8">
        <div className="card bg-light mb-3 cardproject">
          <br />
          <img
            alt={this.props.title}
            src={this.props.img}
            className="project-image"
            style={{ height: "auto", width: "100%" }}
          />
          <div className="card-body">
            <h5 className="catd-title text-bold">{this.props.title}</h5>
            <p className="card-desc">{this.props.description}</p>
            <p className="card-desc text-purple">{this.props.techstack}</p>
            {this.props.website ? (
              <a href={this.props.website} className="btn btn-info mr-2">
                Website
              </a>
            ) : null}
            <a href={this.props.github} className="btn btn-secondary">
              Github
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleProj;
