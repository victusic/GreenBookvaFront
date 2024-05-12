import React, { useState } from 'react';

import styles from './aboutPhrases.module.scss';
import { getPhrases } from '../../../../../actions/requestActions/mongo';
import { useEffect } from 'react';
import { useRef } from 'react';

const AboutPhrases = () => {
  const [code, setCode] = useState('');
  const [phrases, setPhrases] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [goLoad, setGoLoad] = useState(true);

  const lastElement = useRef();
  const observer = useRef();

  function gluindProcess(data) {
    if (data) {
      const oldCode = code;
      let codes = [];
      data.map((block) => {
        codes.push(block.number);
      });
      const gluing = codes.join('|');
      {
        oldCode ? setCode(oldCode + '|' + gluing) : setCode(gluing);
      }
      {
        data.length < 8 && setGoLoad(false);
      }
    }
  }

  function fetching() {
    setIsLoading(true);
    getPhrases(code)
      .then((data) => {
        setPhrases((prevArray) => prevArray.concat(data));
        return data;
      })
      .then((data) => gluindProcess(data))
      .then(() => setIsLoading(false));
  }

  //слежка за концом ленты
  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    let callback = function (entries, observer) {
      if (entries[0].isIntersecting && goLoad) {
        fetching();
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current);
  }, [isLoading]);

  return (
    <>
      <h3 className={styles.titleColumnText}>А ниже вас ждут факты</h3>
      {phrases.map((phrase) => (
        <div key={phrase.id}>
          <h1 className={styles.arrowColumnText}>↓</h1>
          <h2 className={styles.mainColumnText}>{phrase.text}</h2>
        </div>
      ))}
      <div ref={lastElement} className={styles.refLine} />
    </>
  );
};

export default AboutPhrases;
