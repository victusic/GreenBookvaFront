import React, { useState } from 'react';

import styles from './aboutPhrases.module.scss';
import { getPhrases } from '../../../../../actions/requestActions/mongo';
import { useEffect } from 'react';
import { useRef } from 'react';
import { PhraseDTO } from '../../../../../actions/types/requestActions';
import { AnyResponse } from '../../../../../actions/types/types';
import { Phrase } from '../../../../../utils/types';

const AboutPhrases: React.FC = () => {
  const [code, setCode] = useState('');
  const [phrases, setPhrases] = useState<Phrase[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [goLoad, setGoLoad] = useState(true);

  const observer = useRef<IntersectionObserver | null>(null);
  const lastElement = useRef<HTMLDivElement>(null);

  function gluingProcess(data: Phrase[]) {
    if (data) {
      const oldCode = code;
      const codes: number[] = [];
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
    getPhrases(code).then((response: AnyResponse<PhraseDTO[]>) => {
      if (response.status) {
        setPhrases((prevArray) => prevArray.concat(response.data));
        gluingProcess(response.data);
        setIsLoading(false);
      } else {
        console.error(`Error ${response.code}: Failed to fetch products`);
      }
    });
  }
  //слежка за концом ленты
  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    const callback = function (entries) {
      if (entries[0].isIntersecting && goLoad) {
        fetching();
      }
    };
    observer.current = new IntersectionObserver(callback);
    if (lastElement.current) observer.current.observe(lastElement.current);
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
