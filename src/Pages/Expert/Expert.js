import React from 'react';

const Expert = ({ expert }) => {
    const { name, img, expertize } = expert;
    return (
        <div className="col-12 col-sm-6 col-md-6 col-lg-3  shadow-lg mx-2 my-4 rounded-3">
            <img className="p-2 rounded-2" src={img} alt="" />
            <h3>{name}</h3>
            <h6 className="text-danger">{expertize}</h6>
        </div>
    );
};

export default Expert;