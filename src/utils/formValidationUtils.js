import * as Yup from 'yup';

export const atLeastOneCharacter = (value) => value?.length >= 1 ?? false;

export const addEntryValidationSchema = (key) =>
  Yup.object().shape({
    [key]: Yup.string().test(
      'At least one character',
      'This field needs a name that is greater than one character',
      atLeastOneCharacter,
    ),
  });
