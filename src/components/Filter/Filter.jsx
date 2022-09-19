import { ParagraphStyled, InputStyled, FilterWrapStyled } from 'components';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <>
      <FilterWrapStyled>
        <ParagraphStyled>Find contact by name</ParagraphStyled>
        <InputStyled name="filter" onChange={onChange} value={value} />
      </FilterWrapStyled>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
