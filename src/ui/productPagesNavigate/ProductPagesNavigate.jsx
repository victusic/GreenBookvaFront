import React, { useEffect, useState } from 'react';

import styles from './productPagesNavigate.module.scss';
import WhiteTile from '../buttons/whiteTile/WhiteTile';
import { useSelector } from 'react-redux';

const ProductPagesNavigate = ({ totalCount, limit, currentPage, setCurrentPage }) => {
  const [pagesButtons, setPagesButtons] = useState([]);

  const setVisiblePagesAction = useSelector((state) => state.filter.visiblePages);

  useEffect(() => {
    let pagesButtons = [];
    const pagesCount = Math.ceil(totalCount / limit);
    for (let i = 0; i < pagesCount; i++) {
      pagesButtons.push(i + 1);
    }
    setPagesButtons(pagesButtons);
  }, [totalCount, limit]);

  return (
    <>
      {setVisiblePagesAction && (
        <div className={styles.buttonsPlate}>
          {currentPage === 1 ? (
            <WhiteTile addStyle={styles.leftRightButtons + ' ' + styles.pagesButtonsDisabled}>❮</WhiteTile>
          ) : (
            <WhiteTile
              addStyle={styles.leftRightButtons + ' ' + styles.pagesButtons}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              ❮
            </WhiteTile>
          )}

          <div className={styles.pagesButtonsPlate}>
            {pagesButtons.length > 7 ? (
              <>
                {pagesButtons.length > currentPage - 3 && currentPage - 3 > 0 && (
                  <h3 className={styles.menuPoints}>...</h3>
                )}

                {/*Дорисовка кнопок в конце*/}

                {currentPage === pagesButtons.length && (
                  <>
                    <WhiteTile
                      addStyle={styles.pagesButtons}
                      onClick={() => setCurrentPage(pagesButtons.length - 4)}
                    >
                      {pagesButtons.length - 4}
                    </WhiteTile>
                    <WhiteTile
                      addStyle={styles.pagesButtons}
                      onClick={() => setCurrentPage(pagesButtons.length - 3)}
                    >
                      {pagesButtons.length - 3}
                    </WhiteTile>
                  </>
                )}

                {currentPage === pagesButtons.length - 1 && (
                  <WhiteTile
                    addStyle={styles.pagesButtons}
                    onClick={() => setCurrentPage(pagesButtons.length - 4)}
                  >
                    {pagesButtons.length - 4}
                  </WhiteTile>
                )}

                {pagesButtons.map((pageButton) => {
                  if (pageButton < currentPage + 3 && pageButton > currentPage - 3) {
                    return (
                      <WhiteTile
                        addStyle={currentPage === pageButton ? styles.pageNow : styles.pagesButtons}
                        key={pageButton}
                        onClick={() => setCurrentPage(pageButton)}
                      >
                        {pageButton}
                      </WhiteTile>
                    );
                  }
                  return null;
                })}

                {/*Дорисовка кнопок в конце*/}
                {currentPage === 1 && (
                  <>
                    <WhiteTile addStyle={styles.pagesButtons} onClick={() => setCurrentPage(4)}>
                      {4}
                    </WhiteTile>
                    <WhiteTile addStyle={styles.pagesButtons} onClick={() => setCurrentPage(5)}>
                      {5}
                    </WhiteTile>
                  </>
                )}
                {currentPage === 2 && (
                  <WhiteTile addStyle={styles.pagesButtons} onClick={() => setCurrentPage(5)}>
                    {5}
                  </WhiteTile>
                )}

                {pagesButtons.length > currentPage + 2 && <h3 className={styles.menuPoints}>...</h3>}
              </>
            ) : (
              <>
                {pagesButtons.map((pageButton) => (
                  <WhiteTile
                    addStyle={currentPage === pageButton ? styles.pageNow : styles.pagesButtons}
                    key={pageButton}
                    onClick={() => setCurrentPage(pageButton)}
                  >
                    {pageButton}
                  </WhiteTile>
                ))}
              </>
            )}
          </div>

          {currentPage === pagesButtons.length ? (
            <WhiteTile addStyle={styles.leftRightButtons + ' ' + styles.pagesButtonsDisabled}>❯</WhiteTile>
          ) : (
            <WhiteTile
              addStyle={styles.leftRightButtons + ' ' + styles.pagesButtons}
              disabled={currentPage === 1 ? true : false}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              ❯
            </WhiteTile>
          )}
        </div>
      )}
    </>
  );
};

export default ProductPagesNavigate;
