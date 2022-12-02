import React from 'react';
import { useState, useEffect } from 'react';
import { ApiCast } from '../../components/Api/Api';
import { useParams } from 'react-router-dom';

import css from './Cast.module.css';

const Cast = () => {
  const [members, setMembers] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    ApiCast(movieId).then(res => {
      const { data } = res;

      if (data.cast.length === 0) {
        return;
      }
      setMembers(data.cast);
    });
  }, [movieId]);

  return (
    <div className={css.cast__container}>
      {members.length > 0 ? (
        <>
          <h2 className={css.cast__title}>Series Cast</h2>
          <ul className={css.cast__list}>
            {members.map(({ id, original_name, character, profile_path }) => (
              <li className={css.cast__item} key={id}>
                <h3 className={css.cast__itemTitle}>{original_name}</h3>
                <h4 className={css.cast__itemCharacter}>{character}</h4>

                <img
                  className={profile_path
                    ? css.cast__img
                    : css.cast__img__notfound}
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w300${profile_path}`
                      : `https://i2.wp.com/avatar-management--avatars.us-west-2.prod.public.atl-paas.net/default-avatar-4.png?ssl=1`
                  }
                  alt={original_name}
                />
              </li>
            ))}
          </ul>
        </>
      ) : (
        'Did not have any results'
      )}
    </div>
  );
};

export default Cast;
