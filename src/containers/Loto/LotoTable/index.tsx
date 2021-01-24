import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { lotoPlayAction } from '../../../store/loto/actions';
import { LotoCell, Button, Icon } from '../../../components';
import { P } from '../../../components/Typography';
import { customArrayCreator } from '../../../utils';
import magicWand from '../../../assets/img/magic-wand.svg';
import styles from './styles.module.scss';

const FIRST_FIELD_CELL_NUM = 19;
const FIRST_FIELD_MAX_SELECTED = 8;
const SECOND_FIELD_CELL_NUM = 2;
const SECOND_FIELD_MAX_SELECTED = 1;


const LotoTable = () => {

  const dispatch = useDispatch();

  const isPlayInProgress = useSelector((state: any) => state.ui.LOTO_PLAY === 'REQUEST');
  
  const [firstFieldSelectedCells, setFirstFieldSelectedCells] = useState<Array<number>>([]);
  const [secondFieldSelectedCells, setSecondFieldSelectedCells] = useState<Array<number>>([]);

  const [isFieldOneTipVisible, setFieldOneTipVisible] = useState<boolean>(false);
  const [isFieldTwoTipVisible, setFieldTwoTipVisible] = useState<boolean>(false);

  const isSelected = (num: number, isFirstField: boolean) => {
    return isFirstField ? firstFieldSelectedCells.includes(num) : secondFieldSelectedCells.includes(num);
  };

  const showTip = (showFieldTip: (arg0: boolean) => void) => {
    showFieldTip(true);
    setTimeout(() => {
      showFieldTip(false);
    }, 3000);
  };

  const cellClickHandler = (num: number, isFirstField: boolean) => {
    if (isFirstField) {
      if (isSelected(num, isFirstField)) {
        setFirstFieldSelectedCells(firstFieldSelectedCells.filter((e) => e !== num));
      } else {
        if (firstFieldSelectedCells.length >= FIRST_FIELD_MAX_SELECTED) {
          showTip(setFieldOneTipVisible);
          return;
        }
        setFirstFieldSelectedCells([...firstFieldSelectedCells, num]);
      }
    } else if (isSelected(num, isFirstField)) {
      setSecondFieldSelectedCells(secondFieldSelectedCells.filter((e) => e !== num));
    } else {
      if (secondFieldSelectedCells.length === SECOND_FIELD_MAX_SELECTED) {
        showTip(setFieldTwoTipVisible);
        return;
      }
      setSecondFieldSelectedCells([...secondFieldSelectedCells, num]);
    }
  };

  const createButtons = (field: number) => {
    const buttons = [];
    const isFieldOne = field > 3;
    for (let i = 0; i < field; i += 1 ) {
      buttons.push(
        <LotoCell
          key={i}
          name={i + 1}
          onClick={() => cellClickHandler(i, isFieldOne)}
          selected={isSelected(i, isFieldOne)}
         />,
      );
    }
    return buttons;
  };

  const resultButtonHandler = () => {
    dispatch(lotoPlayAction({
      firstField: firstFieldSelectedCells,
      secondField: secondFieldSelectedCells,
    }));
    // setFirstFieldSelectedCells([]);
    // setSecondFieldSelectedCells([]);
  };

  return (
    <>
      <Button
        onClick={() => {
          setFirstFieldSelectedCells(customArrayCreator(FIRST_FIELD_MAX_SELECTED, FIRST_FIELD_CELL_NUM));
          setSecondFieldSelectedCells(customArrayCreator(SECOND_FIELD_MAX_SELECTED, SECOND_FIELD_CELL_NUM));
        }}
        className={styles.magicWand}
        transparent
        size='sm'
      >
        <Icon icon={magicWand} />
      </Button>
      <section className={styles.field}>
        <div className={styles.fieldTitle}>
          <P bold>Поле 1</P>
          <P>Отметьте 8 чисел</P>
        </div>
        <div>
          {createButtons(FIRST_FIELD_CELL_NUM)}
        </div>
        <P
          style={{
            display: isFieldOneTipVisible ? 'block' : 'none',
          }}
          className={styles.fieldTip}
          color='error'>
          Нельзя выбрать больше 8 чисел
        </P>
      </section>
      <div className={styles.fieldTitle}>
        <P bold>Поле 2</P>
        <P>Отметьте 1 число</P>
      </div>
      <div>
        {createButtons(SECOND_FIELD_CELL_NUM)}
      </div>
        <P
          style={{
            display: isFieldTwoTipVisible ? 'block' : 'none',
          }}
          className={styles.fieldTip}
          color='error'>
          Нельзя выбрать больше 1 числа
        </P>
      <div className={styles.resultButtonWrapper}>
        <Button
          className={styles.resultButton}
          name='Показать результат'
          disabled={firstFieldSelectedCells.length < 8 || secondFieldSelectedCells.length !== 1}
          onClick={() => resultButtonHandler()}
          loading={isPlayInProgress}
      />
      </div>
    </>
  );
};

export default LotoTable;
