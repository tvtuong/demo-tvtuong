import React from 'react';

const BaseCard: React.FC = () => {
  return (
    <div className="card-group mb-3 mt-2">
        <div className="card rew-8">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="card-link">
              Card link
            </a>
            <a href="#" className="card-link">
              Another link
            </a>
          </div>
        </div>
        <div className="card ms-2">
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://thoidai.com.vn/stores/news_dataimages/doan.phan/082020/06/12/khoanh-khac-chai-luoi-o-viet-nam-nam-trong-top-anh-dep-cua-giai-anh-quoc-te-00-.9288.jpg?rt=20200806125829"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card ms-2">
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://thoidai.com.vn/stores/news_dataimages/doan.phan/082020/06/12/khoanh-khac-chai-luoi-o-viet-nam-nam-trong-top-anh-dep-cua-giai-anh-quoc-te-00-.9288.jpg?rt=20200806125829"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
export default BaseCard;
