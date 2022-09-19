import { InputRadioStyled, LabelRadio } from 'components';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setColor } from 'redux/color/color-Slice';

export const RadioInput = () => {
  const color = useSelector(state => state.contacts.color);
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(setColor(e.target.value));
  };

  return (
    <>
      <LabelRadio>
        <InputRadioStyled
          name="color"
          type="radio"
          checked={color === 'green'}
          onChange={onChange}
          value="green"
        />
        green
      </LabelRadio>
      <LabelRadio>
        <InputRadioStyled
          name="color"
          type="radio"
          checked={color === 'red'}
          onChange={onChange}
          value="red"
        />
        Red
      </LabelRadio>
      <LabelRadio>
        <InputRadioStyled
          name="color"
          type="radio"
          checked={color === 'grey'}
          onChange={onChange}
          value="grey"
        />
        Grey
      </LabelRadio>
    </>
  );
};

RadioInput.propTypes = {
  onChange: PropTypes.func,
  radioOptions: PropTypes.array,
};
