import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Dropdown, TextInput } from '../../../components';

const MortgageInfoForm = () => {
  const dispatch = useDispatch();
  // values are pulled in from selectors via redu

  const onChange = (event) => {
    // dispatch change to redux here for on change
    dispatch();
  };

  return (
    <Form>
      <Dropdown onChange={onChange} value={state.mortgageLength} />
      <TextInput onChange={onChange} value={state.interestRate} />
    </Form>
  );
};

const Form = styled.form``;

export default MortgageInfoForm;
