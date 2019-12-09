import { SignupActionType, SignupAction } from '../Constants/Signup'

export const loading = (loading: boolean): SignupAction => ({
  type: SignupActionType.LOADING,
  payload: { loading }
})

export const changeEmail = (email: string): SignupAction => ({
  type: SignupActionType.CHANGE_EMAIL,
  payload: { email }
})

export const changePassword = (password: string): SignupAction => ({
  type: SignupActionType.CHANGE_PASSWORD,
  payload: { password }
})

export const changeAgreement = (agreement: boolean): SignupAction => ({
  type: SignupActionType.CHANGE_AGREEMENT,
  payload: { agreement }
})

export const requestSignup = (): SignupAction => ({
  type: SignupActionType.REQUEST_SIGNUP
})

export const setError = (error: {code: string, message: string}): SignupAction => ({
  type: SignupActionType.SET_ERROR,
  payload: { error }
})