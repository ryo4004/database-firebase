import { User } from '../../../Library/Firebase/Authentication'

export interface HomeState {
}

export interface StateProps {
  user: User | false
}

export interface DispatchProps {
  requestLogout: () => void
}

export interface HomeProps {
  user: User | false,
  requestLogout: () => void
}