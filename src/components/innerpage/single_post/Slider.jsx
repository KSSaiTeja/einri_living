import React from 'react';

function Slider({ article }) {
  if (!article) return null;
  
  return (
    <section className="tc-main-img-style1 header">
      <div className="main-img">
        <img
          src={article.img}
          alt={article.title}
          className="img-cover"
          data-speed="1.25"
        />
      </div>
      <div className="content">
        <div className="container">
          <div className="info">
            <div className="date fsz-12 text-uppercase mb-30">
              <span> {article.category} </span>
              <span className="circle icon-3 bg-white rounded-circle mx-3"></span>
              <span> {article.history.replace('<br />', ' ')} </span>
            </div>
            <h2 className="title">
              <span className="hover-orange1">
                {article.title}
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
