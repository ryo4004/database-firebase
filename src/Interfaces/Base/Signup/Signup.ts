export interface SignupState {
  loading: boolean,
  email: string,
  password: string,
  agreement: boolean,
  error: {code: string, message: string}
}

export interface StateProps {
  loading: boolean,
  email: string,
  password: string,
  agreement: boolean,
  error: {code: string, message: string}
}

export interface DispatchProps {
  changeEmail: (email: string) => void,
  changePassword: (password: string) => void,
  changeAgreement: (agreement: boolean) => void,
  requestSignup: () => void,
  setError: (error: {code: string, message: string}) => void
}

export interface SignupProps {
  loading: boolean,
  email: string,
  password: string,
  agreement: boolean,
  error: {code: string, message: string},
  changeEmail: (email: string) => void,
  changePassword: (password: string) => void,
  changeAgreement: (agreement: boolean) => void,
  requestSignup: () => void,
  setError: (error: {code: string, message: string}) => void
}