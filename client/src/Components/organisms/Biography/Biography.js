import React from 'react';

const Biography = ({infos}) => {

  return (
    <section className="Biography">
      <div className="Biography__wrapper content-wrapper">
        <div className="Biography__container">
          <div className="Biography__infos">
            <div className="Biography__info">
              <p>Ces mentors</p>
              <p>{infos.mentors ? infos.mentors.join(', ') : null}</p>
            </div>
            <div className="Biography__info">
              <p>Fun facts</p>
              <p>{infos.fun_facts ? infos.fun_facts[ Math.floor(Math.random() * infos.fun_facts.length) ] : null }</p>
            </div>
          </div>
          <p className="Biography__label">Biographie</p>
        </div>
        <div className="Biography__container">
          <div className="Biography__texts">
            {infos.bio ? infos.bio.map((item, id) =>
              <p className="Biography__text text-large" key={id}>{item}</p>
            ) : null}
          </div>
          <div className="Biography__image" style={{ backgroundImage: `url(${infos.picture})` }}></div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
