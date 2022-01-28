import * as io from 'io-ts';
import * as E from 'fp-ts/Either';
import * as O from 'fp-ts/Option';
import {formatValidationError} from 'io-ts-reporters';

type RunDecoder = <I, A>(type: io.Decoder<I, A>) => (data: I) => A;

export const formatErrors = (errors: io.Errors) =>
  errors
    .map(e => formatValidationError(e))
    .filter(O.isSome)
    .map(opt => opt.value)
    .join('\n');

export const runDecoder: RunDecoder = type => data => {
  const result = type.decode(data);
  if (E.isLeft(result)) {
    console.error(formatErrors(result.left));
    throw new Error('Error Decoding Type');
  }
  return result.right;
};
