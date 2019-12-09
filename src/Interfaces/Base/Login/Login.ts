export interface LoginState {
  loading: boolean,
  email: string,
  password: string,
  error: {code: string, message: string}
}

export interface StateProps {
  loading: boolean,
  email: string,
  password: string,
  error: {code: string, message: string}
}

export interface DispatchProps {
  changeEmail: (email: string) => void,
  changePassword: (password: string) => void,
  requestLogin: () => void,
  setError: (error: {code: string, message: string}) => void
}

export interface LoginProps {
  loading: boolean,
  email: string,
  password: string,
  error: {code: string, message: string},
  changeEmail: (email: string) => void,
  changePassword: (password: string) => void,
  requestLogin: () => void,
  setError: (error: {code: string, message: string}) => void
}