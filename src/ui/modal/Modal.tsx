import React, { ReactNode, useRef, useState } from 'react';

import { HandySvg } from 'handy-svg';
import CloseSvg from '../../assets/svg/exit.svg';

import styles from './modal.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { refreshModalVisibleAction } from '../../store/modalVisibleReducer';
import { useEffect } from 'react';
import { RootState } from '../../store';

interface ModalProps {
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const dispatchCategories = useDispatch();

  const sizeRef = useRef<HTMLDivElement | null>(null);

  const [blockHeight, setBlockHeight] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [scrollStyle, setScrollStyle] = useState('');
  const [nonScrollHeight, setNonScrollHeight] = useState(0);

  //высота блока
  useEffect(() => {
    if (!sizeRef) return;

    const updateBlockHeight = () => {
      if (sizeRef.current) {
        const height = sizeRef.current.offsetHeight;
        setBlockHeight(height);
      }
    };
    updateBlockHeight();
    const observer = new ResizeObserver(updateBlockHeight);
    if (sizeRef.current) {
      observer.observe(sizeRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [sizeRef]);

  const modalVisible = useSelector((state: RootState) => state.modalVisible.modalVisible);

  //высота окна
  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    handleResize(); // Получаем текущую высоту экрана при монтировании компонента

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize); // Удаляем обработчик при размонтировании компонента
    };
  }, []);

  useEffect(() => {
    if (blockHeight >= viewportHeight) {
      setScrollStyle(styles.scroll);
      //выход из скрола
      if (viewportHeight > nonScrollHeight) {
        setScrollStyle('');
      }
    } else {
      setNonScrollHeight(viewportHeight);
      setScrollStyle('');
    }
  }, [blockHeight, viewportHeight]);

  useEffect(() => {
    {
      modalVisible ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
    }
    setScrollStyle('');
  }, [modalVisible]);

  return (
    <div className={styles.fog} onClick={() => dispatchCategories(refreshModalVisibleAction(/*false */))}>
      <div className={styles.base + ' ' + scrollStyle} onClick={(e) => e.stopPropagation()} ref={sizeRef}>
        <div onClick={() => dispatchCategories(refreshModalVisibleAction(/*false */))}>
          <HandySvg src={CloseSvg} className={styles.close + ' ' + styles.closeColor} />
        </div>

        {children}
      </div>
    </div>
  );
};

export default Modal;
