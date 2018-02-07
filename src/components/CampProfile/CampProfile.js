import React from 'react';

const CampProfile = ({ Camp }) => {
    const { name, price, image, description, author, comments } = Camp;
    return (
       <div className="container tl">
        <div className="row">
            <div className="col-md-3">
            <p className="lead">YeldCamp</p>
            <div className="list-group">
                <li className="list-group-item active">Info 1</li>
                <li className="list-group-item">Info 2</li>
                <li className="list-group-item">Info 3</li>
            </div>
            </div>
            <div className="col-md-9">
            <div className="thumbnail">
                <img className="img-responsive w-100" src={`${image}`} alt="camp image" />
                <div className="caption">
                <h4 className="pull-right b">{`$${price}/night`}</h4>
                <h4><a>{`${name}`}</a></h4>
                <p>{`${description}`}</p>
                <p>{`Submitted by ${author}`}</p>
                </div>
            </div>
            <div className="well">
                <div className="text-right">
                <a className="btn btn-success" href="/campgrounds/<%= campground._id %>/comments/new">Add New Comment</a>
                </div>
                <hr/>
                {/* <% campground.comments.forEach(function(comment){ %> */}
                <div className="row">
                    <div className="col-md-12">
                    <strong>{`${comments[0].author.username}`}</strong>
                    <span className="pull-right">10 days ago</span>
                    <p>{`${comments[0].text}`}</p>
                    </div>
                </div>
                {/* <% }) %> */}
            </div>
            </div>
        </div>
        </div>
    ); // eof return
} //eof const CampProfile

export default CampProfile;