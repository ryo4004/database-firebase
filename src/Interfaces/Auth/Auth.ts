export interface AuthState {
  loading: boolean
}

export interface StateProps {
  loading: boolean
}

export interface DispatchProps {
  requestAuthentication: () => void
}

export interface AuthProps {
  loading: boolean,
  requestAuthentication: () => void
}