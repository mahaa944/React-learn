import React, {Component} from "react";

class TeamMember extends Component{

    render(){
        return(
            <div className="col-md-4 col-sm-6">
                <div className="card shadow-sm">
                    <div className="card-header">
                    <img style={{ maxWidth: '100%', height: '200px', objectFit: 'cover' }} src={this.props.img} alt="" />
                    </div>
                    <div className="card-body">
                    <h2 className="card-title">{this.props.name}</h2>
                    <h5 className="card-subtitle mb-2 text-muted">{this.props.position}</h5>
                    <div className="card-text">
                        <p>Phone: {this.props.phone}</p>
                        <p>Email: {this.props.email}</p>
                        <p>Website: {this.props.website}</p>
                    </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default TeamMember