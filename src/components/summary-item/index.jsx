import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-6',
  name: 'font-bold text-darktext pb-1 inline-block',
  description: 'text-md text-black font-light',
  date: 'text-md text-black font-light font-style: italic',
};

const SummaryItem = ({
  name,
  description,
  link = false,
  internal = false,
  dates = false,
}) => {
  let linkContent;
  if (internal) {
    linkContent = <Link to={link}>{name}</Link>;
  } else {
    linkContent = <a href={link}>{name}</a>;
  }

  let descriptionContent;
  if (Array.isArray(description)) {
    descriptionContent = [];
    for (let i = 0; i < description.length; i++) {
      let summary = [];
      if (dates) {
        summary.push(
          <p className={classes.description}>
            {description[i]},{' '}
            {dates[i] ? <span className={classes.date}>{dates[i]}</span> : ''}
          </p>
        );
      } else {
        summary.push(<p className={classes.description}>{description[i]}</p>);
      }
      descriptionContent.push(summary);
    }
  } else {
    descriptionContent = <p className={classes.description}>{description}</p>;
  }

  return (
    <div className={classes.wrapper}>
      <h3
        className={`${classes.name} ${
          link ? 'hover:text-awesome hover:no-underline' : ''
        }`}
      >
        {link ? linkContent : name}
      </h3>
      {descriptionContent}
    </div>
  );
};

export default SummaryItem;
